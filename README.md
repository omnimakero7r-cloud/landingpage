# 🤖 Omnimaker - Landing Page

> **Automatização de WhatsApp com IA para pequenas empresas, clínicas e profissionais liberais**

[![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-Ready-4CAF50?style=for-the-badge&logo=pwa)](https://web.dev/progressive-web-apps/)

## 📋 Índice

- [🚀 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias](#️-tecnologias)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [⚙️ Configuração e Instalação](#️-configuração-e-instalação)
- [🔧 Scripts Disponíveis](#-scripts-disponíveis)
- [🚀 Deploy](#-deploy)
- [📱 PWA Features](#-pwa-features)
- [🔍 SEO e Performance](#-seo-e-performance)
- [🎨 Design System](#-design-system)
- [📖 Documentação](#-documentação)
- [🤝 Contribuição](#-contribuição)
- [📄 Licença](#-licença)

## 🚀 Sobre o Projeto

A **Omnimaker** é uma plataforma inovadora que oferece soluções de automação de atendimento via WhatsApp usando Inteligência Artificial. Nossa landing page é uma aplicação web progressiva (PWA) construída com Next.js 15 e otimizada para performance e SEO.

### 🎯 Objetivos da Landing Page

- **Converter visitantes em leads qualificados**
- **Demonstrar o valor da automação WhatsApp**
- **Fornecer experiência mobile premium**
- **Otimizar para SEO e Core Web Vitals**

### 💼 Público-Alvo

- 🏥 **Clínicas e consultórios médicos**
- 🏢 **Pequenas e médias empresas**
- 👨‍💼 **Profissionais liberais**
- 🎯 **Empreendedores digitais**

## ✨ Funcionalidades

### 🌟 Funcionalidades Principais

- ✅ **Landing Page Responsiva** - Design moderno e adaptável
- ✅ **PWA Completa** - Aplicativo instalável com funcionalidade offline
- ✅ **SEO Otimizado** - Meta tags dinâmicas e estrutura otimizada
- ✅ **Performance Superior** - Core Web Vitals otimizados
- ✅ **Theme Switcher** - Modo claro/escuro automático
- ✅ **Animações Fluidas** - Micro-interações com Framer Motion
- ✅ **Formulários Interativos** - Captação de leads otimizada

### 🔧 Funcionalidades Técnicas

- ⚡ **Server-Side Rendering (SSR)** - Carregamento inicial rápido
- 🗄️ **Cache Inteligente** - Service Worker com múltiplas estratégias
- 📱 **Mobile First** - Design responsivo e touch-friendly
- 🔒 **LGPD Compliant** - Política de privacidade e termos detalhados
- 📊 **Analytics Ready** - Preparado para Google Analytics
- 🔄 **Hot Reload** - Desenvolvimento ágil

## 🛠️ Tecnologias

### 📚 Core Technologies

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **Next.js** | 15.1.6 | Framework React com SSR/SSG |
| **React** | 19.0.0 | Biblioteca para interfaces |
| **TypeScript** | 5.2.2 | JavaScript com tipagem estática |
| **Tailwind CSS** | 4.1.3 | Framework CSS utility-first |

### 🎨 UI/UX Libraries

| Biblioteca | Versão | Uso |
|------------|--------|-----|
| **Framer Motion** | 12.23.12 | Animações e transições |
| **Lucide React** | 0.542.0 | Ícones consistentes |
| **React Hot Toast** | 2.4.1 | Notificações elegantes |
| **Next Themes** | 0.2.1 | Sistema de temas |

### 🔧 Development Tools

- **ESLint** - Linting e qualidade de código
- **Prettier** - Formatação automática
- **PostCSS** - Processamento CSS avançado
- **SWC** - Compilador ultra-rápido

## 📁 Estrutura do Projeto

```
📦 omnimaker-landing/
├── 📁 app/                          # Next.js App Router
│   ├── 📁 (site)/                   # Grupo de rotas principal
│   │   ├── 📁 providers/            # Context providers
│   │   ├── 📁 auth/                 # Páginas de autenticação
│   │   ├── 📁 blog/                 # Blog e cases
│   │   ├── 📁 documentacao/         # Documentação técnica
│   │   ├── 📁 suporte/              # Central de ajuda
│   │   ├── 📄 layout.tsx            # Layout principal
│   │   ├── 📄 page.tsx              # Página inicial
│   │   ├── 📄 loading.tsx           # Loading UI
│   │   ├── 📄 error.tsx             # Error boundaries
│   │   └── 📄 not-found.tsx         # Página 404
│   ├── 📄 globals.css               # Estilos globais
│   └── 📄 favicon.ico               # Ícone do site
├── 📁 components/                   # Componentes React
│   ├── 📁 ui/                       # Componentes base
│   ├── 📁 Hero/                     # Seção hero
│   ├── 📁 Features/                 # Funcionalidades
│   ├── 📁 Testimonial/              # Depoimentos
│   ├── 📁 Pricing/                  # Planos e preços
│   ├── 📁 Contact/                  # Formulário contato
│   └── 📁 Footer/                   # Rodapé
├── 📁 lib/                          # Utilitários e configurações
│   ├── 📄 metadata.ts               # Sistema SEO
│   └── 📄 utils.ts                  # Funções auxiliares
├── 📁 hooks/                        # Custom React hooks
├── 📁 types/                        # Definições TypeScript
├── 📁 public/                       # Arquivos estáticos
│   ├── 📁 images/                   # Imagens otimizadas
│   ├── 📄 manifest.json             # PWA manifest
│   └── 📄 sw.js                     # Service Worker
├── 📄 next.config.js                # Configuração Next.js
├── 📄 tailwind.config.js            # Configuração Tailwind
├── 📄 tsconfig.json                 # Configuração TypeScript
└── 📄 package.json                  # Dependências do projeto
```

## ⚙️ Configuração e Instalação

### 📋 Pré-requisitos

- **Node.js** 18.0.0 ou superior
- **npm** ou **yarn** ou **pnpm**
- **Git** para versionamento

### 🚀 Instalação Rápida

```bash
# 1. Clonar o repositório
git clone https://github.com/omnimaker/landing-page.git
cd landing-page

# 2. Instalar dependências
npm install
# ou
yarn install
# ou
pnpm install

# 3. Configurar variáveis de ambiente
cp .env.example .env.local

# 4. Executar em modo desenvolvimento
npm run dev
```

### 🔐 Configuração de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# URL base da aplicação
NEXT_PUBLIC_BASE_URL=https://omnimaker.io

# Google Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Verificação de domínio (opcional)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code

# Configurações PWA
NEXT_PUBLIC_PWA_ENABLED=true
NEXT_PUBLIC_SW_ENABLED=true
```

## 🔧 Scripts Disponíveis

```bash
# 🚀 Desenvolvimento
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Servidor de produção
npm run lint         # Executar ESLint
npm run lint:fix     # Corrigir automaticamente

# 🧪 Testes e Qualidade
npm run type-check   # Verificar tipos TypeScript
npm run format       # Formatar código com Prettier
npm run analyze      # Analisar bundle size

# 📦 Deploy
npm run export       # Exportar site estático
npm run deploy       # Deploy automatizado
```

## 🚀 Deploy

### 🌐 Vercel (Recomendado)

```bash
# Deploy automático via Git
git push origin main

# Ou usando Vercel CLI
npx vercel --prod
```

### 🐳 Docker

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

### ☁️ Outras Plataformas

- **Netlify**: Conecte o repositório e faça deploy automático
- **Railway**: Deploy com um clique via GitHub
- **AWS Amplify**: Hospedagem escalável da Amazon

## 📱 PWA Features

### 🎯 Funcionalidades PWA

- ✅ **Instalável** - Adicionar à tela inicial
- ✅ **Offline First** - Funciona sem internet
- ✅ **Cache Inteligente** - Múltiplas estratégias de cache
- ✅ **Notificações Push** - Preparado para campanhas
- ✅ **Background Sync** - Sincronização em segundo plano

### 🔄 Estratégias de Cache

| Recurso | Estratégia | Duração |
|---------|------------|---------|
| **HTML/Páginas** | Network First | 24h |
| **Imagens** | Cache First | 7 dias |
| **CSS/JS** | Stale While Revalidate | 30 dias |
| **API** | Network First + Timeout | 5 min |

### 📲 Instalação PWA

1. Visite o site no navegador mobile
2. Toque no menu "Adicionar à tela inicial"
3. Confirme a instalação
4. Use como aplicativo nativo!

## 🔍 SEO e Performance

### 📊 Core Web Vitals

| Métrica | Target | Atual |
|---------|--------|-------|
| **LCP** | < 2.5s | ✅ ~1.8s |
| **FID** | < 100ms | ✅ ~45ms |
| **CLS** | < 0.1 | ✅ ~0.05 |

### 🎯 Otimizações SEO

- ✅ **Meta Tags Dinâmicas** - Específicas por página
- ✅ **Open Graph** - Compartilhamento social otimizado
- ✅ **Twitter Cards** - Preview cards automáticos
- ✅ **Structured Data** - Dados estruturados
- ✅ **XML Sitemap** - Mapeamento para buscadores
- ✅ **Robots.txt** - Controle de indexação

### ⚡ Performance

- ✅ **Image Optimization** - WebP, AVIF, lazy loading
- ✅ **Code Splitting** - Carregamento sob demanda
- ✅ **Tree Shaking** - Remoção de código não usado
- ✅ **Bundle Analysis** - Monitoramento de tamanho
- ✅ **Resource Preloading** - Carregamento antecipado

## 🎨 Design System

### 🎨 Paleta de Cores

```css
/* Cores Primárias */
--primary: #667eea;
--primary-dark: #5a67d8;
--secondary: #764ba2;

/* Cores Neutras */
--gray-50: #f9fafb;
--gray-900: #111827;

/* Cores de Status */
--success: #10b981;
--warning: #f59e0b;
--error: #ef4444;
```

### 📱 Breakpoints

```css
/* Mobile First */
sm: 640px   /* Tablet pequeno */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop pequeno */
xl: 1280px  /* Desktop */
2xl: 1536px /* Desktop grande */
```

### 🔤 Tipografia

```css
/* Fonte Principal */
font-family: 'Inter', sans-serif;

/* Escalas */
text-xs: 12px
text-sm: 14px
text-base: 16px
text-lg: 18px
text-xl: 20px
text-2xl: 24px
text-3xl: 30px
text-4xl: 36px
```

## 📖 Documentação

### 📚 Recursos Adicionais

- 📄 **[Guia de Contribuição](CONTRIBUTING.md)** - Como contribuir
- 🔧 **[API Reference](docs/api.md)** - Documentação da API
- 🎨 **[Design Guide](docs/design.md)** - Guidelines de design
- 🚀 **[Deploy Guide](docs/deploy.md)** - Guia de deploy
- 🧪 **[Testing Guide](docs/testing.md)** - Estratégias de teste

### 🔗 Links Úteis

- 🌐 **Site**: [omnimaker.io](https://omnimaker.io)
- 📧 **Contato**: contato@omnimaker.io
- 📱 **WhatsApp**: (75) 98178-5769
- 💼 **LinkedIn**: [Omnimaker](https://linkedin.com/company/omnimaker)

## 🤝 Contribuição

Adoramos contribuições! Veja como você pode ajudar:

### 🛠️ Como Contribuir

1. **Fork** o projeto
2. **Clone** seu fork: `git clone https://github.com/seu-usuario/omnimaker-landing.git`
3. **Crie uma branch**: `git checkout -b feature/nova-funcionalidade`
4. **Faça suas alterações** e teste localmente
5. **Commit**: `git commit -m 'feat: adiciona nova funcionalidade'`
6. **Push**: `git push origin feature/nova-funcionalidade`
7. **Abra um Pull Request**

### 📋 Checklist para PRs

- [ ] Código segue os padrões do projeto
- [ ] Testes passando (quando aplicável)
- [ ] Documentação atualizada
- [ ] Performance não foi impactada negativamente
- [ ] Design responsivo verificado

### 🐛 Reportando Bugs

Use as [Issues do GitHub](https://github.com/omnimaker/landing-page/issues) para reportar bugs:

1. Descreva o problema claramente
2. Inclua passos para reproduzir
3. Adicione screenshots se relevante
4. Especifique browser e dispositivo

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👥 Equipe

### 🚀 Desenvolvido por

**Omnimaker Team** - *Automação WhatsApp com IA*

- 🌐 **Website**: [omnimaker.io](https://omnimaker.io)
- 📧 **Email**: contato@omnimaker.io
- 📍 **Localização**: Feira de Santana - BA, Brasil

---

## 🎉 Agradecimentos

Agradecimentos especiais a:

- 🚀 **Next.js Team** - Framework incrível
- 🎨 **Tailwind CSS** - Sistema de design
- ⚡ **Vercel** - Plataforma de deploy
- 🤝 **Open Source Community** - Ecossistema colaborativo

---

<div align="center">

### 🤖 Transforme seu atendimento WhatsApp com IA

**[Agendar Demonstração](https://omnimaker.io) • [Ver Cases](https://omnimaker.io/blog) • [Documentação](https://omnimaker.io/documentacao)**

*Feito com ❤️ pela equipe Omnimaker*

</div>
