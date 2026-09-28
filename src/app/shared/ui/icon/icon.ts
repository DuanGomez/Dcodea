import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type IconName =
  | 'code'
  | 'layers'
  | 'shirt'
  | 'arrow-right'
  | 'chevron-right'
  | 'mail'
  | 'pin'
  | 'clock'
  | 'check'
  | 'alert'
  | 'sparkles'
  | 'rocket'
  | 'compass'
  | 'palette'
  | 'terminal'
  | 'database'
  | 'cloud'
  | 'zap'
  | 'shield'
  | 'bag'
  | 'mug'
  | 'sticker'
  | 'github'
  | 'linkedin'
  | 'instagram'
  | 'x'
  | 'tiktok'
  | 'whatsapp';

const FILLED: ReadonlySet<IconName> = new Set(['github', 'linkedin', 'x', 'tiktok', 'whatsapp']);

/** Iconos SVG inline (trazo 1.6px, estilo SF Symbols / Lucide). */
@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  styles: `
    :host {
      display: inline-flex;
      flex-shrink: 0;
      line-height: 0;
    }
  `,
  host: { 'aria-hidden': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(20);
  readonly strokeWidth = input(1.6);

  protected readonly filled = computed(() => FILLED.has(this.name()));
}
