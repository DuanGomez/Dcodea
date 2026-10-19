import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PauseOffscreenDirective } from '../../../shared/directives/pause-offscreen';
import { TiltDirective } from '../../../shared/directives/tilt';
import { Icon } from '../../../shared/ui/icon/icon';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, Icon, TiltDirective, PauseOffscreenDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {}
