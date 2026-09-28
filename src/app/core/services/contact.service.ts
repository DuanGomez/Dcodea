import { Injectable } from '@angular/core';

import { CONTACT_CONFIG } from '../config/contact.config';

export interface ContactMessage {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

/** Envía los mensajes del formulario de contacto al correo de Dcodea vía Web3Forms. */
@Injectable({ providedIn: 'root' })
export class ContactService {
  async send(data: ContactMessage, botcheck: boolean): Promise<void> {
    const fields: Record<string, string> = {
      access_key: CONTACT_CONFIG.accessKey,
      subject: `Nuevo mensaje de ${data.name} desde dcodea`,
      from_name: 'Web de Dcodea',
      // Web3Forms usa "email" como dirección de respuesta: al contestar le llega al cliente
      name: data.name,
      email: data.email,
      Empresa: data.company || '—',
      Servicio: data.service,
      Presupuesto: data.budget || 'No indicado',
      message: data.message,
    };
    const body = new FormData();
    for (const [key, value] of Object.entries(fields)) body.append(key, value);
    if (botcheck) body.append('botcheck', 'on');

    // FormData (sin cabeceras propias) evita la petición CORS "preflight",
    // que Web3Forms rechaza cuando el cuerpo es JSON.
    const response = await fetch(CONTACT_CONFIG.endpoint, { method: 'POST', body });

    const result: { success?: boolean; message?: string } = await response.json().catch(() => ({}));
    if (!response.ok || !result.success) {
      throw new Error(result.message ?? `Error ${response.status}`);
    }
  }
}
