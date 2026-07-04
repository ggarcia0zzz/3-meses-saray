# 3 meses 💛

Página web para celebrar 3 meses de relación, lista para publicar en GitHub Pages.

## Estructura del proyecto

```
├── index.html        → contenido de la página
├── style.css         → estilos (colores, tipografías, layout)
├── script.js         → contador de tiempo juntos + animaciones
└── assets/img/       → las 6 fotos, ya optimizadas para web
```

## Cosas que puedes editar fácilmente

Busca los comentarios `👉 EDITA AQUÍ` en los archivos:

1. **Nombre/apodo** — en `index.html`, dentro de `<span class="name">Sarita</span>` (sección hero).
2. **Fecha de inicio** — en `script.js`, la línea `const START_DATE = new Date('2026-04-04T00:00:00');`.
   Cámbiala por la fecha y hora reales en que empezaron a salir, así el contador de días/horas/minutos será exacto.
3. **Textos bajo cada foto (`figcaption`)** — en `index.html`, dentro de la sección `<div class="polaroids">`.
4. **La cartica** — en `index.html`, dentro de `<div class="letter__body">`. Ahora mismo tiene un texto de ejemplo, cámbialo por tus propias palabras.
5. **Orden de las fotos** — simplemente reordena los bloques `<figure class="polaroid">` o cambia qué imagen usa cada uno (`assets/img/imagenX.jpg`).

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (puede ser público o privado si tienes plan que lo permita para Pages).
2. Sube todo el contenido de esta carpeta a la raíz del repositorio:
   ```bash
   git init
   git add .
   git commit -m "3 meses 💛"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
   git push -u origin main
   ```
3. En GitHub, ve a **Settings → Pages**.
4. En "Source" selecciona la rama `main` y la carpeta `/root`, luego guarda.
5. Espera 1-2 minutos y tu página quedará disponible en:
   `https://TU-USUARIO.github.io/TU-REPO/`

Ese link es el que puedes compartir o convertir en código QR 💌.

## Notas técnicas

- Las fotos ya fueron redimensionadas y comprimidas para que la página cargue rápido (~900 KB en total).
- Las tipografías (Fraunces, Inter, Caveat) se cargan desde Google Fonts, así que necesita conexión a internet para verse igual que en las capturas.
- El contador de tiempo funciona con JavaScript puro, sin dependencias externas.
