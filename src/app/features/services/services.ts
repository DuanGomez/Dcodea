import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SERVICES } from '../../core/data/services.data';
import { RevealDirective } from '../../shared/directives/reveal';
import { TiltDirective } from '../../shared/directives/tilt';
import { CtaBanner } from '../../shared/ui/cta-banner/cta-banner';
import { Icon, IconName } from '../../shared/ui/icon/icon';

@Component({
  selector: 'app-services',
  imports: [RouterLink, Icon, CtaBanner, RevealDirective, TiltDirective],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {
  protected readonly services = SERVICES;

  protected readonly steps: readonly { icon: IconName; title: string; text: string }[] = [
    { icon: 'compass', title: 'Descubrir', text: 'Entendemos tu negocio, tus usuarios y lo que de verdad necesitas.' },
    { icon: 'palette', title: 'Diseñar', text: 'Prototipos interactivos que validamos contigo antes de escribir código.' },
    { icon: 'code', title: 'Construir', text: 'Desarrollo iterativo con entregas frecuentes y código limpio.' },
    { icon: 'rocket', title: 'Lanzar', text: 'Publicamos, medimos y seguimos mejorando después del lanzamiento.' },
  ];

  protected readonly merch: readonly { icon: IconName; name: string }[] = [
    { icon: 'shirt', name: 'Hoodie' },
    { icon: 'mug', name: 'Taza' },
    { icon: 'sticker', name: 'Stickers' },
  ];
}
