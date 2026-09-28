/**
 * Envío del formulario de contacto con Web3Forms (https://web3forms.com).
 *
 * Cómo obtener la clave: entra en web3forms.com, escribe dcodea.correo@gmail.com
 * en "Create your Access Key" y te llegará por correo. Pégala aquí.
 *
 * La clave NO es secreta: Web3Forms está pensado para usarse desde el navegador
 * y solo permite enviar mensajes al correo con el que se creó.
 */
export const CONTACT_CONFIG = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: '034d3d5e-4620-4fe2-9fdc-f6ab60e8e234',
} as const;
