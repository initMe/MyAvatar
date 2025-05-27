# 阶段1：构建阶段（包含开发依赖）
FROM node:20-alpine AS builder

WORKDIR /app

# 复制包管理文件并安装依赖（含开发依赖）
COPY package.json package-lock.json ./
RUN npm ci

# 复制项目代码并构建
COPY . .
RUN npm run build


# 阶段2：生产运行阶段（仅保留运行时依赖）
FROM node:20-alpine

WORKDIR /app

# 设置生产环境变量
ENV NODE_ENV=production

# 复制包管理文件并仅安装生产依赖
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# 从构建阶段复制构建产物
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

# 使用非root用户运行（提高安全性）
RUN addgroup -S app && adduser -S app -G app
USER app

# 暴露端口（Next.js默认端口3000）
EXPOSE 3000

# 启动命令
CMD ["npm", "run", "start"]