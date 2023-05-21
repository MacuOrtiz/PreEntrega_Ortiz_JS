//aqui se escribe el codigo js
console.log("hola Bienvenido a Urku Extreme Mountain Tours");
console.log("es el body", document.body);
console.log("es el head", document.head);

let Tour = document.getElementsByClassName("nombretour");
console.log("los tours que se ofrecen son", Tour);
for (const uniTour of Tour) {
  console.log(uniTour);
}

class toursUrku {
  constructor(id, opciontour) {
    this.id = id;
    this.opciontour = opciontour.toUpperCase();
  }
}
const toursUrkumountain = [
  new toursUrku(1, "1) Volcan Cotopaxi "),
  new toursUrku(2, "2) Laguna Quilotoa "),
  new toursUrku(3, "3) Glaciar Volcan Cayambe "),
  new toursUrku(4, "4) Escuela de Glaciar del volcan Cayambe "),
  new toursUrku(5, "5) Iinizas Sur "),
  new toursUrku(6, "6) Trekking en medias Montañas "),
];

function obtenerTours() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/tours")
      .then((response) => response.json())
      .then((toursData) => {
        const toursUrkumountain = toursData.map(
          (tour) => new toursUrku(tour.id, tour.opciontour)
        );
        resolve(toursUrkumountain);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Llamada a la función y manejo de la promesa
obtenerTours()
  .then((toursUrkumountain) => {
    let tourParaContratar = document.getElementById("toursUrkumountain");

    toursUrkumountain.forEach((unPaqueteTour) => {
      let paquete = document.createElement("option");
      paquete.value = unPaqueteTour.id.toString();
      paquete.innerText = unPaqueteTour.opciontour;
      tourParaContratar.append(paquete);
    });
  })
  .catch((error) => {
    console.error("Error al obtener los tours:", error);
  });

let tourParaContratar = document.getElementById("toursUrkumountain");

// // toursUrkumountain.forEach((unPaqueteTour) => {
// //   let paquete = document.createElement("option");
// //   paquete.value = unPaqueteTour.id.toString();
// //   paquete.innerText = unPaqueteTour.opciontour;
// //   tourParaContratar.append(paquete);
// // });

//registro de la edad del usuario //

const inputEdad = document.getElementById("edad");
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 70;

inputEdad.addEventListener("change", () => {
  const edadIngresada = parseInt(inputEdad.value);

  if (
    isNaN(edadIngresada) ||
    edadIngresada < EDAD_MINIMA ||
    edadIngresada > EDAD_MAXIMA
  ) {
    Swal.fire({
      title: "Error",
      text:
        "Debes ingresar una edad válida (entre " +
        EDAD_MINIMA +
        " y " +
        EDAD_MAXIMA +
        " años).",
      icon: "error",
      confirmButtonText: "Ok",
    });

    inputEdad.value = "";
    return;
  }

  console.log("La edad ingresada es: ", edadIngresada);
});

//calculo del valor total del grupo//

const VALOR_TOUR = 40;
const inputTotalGrupo = document.getElementById("numeroDeIntegrantes");

inputTotalGrupo.addEventListener("change", () => {
  const valorIngresado = parseInt(inputTotalGrupo.value);

  if (isNaN(valorIngresado)) {
    Swal.fire({
      title: "Error",
      text: "Debes ingresar un número válido.",
      icon: "error",
      confirmButtonText: "Ok",
    });
    inputTotalGrupo.value = "";
    return;
  }
  console.log("El total de integrantes es de ", valorIngresado);
  let valorTotal;
  if (valorIngresado > 6) {
    valorTotal = valorIngresado * VALOR_TOUR * 0.8; // Aplicamos un descuento del 20%
  } else {
    valorTotal = valorIngresado * VALOR_TOUR;
  }
  console.log("El valor a pagar es ", valorTotal);

  const resultadoElement = document.getElementById("resultado");
  resultadoElement.textContent = valorTotal;
});

// obotón de guardar
var btnGuardar = document.getElementById("btnGuardar");

// agregar evento de clic al botón
btnGuardar.addEventListener("click", function () {
  // obtener los valores ingresados por el usuario
  var nombre = document.getElementById("nombreIntegrante").value;
  var edad = document.getElementById("edadIntegrante").value;

  // validar la edad
  if (edad < 18) {
    Swal.fire({
      title: "Error",
      text:
        "Debes ser mayor de edad para realizar una actividad con nosotros. Por favor, registra a una persona mayor de edad. Debes ingresar una edad válida (entre " +
        EDAD_MINIMA +
        " y " +
        EDAD_MAXIMA +
        " años).",
      icon: "error",
      confirmButtonText: "Ok",
    });

    return;
  }

  // crear objeto
  var integrante = {
    nombre: nombre,
    edad: edad,
  };

  // convertir objeto a cadena JSON
  var integranteJSON = JSON.stringify(integrante);

  // guardar  localStorage
  localStorage.setItem("integrante", integranteJSON);

  // agregar el nombre y la edad a la lista
  var li = document.createElement("li");
  li.textContent = nombre + " - " + edad;
  var listaIntegrantes = document.getElementById("listaIntegrantes");
  listaIntegrantes.appendChild(li);

  // limpiar los inputs
  document.getElementById("nombreIntegrante").value = "";
  document.getElementById("edadIntegrante").value = "";
});
