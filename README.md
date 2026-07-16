# Portafolio

Este es mi portafolio personal como desarrollador fullstack. HTML, CSS y JavaScript puro, sin frameworks ni build tools. Si te gusta el resultado, siéntete libre de usar este repo como plantilla para el tuyo.

## Estructura

- `index.html` — página única con todas las secciones.
- `css/` — estilos organizados en capas: `reset` → `tokens` → `base` → `layout` → `components` → `sections` → `animations`.
- `js/` — módulos ES6: navegación móvil, scroll suave con scrollspy, revelado al hacer scroll, toggle de tema y carrusel de imágenes de proyectos.
- `assets/img/` — capturas de los proyectos y la imagen para redes sociales (`og-image.jpg`).

## Desarrollo local

Al usar `<script type="module">`, se recomienda servir el sitio con un servidor estático simple en vez de abrir `index.html` directamente (restricciones CORS de los módulos ES6 sobre `file://`):

```bash
npx serve .
```

## Despliegue

Al ser HTML/CSS/JS estático, se puede desplegar en cualquier hosting de archivos estáticos (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.). La idea de este repo es tenerlo publicado en **GitHub Pages**.

Si usas este repo como plantilla, recuerda reemplazar las URLs `https://<usuario>.github.io/<repositorio>/` en el `<head>` de `index.html` (canonical, Open Graph, Twitter Card, JSON-LD) por las de tu propio sitio de despliegue.
