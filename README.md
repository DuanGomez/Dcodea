# Dcodea

Sitio web de Dcodea (código y diseño): desarrollo web, software a medida y merch para devs.
Angular 21 con componentes standalone, signals, carga diferida de rutas y SCSS modular.

## Empezar

```bash
npm install
npm start          # http://localhost:4200
npm run build      # build de producción en dist/dcodea
```

## Estructura

```
src/
├── styles.scss                 # punto de entrada de estilos globales
├── styles/
│   ├── _tokens.scss            # colores, tipografía, radios, curvas de animación
│   ├── _base.scss              # reset, contenedor, secciones claras/oscuras
│   ├── _typography.scss        # escala tipográfica (display, headline, lead…)
│   ├── _buttons.scss           # botones píldora con brillo y link-arrow
│   ├── _glass.scss             # glassmorphism, spotlight, chips, orbes
│   ├── _motion.scss            # reveal al hacer scroll, keyframes, reduced-motion
│   ├── _forms.scss             # campos con etiqueta flotante
│   └── _page.scss              # cabecera de páginas interiores
└── app/
    ├── app.ts / app.html       # shell: header + router-outlet + footer
    ├── app.routes.ts           # rutas lazy: /, /servicios, /portafolio, /contacto
    ├── app.config.ts           # router con View Transitions y scroll restoration
    ├── core/
    │   ├── data/               # contenido: servicios y proyectos
    │   └── layout/             # header (glass al hacer scroll) y footer
    ├── shared/
    │   ├── directives/         # appReveal (fade/slide-up) y appTilt (3D + spotlight)
    │   └── ui/                 # icon, project-card, cta-banner
    └── features/
        ├── home/               # hero con isotipo flotante + secciones
        ├── services/
        ├── portfolio/          # grid filtrable con control segmentado
        └── contact/            # formulario reactivo con validación
```

## Pendiente de personalizar

- `core/data/projects.data.ts`: proyectos del portafolio (captura en `public/images/projects`, demo y repositorio). Los de merch son conceptos.
- `core/config/contact.config.ts`: la access key de Web3Forms. El formulario de contacto
  envía los mensajes a dcodea.correo@gmail.com a través de https://web3forms.com (gratis, 250/mes).

Contacto y redes (en `features/contact/contact.ts` y `core/layout/footer/footer.ts`):
dcodea.correo@gmail.com · WhatsApp +57 323 292 2041 · Instagram @dcod.ea · TikTok @dcodea_

Las imágenes originales están en `img/`; las versiones optimizadas para web (isotipo
transparente, banner en WebP y favicon) están en `public/`.
