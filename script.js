const cambiarModo = () => {
  const body = document.querySelector(".body");
  const checkbox = document.querySelector(".palanca");

  if (!checkbox.checked) {
    body.classList.add("modo-claro");
  } else {
    body.classList.remove("modo-claro");
  }
};
