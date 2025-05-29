# 阶段1：构建阶段（包含开发依赖）
FROM node:20-alpine AS builder

# 推荐使用 bash 支持（可调试）
RUN apk add --no-cache bash

WORKDIR /app

# 提前复制 package 文件以利用缓存
COPY package.json package-lock.json ./

# 使用 --legacy-peer-deps 避免依赖冲突（可选）
RUN npm ci --prefer-offline

# 复制源码（晚于依赖安装，减少缓存失效）
COPY . .

# 构建 Next.js 项目
RUN npm run build


# 阶段2：运行阶段（只保留运行时内容）
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

# 只复制 package 文件并安装运行时依赖（精简）
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --prefer-offline

# 复制构建产物和必要资源
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# 添加非 root 用户以提升安全性
RUN addgroup -S app && adduser -S app -G app
USER app

# Next.js 默认监听 3000 端口
EXPOSE 3000

CMD ["npm", "start"]