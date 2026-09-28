import { Directive, ElementRef, inject, input } from '@angular/core';

/**
 * Inclinación 3D sutil siguiendo al cursor. También expone --mx / --my
 * para que los estilos `.spotlight` dibujen un brillo bajo el puntero.
 * Solo reacciona a ratón, nunca a táctil.
 */
@Directive({
  selector: '[appTilt]',
  host: {
    '(pointermove)': 'onMove($event)',
    '(pointerleave)': 'reset()',
  },
})
export class TiltDirective {
  /** Grados máximos de inclinación. 0 = solo spotlight. */
  readonly tiltMax = input(6);

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private frame = 0;

  protected onMove(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') return;

    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => {
      const node = this.el.nativeElement;
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const max = this.tiltMax();

      node.style.setProperty('--mx', `${x * 100}%`);
      node.style.setProperty('--my', `${y * 100}%`);
      if (max > 0) {
        node.style.transform = `perspective(1000px) rotateX(${(0.5 - y) * max}deg) rotateY(${(x - 0.5) * max}deg)`;
      }
    });
  }

  protected reset(): void {
    cancelAnimationFrame(this.frame);
    this.el.nativeElement.style.transform = '';
  }
}
