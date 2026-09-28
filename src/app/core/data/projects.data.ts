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
}

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  web: 'Web',
  software: 'Software',
  merch: 'Merch',
};

// Proyectos de ejemplo: reemplázalos por casos reales.
export const PROJECTS: readonly Project[] = [
  {
    id: 'nimbus',
    name: 'Nimbus Analytics',
    category: 'software',
    year: 2026,
    summary: 'Dashboard en tiempo real para equipos de producto, con métricas y alertas inteligentes.',
    tags: ['Angular', 'Node.js', 'WebSockets'],
    icon: 'database',
    glyph: 'stream.pipe(insight)',
    colors: ['#00E5FF', '#5C32F2'],
    featured: true,
  },
  {
    id: 'aurora',
    name: 'Aurora Store',
    category: 'web',
    year: 2026,
    summary: 'E-commerce minimalista con checkout en un paso y rendimiento de primer nivel.',
    tags: ['Angular', 'SSR', 'Stripe'],
    icon: 'bag',
    glyph: '<Checkout oneTap />',
    colors: ['#23B5F3', '#6C5CE7'],
    featured: true,
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
    featured: true,
  },
  {
    id: 'orbit',
    name: 'Orbit CRM',
    category: 'software',
    year: 2025,
    summary: 'CRM a medida que automatiza el seguimiento comercial y se integra con el ERP.',
    tags: ['TypeScript', 'PostgreSQL', 'APIs'],
    icon: 'layers',
    glyph: 'await orbit.sync()',
    colors: ['#5C32F2', '#23B5F3'],
  },
  {
    id: 'pulse',
    name: 'Pulse Health',
    category: 'web',
    year: 2025,
    summary: 'PWA para reservas médicas: accesible, offline-first y con notificaciones.',
    tags: ['PWA', 'Angular', 'A11y'],
    icon: 'zap',
    glyph: 'if (online) sync()',
    colors: ['#00E5FF', '#23B5F3'],
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
  {
    id: 'lumen',
    name: 'Lumen Studio',
    category: 'web',
    year: 2024,
    summary: 'Portafolio inmersivo para un estudio creativo, con transiciones cinematográficas.',
    tags: ['Motion', 'WebGL', 'CMS'],
    icon: 'sparkles',
    glyph: 'animate(frame => ✦)',
    colors: ['#6C5CE7', '#5C32F2'],
  },
  {
    id: 'atlas',
    name: 'Atlas API',
    category: 'software',
    year: 2024,
    summary: 'API de logística que unifica proveedores de envío en una sola integración.',
    tags: ['REST', 'Docker', 'Cloud'],
    icon: 'cloud',
    glyph: 'GET /v1/routes',
    colors: ['#23B5F3', '#00E5FF'],
  },
];
