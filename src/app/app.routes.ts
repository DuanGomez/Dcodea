import { Routes } from '@angular/router';

// Cada vista se carga de forma diferida (lazy) para mantener el bundle inicial ligero.
export const routes: Routes = [
  {
    path: '',
    title: 'Dcodea — Código y diseño',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'servicios',
    title: 'Servicios — Dcodea',
    loadComponent: () => import('./features/services/services').then((m) => m.Services),
  },
  {
    path: 'portafolio',
    title: 'Portafolio — Dcodea',
    loadComponent: () => import('./features/portfolio/portfolio').then((m) => m.Portfolio),
  },
  {
    path: 'contacto',
    title: 'Contacto — Dcodea',
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: '' },
];
