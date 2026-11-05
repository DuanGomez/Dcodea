// Redirige la dirección vieja al dominio nuevo, conservando la ruta.
export default {
  fetch(request) {
    const url = new URL(request.url);
    return Response.redirect(`https://dcodea.pages.dev${url.pathname}${url.search}`, 301);
  },
};
