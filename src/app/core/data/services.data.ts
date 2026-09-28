import { IconName } from '../../shared/ui/icon/icon';

export interface Service {
  id: 'web' | 'software' | 'merch';
  icon: IconName;
  eyebrow: string;
  name: string;
  tagline: string;
  description: string;
  features: { icon: IconName; label: string }[];
}

export const SERVICES: readonly Service[] = [
  {
    id: 'web',
    icon: 'code',
    eyebrow: 'Desarrollo web',
    name: 'Webs que cargan antes de que parpadees.',
    tagline: 'Sitios y aplicaciones rápidas, accesibles y hermosas.',
    description:
      'Diseñamos y construimos experiencias web a medida con Angular y tecnologías modernas. Cada pixel pensado, cada milisegundo optimizado, listas para crecer con tu marca.',
    features: [
      { icon: 'sparkles', label: 'Landing pages y sitios corporativos' },
      { icon: 'bag', label: 'E-commerce y plataformas de venta' },
      { icon: 'zap', label: 'Progressive Web Apps de alto rendimiento' },
      { icon: 'compass', label: 'SEO técnico y accesibilidad' },
    ],
  },
  {
    id: 'software',
    icon: 'layers',
    eyebrow: 'Software a medida',
    name: 'Herramientas que se adaptan a ti. No al revés.',
    tagline: 'Sistemas internos, APIs y automatización.',
    description:
      'Convertimos procesos complejos en software simple de usar. Arquitecturas sólidas, código mantenible y despliegues en la nube que escalan sin sobresaltos.',
    features: [
      { icon: 'terminal', label: 'Paneles internos y dashboards' },
      { icon: 'database', label: 'APIs, integraciones y bases de datos' },
      { icon: 'cloud', label: 'Infraestructura y despliegue cloud' },
      { icon: 'shield', label: 'Seguridad y buenas prácticas desde el día uno' },
    ],
  },
  {
    id: 'merch',
    icon: 'shirt',
    eyebrow: 'Merch tech',
    name: 'Merch para quienes piensan en código.',
    tagline: 'Hoodies, tazas y stickers con alma dev.',
    description:
      'Diseñamos productos para comunidades y equipos tech: piezas de edición limitada con humor de programador y la misma atención al detalle que ponemos en el software.',
    features: [
      { icon: 'shirt', label: 'Hoodies y camisetas premium' },
      { icon: 'mug', label: 'Tazas para sesiones de debugging' },
      { icon: 'sticker', label: 'Packs de stickers para tu laptop' },
      { icon: 'palette', label: 'Merch de marca para equipos y eventos' },
    ],
  },
];
