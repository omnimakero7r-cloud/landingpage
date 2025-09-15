# Dockerfile
FROM node:20-alpine AS base

# Instalar dependências necessárias
RUN apk add --no-cache libc6-compat wget

# Set working directory
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./
COPY pnpm-lock.yaml* ./

# Instalar pnpm e dependências
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile || pnpm install --no-frozen-lockfile

# Build stage
FROM base AS builder
WORKDIR /app

# Copiar código fonte
COPY . .

# Build da aplicação
RUN pnpm build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app

# Instalar wget para healthcheck
RUN apk add --no-cache wget

# Criar usuário não-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar arquivos necessários
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Configurar usuário
USER nextjs

# Expor porta
EXPOSE 3000

# Configurar variáveis de ambiente
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=production

# Comando de inicialização
CMD ["node", "server.js"]

# Verificação de saúde
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api/health || exit 1

# Labels para metadados
LABEL maintainer="contato@omnimaker.io"
LABEL version="v0.1.0"
LABEL description="Omnimaker Landing Page"
LABEL org.opencontainers.image.source="https://github.com/omnimaker/landingpage"
LABEL org.opencontainers.image.vendor="Omnimaker"