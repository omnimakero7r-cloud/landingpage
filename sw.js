// Service Worker para Omnimaker - Landing Page
// Versão otimizada para PWA com cache inteligente

const CACHE_NAME = 'omnimaker-v1.0.0';
const STATIC_CACHE = 'omnimaker-static-v1.0.0';
const DYNAMIC_CACHE = 'omnimaker-dynamic-v1.0.0';
const IMAGE_CACHE = 'omnimaker-images-v1.0.0';

// Recursos críticos para cache imediato
const CRITICAL_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  '/favicon-16x16.png',
  '/images/icon-192x192.png',
  '/images/icon-512x512.png',
  '/images/logo/logo-light.svg',
  '/images/logo/logo-dark.svg',
  '/images/hero/hero-light.svg',
  '/images/hero/hero-dark.svg'
];

// Recursos estáticos para cache
const STATIC_ASSETS = [
  '/images/about/about-light-01.png',
  '/images/about/about-dark-01.png',
  '/images/features/features-light-01.png',
  '/images/features/features-dark-01.svg',
  '/images/icon/icon-sun.svg',
  '/images/icon/icon-moon.svg',
  '/images/shape/shape-01.png',
  '/images/shape/shape-02.svg',
  '/images/shape/shape-03.svg'
];

// Padrões de URL para cache dinâmico
const CACHE_PATTERNS = {
  pages: /^https?:\/\/[^\/]+\/(solucoes|documentacao|blog|suporte|politica-de-privacidade|termos-de-uso)?$/,
  api: /^https?:\/\/[^\/]+\/api\//,
  images: /\.(?:png|jpg|jpeg|svg|webp|gif|ico)$/i,
  fonts: /\.(?:woff|woff2|ttf|eot)$/i,
  static: /\.(css|js)$/i
};

// Configurações de tempo de vida do cache
const CACHE_EXPIRY = {
  static: 30 * 24 * 60 * 60 * 1000, // 30 dias
  dynamic: 24 * 60 * 60 * 1000,     // 1 dia
  images: 7 * 24 * 60 * 60 * 1000,  // 7 dias
  api: 5 * 60 * 1000                // 5 minutos
};

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Instalando Service Worker da Omnimaker...');
  
  event.waitUntil(
    (async () => {
      try {
        // Cache de recursos críticos
        const criticalCache = await caches.open(CACHE_NAME);
        await criticalCache.addAll(CRITICAL_ASSETS);
        console.log('[SW] Recursos críticos em cache');

        // Cache de recursos estáticos
        const staticCache = await caches.open(STATIC_CACHE);
        await staticCache.addAll(STATIC_ASSETS);
        console.log('[SW] Recursos estáticos em cache');

        // Forçar ativação imediata
        self.skipWaiting();
        
      } catch (error) {
        console.error('[SW] Erro durante instalação:', error);
      }
    })()
  );
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Ativando Service Worker da Omnimaker...');
  
  event.waitUntil(
    (async () => {
      try {
        // Limpar caches antigos
        const cacheNames = await caches.keys();
        const oldCaches = cacheNames.filter(name => 
          name.startsWith('omnimaker-') && 
          ![CACHE_NAME, STATIC_CACHE, DYNAMIC_CACHE, IMAGE_CACHE].includes(name)
        );

        await Promise.all(
          oldCaches.map(cacheName => {
            console.log('[SW] Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          })
        );

        // Assumir controle de todos os clientes
        await clients.claim();
        console.log('[SW] Service Worker ativado e controlando clientes');
        
      } catch (error) {
        console.error('[SW] Erro durante ativação:', error);
      }
    })()
  );
});

// Interceptação de requests
self.addEventListener('fetch', (event) => {
  // Apenas interceptar requests GET
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  
  // Ignorar extensões e protocolos não suportados
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
  if (url.href.includes('chrome-extension://')) return;

  event.respondWith(handleRequest(event.request));
});

// Lógica principal de handling de requests
async function handleRequest(request) {
  const url = new URL(request.url);
  
  try {
    // 1. Recursos críticos - Cache First
    if (CRITICAL_ASSETS.some(asset => url.pathname === asset)) {
      return await cacheFirst(request, CACHE_NAME);
    }

    // 2. Imagens - Cache First com fallback
    if (CACHE_PATTERNS.images.test(url.pathname)) {
      return await cacheFirstWithFallback(request, IMAGE_CACHE);
    }

    // 3. Recursos estáticos - Stale While Revalidate
    if (CACHE_PATTERNS.static.test(url.pathname)) {
      return await staleWhileRevalidate(request, STATIC_CACHE);
    }

    // 4. Páginas principais - Network First
    if (CACHE_PATTERNS.pages.test(url.href) || url.pathname === '/') {
      return await networkFirst(request, DYNAMIC_CACHE);
    }

    // 5. API calls - Network First com timeout
    if (CACHE_PATTERNS.api.test(url.href)) {
      return await networkFirstWithTimeout(request, DYNAMIC_CACHE, 3000);
    }

    // 6. Outros recursos - Network First
    return await networkFirst(request, DYNAMIC_CACHE);

  } catch (error) {
    console.error('[SW] Erro ao processar request:', error);
    return await handleOfflineResponse(request);
  }
}

// Estratégia Cache First
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      await cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('[SW] Network error em cache first:', error);
    throw error;
  }
}

// Estratégia Cache First com Fallback
async function cacheFirstWithFallback(request, cacheName) {
  try {
    return await cacheFirst(request, cacheName);
  } catch (error) {
    // Fallback para imagem placeholder
    if (CACHE_PATTERNS.images.test(request.url)) {
      const cache = await caches.open(STATIC_CACHE);
      const fallback = await cache.match('/images/logo/logo-light.svg');
      return fallback || new Response('', { status: 404 });
    }
    throw error;
  }
}

// Estratégia Network First
async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      await cache.put(request, networkResponse.clone());
      await cleanupExpiredCache(cache, cacheName);
    }
    
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network falhou, tentando cache:', request.url);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// Estratégia Network First com Timeout
async function networkFirstWithTimeout(request, cacheName, timeout = 3000) {
  const cache = await caches.open(cacheName);
  
  try {
    const networkPromise = fetch(request);
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Network timeout')), timeout)
    );
    
    const networkResponse = await Promise.race([networkPromise, timeoutPromise]);
    
    if (networkResponse.ok) {
      await cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network timeout ou erro, tentando cache:', request.url);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// Estratégia Stale While Revalidate
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  // Atualizar em background
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });

  // Retornar cache imediatamente se disponível
  return cachedResponse || await fetchPromise;
}

// Limpeza de cache expirado
async function cleanupExpiredCache(cache, cacheName) {
  const keys = await cache.keys();
  const expiry = CACHE_EXPIRY.dynamic; // padrão
  
  const cleanupPromises = keys.map(async (request) => {
    const response = await cache.match(request);
    if (response) {
      const dateHeader = response.headers.get('date');
      if (dateHeader) {
        const date = new Date(dateHeader);
        if (Date.now() - date.getTime() > expiry) {
          await cache.delete(request);
        }
      }
    }
  });

  await Promise.all(cleanupPromises);
}

// Resposta offline
async function handleOfflineResponse(request) {
  const url = new URL(request.url);
  
  // Para páginas HTML, retornar página offline personalizada
  if (request.headers.get('accept')?.includes('text/html')) {
    return new Response(`
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Omnimaker - Offline</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            padding: 20px;
          }
          .offline-container {
            max-width: 500px;
            background: rgba(255, 255, 255, 0.1);
            padding: 40px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
          }
          .logo {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 20px;
          }
          .message {
            font-size: 18px;
            margin-bottom: 30px;
            line-height: 1.6;
          }
          .button {
            background: rgba(255, 255, 255, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.3);
            color: white;
            padding: 12px 24px;
            border-radius: 10px;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .button:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
          }
        </style>
      </head>
      <body>
        <div class="offline-container">
          <div class="logo">🤖 Omnimaker</div>
          <div class="message">
            Você está offline! Esta página não está disponível no momento.
            <br><br>
            Verifique sua conexão com a internet e tente novamente.
          </div>
          <button class="button" onclick="window.location.reload()">
            🔄 Tentar Novamente
          </button>
        </div>
        <script>
          // Auto-reload quando conexão voltar
          window.addEventListener('online', () => {
            window.location.reload();
          });
        </script>
      </body>
      </html>
    `, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache'
      }
    });
  }

  return new Response('Offline', { status: 503 });
}

// Notificações Push (preparado para futuro)
self.addEventListener('push', (event) => {
  if (!event.data) return;

  try {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/images/icon-192x192.png',
      badge: '/images/icon-192x192.png',
      vibrate: [200, 100, 200],
      data: data.data || {},
      actions: [
        {
          action: 'open',
          title: 'Abrir Omnimaker'
        },
        {
          action: 'close',
          title: 'Fechar'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title || 'Omnimaker', options)
    );
  } catch (error) {
    console.error('[SW] Erro ao processar notificação push:', error);
  }
});

// Clique em notificação
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  }
});

// Mensagens do cliente
self.addEventListener('message', (event) => {
  if (event.data && event.data.type) {
    switch (event.data.type) {
      case 'SKIP_WAITING':
        self.skipWaiting();
        break;
      
      case 'GET_VERSION':
        event.ports[0].postMessage({
          version: CACHE_NAME
        });
        break;

      case 'CLEAR_CACHE':
        caches.keys().then(cacheNames => {
          return Promise.all(
            cacheNames
              .filter(name => name.startsWith('omnimaker-'))
              .map(name => caches.delete(name))
          );
        }).then(() => {
          event.ports[0].postMessage({ success: true });
        });
        break;
    }
  }
});

// Sync em Background (para futuras funcionalidades)
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Implementar sincronização em background
      console.log('[SW] Background sync executado')
    );
  }
});

console.log('[SW] Service Worker da Omnimaker carregado! 🚀');
