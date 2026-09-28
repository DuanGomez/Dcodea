import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TiltDirective } from '../../../shared/directives/tilt';
import { Icon } from '../../../shared/ui/icon/icon';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, Icon, TiltDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {}
