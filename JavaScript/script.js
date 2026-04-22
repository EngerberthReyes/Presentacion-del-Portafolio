const informacion = [
  {
    subTitulo: "CMS [Sistema de Gestión de Contenidos]",
    imagen: "Imagenes/Imagenes de Proyectos/CMS.png",
    parrafoProyecto: "CMS donde se pueden publicar cualquier cosa [CRUD].",
    enlaceProyecto: "https://github.com/EngerberthReyes/CMS-EngRys",
  },
  {
    subTitulo: "Clon de YouTube [Generalmente Estático]",
    imagen: "Imagenes/Imagenes de Proyectos/Clon de Youtube.png",
    parrafoProyecto:
      "Simple Clon de YouTube, funcional en la visualización de los videos.",
    enlaceProyecto: "https://github.com/EngerberthReyes/Clon-de-YouTube",
  },
  {
    subTitulo: "Reproductor de Música",
    imagen: "Imagenes/Imagenes de Proyectos/Reproductor de Música.png",
    parrafoProyecto:
      "Reproductor de música con soporte para importar archivos mediante arrastre.",
    enlaceProyecto: "https://github.com/EngerberthReyes/Reproductor-de-Musica",
  },
  {
    subTitulo: "Apartado Legal",
    imagen: "Imagenes/Imagenes de Proyectos/Apartado Legal.png",
    parrafoProyecto:
      "Sistema para contratar y demandar a empresas de servicios de terceros.",
    enlaceProyecto: "https://github.com/EngerberthReyes/Apartado-Legal",
  },
];

const contenedor = document.querySelector(".seccion-proyectos");
const plantilla = document.querySelector(".plantilla-proyecto").content;
const fragmento = document.createDocumentFragment();

informacion.forEach((proyecto) => {
  const clone = plantilla.cloneNode(true);
  clone.querySelector(".titulo-proyecto").textContent = proyecto.subTitulo;
  clone.querySelector(".imagen-proyecto").src = proyecto.imagen;
  clone.querySelector(".imagen-proyecto").alt = proyecto.subTitulo;
  clone.querySelector(".parrafo-proyecto").textContent =
    proyecto.parrafoProyecto;
  clone.querySelector(".boton-redireccion").href = proyecto.enlaceProyecto;
  fragmento.appendChild(clone);
});

contenedor.appendChild(fragmento);

const habilidades = [
  {
    nombre: "Node.js",
    icono: "Imagenes/Habilidades/Node Js.svg",
    tipo: "simple",
  },
  {
    nombre: "Python",
    icono: "Imagenes/Habilidades/Python.svg",
    tipo: "simple",
  },
  {
    nombre: "SQL",
    icono: "Imagenes/Habilidades/PostgreSQL.svg",
    tipo: "sql",
    subtitulos: ["MySQL", "PostgreSQL"],
  },
  {
    nombre: "Frontend",
    tipo: "separador",
    iconos: [
      "Imagenes/Habilidades/React.svg",
      "Imagenes/Habilidades/Next Js.png",
    ],
    alts: ["React", "Next.js"],
  },
  {
    nombre: "Git",
    icono: "Imagenes/Habilidades/Git.svg",
    tipo: "simple",
    title: "Git / Github",
  },
  {
    nombre: "Node.js",
    icono: "Imagenes/Habilidades/Node Js.svg",
    tipo: "simple",
  },
  {
    nombre: "Python",
    icono: "Imagenes/Habilidades/Python.svg",
    tipo: "simple",
  },
  {
    nombre: "SQL",
    icono: "Imagenes/Habilidades/PostgreSQL.svg",
    tipo: "sql",
    subtitulos: ["MySQL", "PostgreSQL"],
  },
  {
    nombre: "Frontend",
    tipo: "separador",
    iconos: [
      "Imagenes/Habilidades/React.svg",
      "Imagenes/Habilidades/Next Js.png",
    ],
    alts: ["React", "Next.js"],
  },
  {
    nombre: "Git",
    icono: "Imagenes/Habilidades/Git.svg",
    tipo: "simple",
    title: "Git / Github",
  },
  {
    nombre: "Node.js",
    icono: "Imagenes/Habilidades/Node Js.svg",
    tipo: "simple",
  },
  {
    nombre: "Python",
    icono: "Imagenes/Habilidades/Python.svg",
    tipo: "simple",
  },
  {
    nombre: "SQL",
    icono: "Imagenes/Habilidades/PostgreSQL.svg",
    tipo: "sql",
    subtitulos: ["MySQL", "PostgreSQL"],
  },
  {
    nombre: "Frontend",
    tipo: "separador",
    iconos: [
      "Imagenes/Habilidades/React.svg",
      "Imagenes/Habilidades/Next Js.png",
    ],
    alts: ["React", "Next.js"],
  },
  {
    nombre: "Git",
    icono: "Imagenes/Habilidades/Git.svg",
    tipo: "simple",
    title: "Git / Github",
  },
];

const renderizarHabilidades = () => {
  const contenedor = document.querySelector(".logos");
  const plantilla = document.querySelector(".plantilla-habilidad").content;
  const fragmento = document.createDocumentFragment();

  habilidades.forEach((hab) => {
    let contenido;

    if (hab.tipo === "simple") {
      contenido = plantilla.cloneNode(true);
      const img = contenido.querySelector("img");
      img.src = hab.icono;
      img.alt = hab.nombre;
      img.title = hab.title || hab.nombre;
      contenido.querySelector("h4").textContent = hab.nombre;
    } else if (hab.tipo === "sql") {
      const section = document.createElement("section");
      section.className = "seccion-flex-logos";
      section.innerHTML = `
        <img class="imagen-habilidades" src="${hab.icono}" alt="${hab.nombre}" title="${hab.nombre}" />
        <section class="sql-textos">
          ${hab.subtitulos.map((s) => `<h4 class="sub-titulo-logos-sql">${s}</h4>`).join("")}
        </section>
      `;
      contenido = section;
    } else if (hab.tipo === "separador") {
      const section = document.createElement("section");
      section.className = "contenedor-separador";
      section.innerHTML = `
        <img class="imagen-habilidades" src="${hab.iconos[0]}" alt="${hab.alts[0]}" title="${hab.alts[0]}" />
        <span class="separador">/</span>
        <img class="next" src="${hab.iconos[1]}" alt="${hab.alts[1]}" title="${hab.alts[1]}" />
      `;
      contenido = section;
    }

    fragmento.appendChild(contenido);
  });

  contenedor.innerHTML = "";
  contenedor.appendChild(fragmento);

  const duplicado = contenedor.cloneNode(true);
  duplicado.setAttribute("aria-hidden", "true");
  contenedor.parentNode.appendChild(duplicado);
};

document.addEventListener("DOMContentLoaded", renderizarHabilidades);

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

const imagenesProyectos = document.querySelectorAll(".abrir-emergente");
const contenedorEmergente = document.querySelector(".emergente-contenedor");
const imagenEnEmergente = document.querySelector(".emergente-imagen");
const botonCerrarEmergente = document.querySelector(".emergente-cerrar");
const capaFondoEmergente = document.querySelector(".emergente-capa-fondo");

imagenesProyectos.forEach((imagen) => {
  imagen.addEventListener("click", (evento) => {
    const rutaImagen = evento.target.getAttribute("src");
    imagenEnEmergente.setAttribute("src", rutaImagen);
    contenedorEmergente.style.display = "flex";
    contenedorEmergente.style.justifyContent = "center";
    contenedorEmergente.style.alignItems = "center";
    document.body.style.overflow = "hidden";
  });
});

const cerrarVentanaEmergente = () => {
  const ventana = document.querySelector(".emergente-ventana");
  ventana.classList.add("cerrar-animacion");
  document.body.style.overflow = "auto";
  setTimeout(() => {
    contenedorEmergente.style.display = "none";
    ventana.classList.remove("cerrar-animacion");
  }, 250);
};

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && contenedorEmergente.style.display === "flex") {
    cerrarVentanaEmergente();
  }
});

botonCerrarEmergente.addEventListener("click", cerrarVentanaEmergente);
capaFondoEmergente.addEventListener("click", cerrarVentanaEmergente);
