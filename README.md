# Portfolio Luis Pichio

Sitio estatico generado con Astro para reemplazar el portfolio publicado en GitHub Pages.

## Que se agrego

- Home orientada a reclutadores con perfil, experiencia, skills y proyectos destacados.
- Pagina de CV web en `/cv/` con enlace al PDF descargable.
- Listado de proyectos en `/projects/`.
- Paginas individuales de proyectos generadas desde Markdown.
- Assets publicos: foto, imagenes de proyectos y CV PDF generado automaticamente.
- Workflow de GitHub Actions para publicar en GitHub Pages.

## Como modificar contenido

- Proyectos: editar o agregar archivos en `src/content/projects/`.
- Perfil, redes y experiencia: editar `src/data/profile.ts`.
- Skills clave: editar `src/data/key-skills.csv`.
- Skills tecnicas: editar `src/data/technical-skills.csv`.
- Imagenes: usar `public/assets/`.

## CV PDF

El PDF en `public/assets/pdf/luis-pichio-resume.pdf` se genera automaticamente desde los contenidos del sitio. No conviene editarlo manualmente.

Fuentes usadas para generarlo:

- Perfil, contacto y experiencia: `src/data/profile.ts`.
- Skills clave: `src/data/key-skills.csv`.
- Skills tecnicas: `src/data/technical-skills.csv`.

El script de generacion esta en `scripts/generate-resume-pdf.ts` y usa Playwright para renderizar HTML imprimible a PDF.

Si Playwright no encuentra Chromium localmente, instalarlo con:

- `npx playwright install chromium`.

## Comandos

- Desarrollo local: `npm run dev`.
- Build estatico: `npm run build`.
- Generar CV PDF: `npm run resume:pdf`.
- Preview del build: `npm run preview`.

`npm run build` ejecuta `npm run resume:pdf` antes de compilar Astro, por lo que el PDF queda actualizado en cada build.
