# Portfolio Astro reutilizable

Plantilla de portfolio personal/profesional generada con Astro. Está pensada para publicar una presentación pública con perfil, experiencia, proyectos, skills y CV descargable.

## Características

- Home orientada a presentación profesional, con perfil, experiencia, skills y proyectos destacados.
- Página de CV web en `/cv/` con enlace al PDF descargable.
- PDF de CV generado automáticamente desde los datos del sitio.
- Listado de proyectos en `/projects/`.
- Páginas individuales de proyectos generadas desde Markdown.
- Skills clave y técnicas cargadas desde CSV.
- Mapa interactivo de skills con búsqueda, filtros y navegación por categorías.
- Assets públicos para foto, imágenes de proyectos y documentos descargables.
- Workflow de GitHub Actions para publicar en GitHub Pages.

## Personalización

- Perfil, contacto, redes y experiencia: editar `src/data/profile.ts`.
- Skills clave: editar `src/data/key-skills.csv`.
- Skills técnicas: editar `src/data/technical-skills.csv`.
- Proyectos: editar o agregar archivos en `src/content/projects/`.
- Imágenes y assets públicos: usar `public/assets/`.
- Estilos globales: editar `src/styles/global.css`.
- Layout base, header y footer: editar `src/layouts/BaseLayout.astro`.

Para reutilizar el portfolio con otra persona o marca, reemplazar los datos personales, imágenes, enlaces externos, favicon, nombre del paquete y cualquier referencia específica del sitio original.

## CV PDF

El PDF en `public/assets/pdf/luis-pichio-resume.pdf` se genera automáticamente desde los contenidos del sitio. No conviene editarlo manualmente.

Fuentes usadas para generarlo:

- Perfil, contacto y experiencia: `src/data/profile.ts`.
- Skills clave: `src/data/key-skills.csv`.
- Skills técnicas: `src/data/technical-skills.csv`.

El script de generación está en `scripts/generate-resume-pdf.ts` y usa Playwright para renderizar HTML imprimible a PDF.

Si se cambia el nombre o la ruta del PDF, actualizar también:

- `profile.resume` en `src/data/profile.ts`.
- `outputPath` en `scripts/generate-resume-pdf.ts`.

Si Playwright no encuentra Chromium localmente, instalarlo con:

- `npx playwright install chromium`.

## Deploy

El workflow `.github/workflows/deploy.yml` compila el sitio y publica `dist/` en GitHub Pages.

El build de deploy ejecuta:

- `npm ci`.
- `npx playwright install --with-deps chromium`.
- `npm run build`.

Esto asegura que Playwright tenga Chromium disponible para generar el PDF antes de compilar Astro.

## Comandos

- Desarrollo local: `npm run dev`.
- Build estático: `npm run build`.
- Generar CV PDF: `npm run resume:pdf`.
- Preview del build: `npm run preview`.

`npm run build` ejecuta `npm run resume:pdf` antes de compilar Astro, por lo que el PDF queda actualizado en cada build.
