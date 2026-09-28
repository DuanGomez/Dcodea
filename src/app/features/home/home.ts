import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PROJECTS } from '../../core/data/projects.data';
import { SERVICES } from '../../core/data/services.data';
import { RevealDirective } from '../../shared/directives/reveal';
import { TiltDirective } from '../../shared/directives/tilt';
import { CtaBanner } from '../../shared/ui/cta-banner/cta-banner';
import { Icon, IconName } from '../../shared/ui/icon/icon';
import { ProjectCard } from '../../shared/ui/project-card/project-card';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Hero, Icon, ProjectCard, CtaBanner, RevealDirective, TiltDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly services = SERVICES;
  protected readonly featured = PROJECTS.filter((p) => p.featured);

  protected readonly promises: readonly { icon: IconName; value: string; label: string }[] = [
    { icon: 'zap', value: '< 1 s', label: 'Tiempo de carga objetivo en cada web que lanzamos.' },
    { icon: 'code', value: '100 %', label: 'Código a medida. Nada de plantillas genéricas.' },
    { icon: 'clock', value: '24 h', label: 'Máximo para responder a tu mensaje.' },
  ];
}
