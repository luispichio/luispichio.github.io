# Portfolio Luis Pichio

Sitio estatico generado con Astro para reemplazar el portfolio publicado en GitHub Pages.

## Que se agrego

- Home orientada a reclutadores con perfil, experiencia, skills y proyectos destacados.
- Pagina de CV web en `/cv/` con enlace al PDF descargable.
- Listado de proyectos en `/projects/`.
- Paginas individuales de proyectos generadas desde Markdown.
- Assets publicos: foto, imagenes de proyectos y CV PDF.
- Workflow de GitHub Actions para publicar en GitHub Pages.

## Como modificar contenido

- Proyectos: editar o agregar archivos en `src/content/projects/`.
- Perfil, redes y experiencia: editar `src/data/profile.ts`.
- Skills clave: editar `src/data/key-skills.csv`.
- Skills tecnicas: editar `src/data/technical-skills.csv`.
- Imagenes y PDF: usar `public/assets/`.

## Comandos

- Desarrollo local: `npm run dev`.
- Build estatico: `npm run build`.
- Preview del build: `npm run preview`.
