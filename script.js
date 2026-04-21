const cambiarModo = () => {
  const body = document.querySelector(".body");
  const checkbox = document.querySelector(".palanca");
  const texto = document.querySelector(".texto-estado");

  if (!checkbox.checked) {
    body.classList.add("modo-claro");
    texto.textContent = "El modo claro está activado";
  } else {
    body.classList.remove("modo-claro");
    texto.textContent = "El modo oscuro está activado";
  }
};
