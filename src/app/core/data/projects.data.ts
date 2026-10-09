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
