import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from './core/layout/footer/footer';
import { Header } from './core/layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected skipToContent(main: HTMLElement): void {
    main.focus();
    main.scrollIntoView({ behavior: 'smooth' });
  }
}
