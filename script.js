const cambiarModo = () => {
  const body = document.querySelector(".body");
  const checkbox = document.querySelector(".palanca");
  const icono = document.querySelector(".icono-clima");
  const botonDescarga = document.querySelector(".boton-descarga");

  if (!checkbox.checked) {
    icono.src = "Imagenes/Imagenes Enlazadas/Moon.svg";
    botonDescarga.href =
      "Currículum/Currículum de Engerberth Reyes en Formato Blanco.pdf";
    botonDescarga.title = "Currículum de Engerberth Reyes en Formato Blanco";
    botonDescarga.download = "Currículum de Engerberth Reyes en Formato Blanco";
    body.classList.add("modo-claro");
  } else {
    icono.src = "Imagenes/Imagenes Enlazadas/Sol.svg";
    botonDescarga.href =
      "Currículum/Currículum de Engerberth Reyes en Formato Oscuro.pdf";
    botonDescarga.title = "Currículum de Engerberth Reyes en Formato Oscuro";
    botonDescarga.download = "Currículum de Engerberth Reyes en Formato Oscuro";
    body.classList.remove("modo-claro");
  }
};

const botonSubir = document.querySelector(".btnScrollTop");

const controlarScroll = () => {
  const { scrollHeight, clientHeight } = document.documentElement;
  const desplazamientoTotal = scrollHeight - clientHeight;
  const porcentajeActual = (window.scrollY / desplazamientoTotal) * 100;
  botonSubir.classList.toggle("mostrar", porcentajeActual > 30);
};

window.addEventListener("scroll", controlarScroll, { passive: true });

botonSubir.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
