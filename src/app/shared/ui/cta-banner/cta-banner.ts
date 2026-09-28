import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RevealDirective } from '../../directives/reveal';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-cta-banner',
  imports: [RouterLink, Icon, RevealDirective],
  template: `
    <section class="section cta" aria-labelledby="cta-title">
      <div class="container">
        <div class="cta__panel glass" appReveal>
          <div class="orb cta__orb cta__orb--a" aria-hidden="true"></div>
          <div class="orb cta__orb cta__orb--b" aria-hidden="true"></div>
          <img class="cta__logo" src="images/isotipo.png" alt="" width="88" height="88" loading="lazy" />
          <h2 id="cta-title" class="headline">
            ¿Tienes una idea?<br />
            <span class="text-gradient">Hagámosla código.</span>
          </h2>
          <p class="lead">Cuéntanos qué quieres construir. Te respondemos en menos de 24 horas.</p>
          <div class="cta__actions">
            <a routerLink="/contacto" class="btn btn--gradient btn--lg">Hablemos del proyecto</a>
            <a routerLink="/servicios" class="link-arrow">
              Ver servicios <app-icon name="chevron-right" [size]="18" />
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .cta {
      background: var(--c-bg);
    }

    .cta__panel {
      overflow: hidden;
      padding: clamp(56px, 8vw, 104px) clamp(24px, 6vw, 80px);
      border-radius: 36px;
      text-align: center;

      .lead {
        max-width: 32ch;
        margin: 20px auto 0;
      }
    }

    .cta__orb--a {
      top: -40%;
      left: -10%;
      width: 460px;
      height: 460px;
      background: var(--c-cyan);
      opacity: 0.25;
    }

    .cta__orb--b {
      bottom: -50%;
      right: -10%;
      width: 520px;
      height: 520px;
      background: var(--c-indigo);
      opacity: 0.4;
    }

    .cta__logo {
      position: relative;
      margin: 0 auto 28px;
      filter: drop-shadow(0 12px 24px rgba(35, 181, 243, 0.45));
    }

    .headline,
    .lead,
    .cta__actions {
      position: relative;
    }

    .cta__actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 16px 32px;
      margin-top: 40px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaBanner {}
