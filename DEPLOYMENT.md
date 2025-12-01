# 🚀 Guía de Despliegue - Invertox Web

## Pre-requisitos

- Node.js 18+ instalado
- npm, yarn o pnpm
- Git
- Cuenta en Vercel (recomendado) o alternativa

---

## Instalación Local

### 1. Clonar e Instalar

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/invertox-web.git
cd invertox-web

# Instalar dependencias
npm install
# o
yarn install
# o
pnpm install
```

### 2. Ejecutar en Desarrollo

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Build de Producción

### Local

```bash
# Generar build optimizado
npm run build

# Ejecutar build
npm run start
```

El build estará disponible en `http://localhost:3000`

---

## Despliegue en Vercel (Recomendado)

### Opción 1: Deploy desde GitHub

1. **Push a GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Conectar con Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente Next.js
   - Click en "Deploy"

3. **Configuración Automática**
   - Framework: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### Opción 2: Deploy con CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

---

## Despliegue en Netlify

### 1. Configuración

Crea `netlify.toml` en la raíz:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### 2. Deploy

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy a producción
netlify deploy --prod
```

---

## Variables de Entorno

Crea un archivo `.env.local` (no incluido en git):

```env
# Ejemplo de variables
NEXT_PUBLIC_API_URL=https://api.invertox.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

En Vercel/Netlify, añádelas en:
- **Vercel**: Settings → Environment Variables
- **Netlify**: Site settings → Environment variables

---

## Optimizaciones Pre-Deploy

### 1. Lighthouse Audit

```bash
# Instalar
npm install -g @lhci/cli

# Ejecutar
lhci autorun --collect.url=http://localhost:3000
```

**Targets:**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 90

### 2. Bundle Analysis

```bash
# Instalar analyzer
npm install @next/bundle-analyzer

# Añadir a next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Ejecutar análisis
ANALYZE=true npm run build
```

### 3. Image Optimization

- Convierte imágenes a WebP
- Usa `next/image` para lazy loading
- Comprime assets antes de subir

---

## Configuración de Dominio

### En Vercel

1. Ve a Settings → Domains
2. Añade tu dominio: `invertox.com`
3. Configura DNS:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### SSL/TLS

✅ Vercel y Netlify incluyen SSL automático
✅ Certificado Let's Encrypt renovado automáticamente

---

## Monitoreo Post-Deploy

### Analytics

**Google Analytics**
```typescript
// src/app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Error Tracking

**Sentry**
```bash
npm install @sentry/nextjs

# Inicializar
npx @sentry/wizard -i nextjs
```

### Performance Monitoring

- Vercel Analytics (incluido)
- Google PageSpeed Insights
- WebPageTest
- GTmetrix

---

## Rollback

### En Vercel

```bash
# Ver deployments
vercel ls

# Rollback a deployment específico
vercel rollback [deployment-url]
```

### En Netlify

```bash
# Ver deployments
netlify deploy:list

# Rollback via UI
# Site → Deploys → Click en deploy anterior → Publish deploy
```

---

## CI/CD

### GitHub Actions

Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Run tests
        run: npm test
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## Troubleshooting

### Build Failures

**Error: Module not found**
```bash
# Limpiar cache
rm -rf .next node_modules
npm install
npm run build
```

**Error: Out of memory**
```bash
# Aumentar heap memory
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Runtime Errors

**Error 500**
- Revisar logs en Vercel/Netlify
- Verificar variables de entorno
- Comprobar rutas de API

**Slow Performance**
- Habilitar compression
- Optimizar imágenes
- Implementar caching

---

## Checklist Pre-Launch

- [ ] Build local exitoso
- [ ] Todas las páginas cargan correctamente
- [ ] Responsive funciona en mobile/tablet/desktop
- [ ] Lighthouse score > 90
- [ ] SEO meta tags configurados
- [ ] Analytics instalado
- [ ] Error tracking configurado
- [ ] Dominio configurado con SSL
- [ ] Variables de entorno en producción
- [ ] Backup del código en GitHub
- [ ] Documentación actualizada

---

## Soporte

**Documentación:**
- Next.js: https://nextjs.org/docs
- Vercel: https://vercel.com/docs
- Tailwind: https://tailwindcss.com/docs

**Comunidad:**
- Discord de Next.js
- Stack Overflow
- GitHub Issues

---

**¡Éxito con tu deploy!** 🚀

