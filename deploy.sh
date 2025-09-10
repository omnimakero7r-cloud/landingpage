#!/bin/bash
set -e

# Configurações
REGISTRY="sua-registry"
IMAGE_NAME="omnimaker-landingpage"
VERSION=$(date +%Y%m%d-%H%M%S)

echo "🚀 Iniciando deploy da Omnimaker Landing Page..."

# Build da imagem
echo "📦 Fazendo build da imagem..."
docker build -t $REGISTRY/$IMAGE_NAME:$VERSION .
docker tag $REGISTRY/$IMAGE_NAME:$VERSION $REGISTRY/$IMAGE_NAME:latest

# Push para registry
echo "📤 Enviando para registry..."
docker push $REGISTRY/$IMAGE_NAME:$VERSION
docker push $REGISTRY/$IMAGE_NAME:latest

# Deploy no swarm
echo "🔄 Fazendo deploy no Docker Swarm..."
VERSION=$VERSION DOCKER_REGISTRY=$REGISTRY docker stack deploy -c docker-stack.yaml omnimaker-stack

echo "✅ Deploy concluído! Versão: $VERSION"
