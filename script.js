const cambiarModo = () => {
  const body = document.querySelector(".body");
  const checkbox = document.querySelector(".palanca");
  const icono = document.querySelector(".icono-clima");

  if (!checkbox.checked) {
    icono.src = "Imagenes/Imagenes Enlazadas/Sol.svg";
    body.classList.add("modo-claro");
  } else {
    icono.src = "Imagenes/Imagenes Enlazadas/Moon.svg";
    body.classList.remove("modo-claro");
  }
};
