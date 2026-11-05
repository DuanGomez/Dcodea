import { IconName } from '../../shared/ui/icon/icon';

export type ProjectCategory = 'web' | 'software' | 'merch';

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  year: number;
  summary: string;
  tags: string[];
  icon: IconName;
  /** Snippet decorativo mostrado en la portada de la tarjeta. */
  glyph: string;
  /** Colores del degradado de portada. */
  colors: [string, string];
  featured?: boolean;
  /** Captura del proyecto (public/images/projects). */
  image?: string;
  /** Demo publicada (GitHub Pages). */
  demoUrl?: string;
  /** Repositorio en GitHub. */
  repoUrl?: string;
}

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  web: 'Web',
  software: 'Software',
  merch: 'Merch',
};

const GITHUB = 'https://github.com/DuanGomez';
const PAGES = 'https://duangomez.github.io';

export const PROJECTS: readonly Project[] = [
  {
    id: 'vexli',
    name: 'Vexli',
    category: 'software',
    year: 2026,
    summary: 'Inventario y caja diaria para tiendas: venta rápida con lector de código de barras, existencias con alertas, cierre de caja con arqueo y vitrina con pedidos por WhatsApp.',
    tags: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    icon: 'bag',
    glyph: 'caja.cerrar(arqueo)',
    colors: ['#16A34A', '#0B1220'],
    featured: true,
    image: 'images/projects/vexli.webp',
    demoUrl: 'https://vexli-caja.pages.dev/',
    repoUrl: `${GITHUB}/Vexli`,
  },
  {
    id: 'vellum',
    name: 'Vellum',
    category: 'software',
    year: 2026,
    summary: 'Agenda de citas para barberías, estéticas y consultorios: página de reservas propia, horarios por profesional, agenda del día y recordatorios por WhatsApp.',
    tags: ['Angular', 'Laravel', 'PHP', 'PostgreSQL'],
    icon: 'clock',
    glyph: 'agenda.reservar(hora)',
    colors: ['#B4532A', '#2C7A7B'],
    featured: true,
    image: 'images/projects/vellum.webp',
    demoUrl: 'https://vellum-citas.pages.dev/',
    repoUrl: `${GITHUB}/Vellum`,
  },
  {
    id: 'beside',
    name: 'Beside',
    category: 'software',
    year: 2026,
    summary: 'App móvil para estar cerca de los tuyos: ubicación en tiempo real en un mapa nocturno, avisos al llegar a casa o cuando se les descarga el celular, historial de recorridos y la canción que suena en su Spotify.',
    tags: ['Flutter', 'Supabase', 'MapLibre', 'PostgreSQL'],
    icon: 'pin',
    glyph: 'juntos(tú, ella)',
    colors: ['#F2789A', '#A99BF5'],
    featured: true,
    image: 'images/projects/beside.webp',
    demoUrl: 'https://duangomez.github.io/Beside/demo/',
    repoUrl: `${GITHUB}/Beside`,
  },
  {
    id: 'brackit',
    name: 'Brackit',
    category: 'software',
    year: 2026,
    summary: 'SaaS de gestión de torneos para ligas y clubes: canchas con horarios, calendario automático sin choques, consola del árbitro y marcadores en vivo en la página pública.',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'WebSocket'],
    icon: 'shield',
    glyph: 'torneo.programar(canchas)',
    colors: ['#1F5BFF', '#18C46A'],
    featured: true,
    image: 'images/projects/brackit.webp',
    demoUrl: 'https://brackit.dcodea-correo.workers.dev/',
    repoUrl: `${GITHUB}/Brackit`,
  },
  {
    id: 'wms',
    name: 'WMS',
    category: 'software',
    year: 2026,
    summary: 'SaaS de monitoreo de flotas: vehículos en tiempo real sobre el mapa de Medellín, geocercas dibujadas a mano, alertas de robo o desvío y reportes PDF y Excel.',
    tags: ['Angular', 'Azure Functions', 'Leaflet', 'SQLite'],
    icon: 'pin',
    glyph: 'gps.track(flota)',
    colors: ['#2F6FED', '#131316'],
    featured: true,
    image: 'images/projects/wms.webp',
    demoUrl: `${PAGES}/WMS/`,
    repoUrl: `${GITHUB}/WMS`,
  },
  {
    id: 'waia',
    name: 'Waia',
    category: 'software',
    year: 2026,
    summary: 'Asistente de atención por WhatsApp para negocios: responde preguntas, comparte precios del catálogo y registra clientes potenciales.',
    tags: ['Angular', 'TypeScript', 'Signals', 'Motor de reglas'],
    icon: 'sparkles',
    glyph: 'waia.responder(mensaje)',
    colors: ['#17B26A', '#131316'],
    featured: true,
    image: 'images/projects/waia.webp',
    demoUrl: `${PAGES}/Waia/`,
    repoUrl: `${GITHUB}/Waia`,
  },
  {
    id: 'laboratorio-de-masas',
    name: 'Laboratorio de Masas',
    category: 'software',
    year: 2026,
    summary: 'Física interactiva en 3D: empuje, choques y caída libre con bolas de acero cromado, más un péndulo de Newton que puedes arrastrar.',
    tags: ['Angular', 'Three.js', 'TypeScript', 'Vitest'],
    icon: 'rocket',
    glyph: 'p = m·v',
    colors: ['#3A7BDC', '#C9932E'],
    featured: true,
    image: 'images/projects/laboratorio.webp',
    demoUrl: `${PAGES}/Laboratorio-de-Masas/`,
    repoUrl: `${GITHUB}/Laboratorio-de-Masas`,
  },
  {
    id: 'smartkitchen',
    name: 'SmartKitchen',
    category: 'software',
    year: 2026,
    summary: 'POS para restaurantes: pedidos por mesa, pantallas por estación (cocina, barra, México) y caja con facturación.',
    tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'JWT'],
    icon: 'zap',
    glyph: 'pedido.enviar(cocina)',
    colors: ['#FF6B35', '#5C32F2'],
    featured: true,
    image: 'images/projects/smartkitchen.webp',
    demoUrl: `${PAGES}/SmartKitchen/`,
    repoUrl: `${GITHUB}/SmartKitchen`,
  },
  {
    id: 'trainix',
    name: 'Trainix',
    category: 'software',
    year: 2026,
    summary: 'Gestión de gimnasios: clientes, membresías, pagos, caja, check-in, rutinas y reportes por rol.',
    tags: ['Angular', 'NestJS', 'TypeORM', 'Material'],
    icon: 'database',
    glyph: 'checkin("TX-0001")',
    colors: ['#FFC800', '#1A1A1A'],
    featured: true,
    image: 'images/projects/trainix.webp',
    demoUrl: `${PAGES}/Trainix/`,
    repoUrl: `${GITHUB}/Trainix`,
  },
  {
    id: 'saas-ventas',
    name: 'SaaS Ventas',
    category: 'software',
    year: 2026,
    summary: 'SaaS multi-tienda: cada negocio tiene su vitrina y su panel, y los clientes compran por WhatsApp.',
    tags: ['Angular', 'Node.js', 'Express', 'SQLite'],
    icon: 'layers',
    glyph: 'wa.me/?text=pedido',
    colors: ['#22A556', '#00E5FF'],
    featured: true,
    image: 'images/projects/saas-ventas.webp',
    demoUrl: `${PAGES}/SaaS-Ventas/`,
    repoUrl: `${GITHUB}/SaaS-Ventas`,
  },
  {
    id: 'doose',
    name: 'Doose Tattoo',
    category: 'web',
    year: 2026,
    summary: 'Estudio de tatuajes: portafolio con favoritos, servicios con carrito y reserva de citas por tatuador.',
    tags: ['Angular', 'Spring Boot', 'SCSS'],
    icon: 'palette',
    glyph: 'reservar(tatuador, hora)',
    colors: ['#C9A84C', '#6C5CE7'],
    image: 'images/projects/doose.webp',
    demoUrl: `${PAGES}/Doose/`,
    repoUrl: `${GITHUB}/Doose`,
  },
  {
    id: 'dasama',
    name: 'Dasama Joyería',
    category: 'web',
    year: 2026,
    summary: 'Sitio para una joyería de Medellín: colecciones, fichas de producto y compra directa por WhatsApp.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: 'sparkles',
    glyph: '<Oro18K />',
    colors: ['#C9A84C', '#23B5F3'],
    image: 'images/projects/joyeria.webp',
    demoUrl: `${PAGES}/Damasa-Joyeria/`,
    repoUrl: `${GITHUB}/Damasa-Joyeria`,
  },
  {
    id: 'kernel',
    name: 'Kernel Hoodie',
    category: 'merch',
    year: 2025,
    summary: 'Edición limitada de hoodies con bordado de sintaxis y tejido premium.',
    tags: ['Textil', 'Bordado', 'Ed. limitada'],
    icon: 'shirt',
    glyph: 'sudo wear --cozy',
    colors: ['#6C5CE7', '#00E5FF'],
  },
  {
    id: 'syntax',
    name: 'Syntax Pack',
    category: 'merch',
    year: 2024,
    summary: 'Colección de stickers holográficos para laptops, inspirada en lenguajes de programación.',
    tags: ['Stickers', 'Holográfico'],
    icon: 'sticker',
    glyph: '{ ...stickers }',
    colors: ['#23B5F3', '#5C32F2'],
  },
];
