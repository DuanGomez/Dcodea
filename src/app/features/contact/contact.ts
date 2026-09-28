import { ChangeDetectionStrategy, Component, ElementRef, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { RevealDirective } from '../../shared/directives/reveal';
import { Icon, IconName } from '../../shared/ui/icon/icon';

type ServiceOption = 'web' | 'software' | 'merch' | 'otro';
type FieldName = 'name' | 'email' | 'service' | 'message';

const MESSAGE_MIN = 20;
const MESSAGE_MAX = 1000;
// Validators.email acepta "a@b"; exigimos además un dominio con TLD.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Icon, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly messageMax = MESSAGE_MAX;

  protected readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern(EMAIL_PATTERN)]],
    company: [''],
    service: ['' as ServiceOption | '', Validators.required],
    budget: [''],
    message: ['', [Validators.required, Validators.minLength(MESSAGE_MIN), Validators.maxLength(MESSAGE_MAX)]],
  });

  protected readonly serviceOptions: readonly { value: ServiceOption; label: string; icon: IconName }[] = [
    { value: 'web', label: 'Web', icon: 'code' },
    { value: 'software', label: 'Software', icon: 'layers' },
    { value: 'merch', label: 'Merch', icon: 'shirt' },
    { value: 'otro', label: 'Otro', icon: 'sparkles' },
  ];

  protected readonly budgets = ['Menos de $500.000 COP', 'Más de $500.000 COP'];

  protected readonly info: readonly { icon: IconName; title: string; text: string; href?: string }[] = [
    { icon: 'mail', title: 'Escríbenos', text: 'dcodea.correo@gmail.com', href: 'mailto:dcodea.correo@gmail.com' },
    { icon: 'whatsapp', title: 'WhatsApp', text: '+57 323 292 2041', href: 'https://wa.me/573232922041' },
    { icon: 'clock', title: 'Respuesta', text: 'En menos de 24 horas hábiles' },
    { icon: 'pin', title: 'Dónde', text: 'Trabajamos en remoto, con clientes de todo el mundo' },
  ];

  protected readonly status = signal<'idle' | 'sending' | 'sent'>('idle');
  private readonly submitted = signal(false);

  private readonly message = toSignal(this.form.controls.message.valueChanges, { initialValue: '' });
  protected readonly messageLength = computed(() => this.message().length);

  protected showError(field: FieldName): boolean {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || this.submitted());
  }

  protected errorFor(field: FieldName): string {
    const errors = this.form.controls[field].errors ?? {};
    if (errors['required']) {
      return field === 'service' ? 'Elige el tipo de proyecto.' : 'Este campo es obligatorio.';
    }
    if (errors['email'] || errors['pattern']) return 'Introduce un email válido.';
    if (errors['minlength']) {
      const { requiredLength } = errors['minlength'];
      return field === 'message'
        ? `Cuéntanos un poco más (mínimo ${requiredLength} caracteres).`
        : `Mínimo ${requiredLength} caracteres.`;
    }
    if (errors['maxlength']) return `Máximo ${errors['maxlength'].requiredLength} caracteres.`;
    return '';
  }

  protected submit(): void {
    this.submitted.set(true);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.host.nativeElement.querySelector<HTMLElement>('[formcontrolname].ng-invalid')?.focus();
      return;
    }

    this.status.set('sending');

    // TODO: conectar con un backend o servicio de email (API propia, Formspree, EmailJS…).
    // Por ahora se simula el envío.
    setTimeout(() => {
      this.status.set('sent');
      this.form.reset();
      this.submitted.set(false);
    }, 1400);
  }

  protected startOver(): void {
    this.status.set('idle');
  }
}
