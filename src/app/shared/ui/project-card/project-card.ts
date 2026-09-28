import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CATEGORY_LABELS, Project } from '../../../core/data/projects.data';
import { TiltDirective } from '../../directives/tilt';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-project-card',
  imports: [Icon, TiltDirective],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  readonly project = input.required<Project>();

  protected readonly labels = CATEGORY_LABELS;
}
