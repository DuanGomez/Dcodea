import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Icon, IconName } from '../../../shared/ui/icon/icon';

interface FooterColumn {
  title: string;
  links: { label: string; path: string; fragment?: string }[];
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly year = new Date().getFullYear();

  protected readonly columns: readonly FooterColumn[] = [
    {
      title: 'Servicios',
      links: [
        { label: 'Desarrollo web', path: '/servicios', fragment: 'web' },
        { label: 'Software a medida', path: '/servicios', fragment: 'software' },
        { label: 'Merch tech', path: '/servicios', fragment: 'merch' },
      ],
    },
    {
      title: 'Estudio',
      links: [
        { label: 'Portafolio', path: '/portafolio' },
        { label: 'Cómo trabajamos', path: '/servicios', fragment: 'proceso' },
      ],
    },
    {
      title: 'Contacto',
      links: [{ label: 'Iniciar un proyecto', path: '/contacto' }],
    },
  ];

  protected readonly socials: readonly { label: string; icon: IconName; url: string }[] = [
    { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/dcod.ea/' },
    { label: 'TikTok', icon: 'tiktok', url: 'https://www.tiktok.com/@dcodea_' },
    { label: 'WhatsApp', icon: 'whatsapp', url: 'https://wa.me/573232922041' },
  ];
}
