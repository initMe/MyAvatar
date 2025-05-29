#!/bin/bash

# 配置变量
IMAGE_NAME="Yulyn"
TAG="1.0"
CONTAINER_NAME="Yulyn"

echo "🔍 正在停止并删除旧容器..."

# 判断容器是否存在
if [ "$(docker ps -a -q -f name=^/${CONTAINER_NAME}$)" ]; then
  docker stop $CONTAINER_NAME
  docker rm $CONTAINER_NAME
else
  echo "⚠️ 未找到容器 $CONTAINER_NAME，无需停止和删除。"
fi

echo "🧹 正在删除旧镜像..."

# 判断镜像是否存在
if [ "$(docker images -q $IMAGE_NAME:$TAG)" ]; then
  docker rmi $IMAGE_NAME:$TAG
else
  echo "⚠️ 未找到镜像 $IMAGE_NAME:$TAG，无需删除。"
fi

echo "🔨 开始构建镜像..."
docker build -t $IMAGE_NAME:$TAG .

echo "🚀 启动新容器..."
docker run -d \
  --name $CONTAINER_NAME \
  -p 3000:3000 \
  -e NODE_ENV=production \
  $IMAGE_NAME:$TAG

echo "✅ 部署完成，容器正在运行："
docker ps | grep $CONTAINER_NAME

