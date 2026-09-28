import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { CATEGORY_LABELS, PROJECTS, ProjectCategory } from '../../core/data/projects.data';
import { RevealDirective } from '../../shared/directives/reveal';
import { CtaBanner } from '../../shared/ui/cta-banner/cta-banner';
import { ProjectCard } from '../../shared/ui/project-card/project-card';

type Filter = 'all' | ProjectCategory;

@Component({
  selector: 'app-portfolio',
  imports: [ProjectCard, CtaBanner, RevealDirective],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Portfolio {
  protected readonly filters: readonly { value: Filter; label: string }[] = [
    { value: 'all', label: 'Todos' },
    ...(Object.keys(CATEGORY_LABELS) as ProjectCategory[]).map((value) => ({
      value,
      label: CATEGORY_LABELS[value],
    })),
  ];

  protected readonly active = signal<Filter>('all');

  protected readonly activeIndex = computed(() =>
    this.filters.findIndex((f) => f.value === this.active()),
  );

  protected readonly projects = computed(() => {
    const filter = this.active();
    return filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  });
}
