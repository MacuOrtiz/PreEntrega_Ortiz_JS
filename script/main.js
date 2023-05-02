  //aqui se escribe el codigo js 
console.log("hola Bienvenido a Urku Extreme Mountain Tours");
console.log("es el body", document.body)
console.log("es el head", document.head)

let Tour = document.getElementsByClassName("nombretour");
console.log ("los tours que se ofrecen son", Tour);
for (const uniTour of Tour) {
 console.log(uniTour);
  }


class toursUrku {
constructor (id,opciontour) {
this.id = id;
this.opciontour = opciontour.toUpperCase();
  }
 }
  const toursUrkumountain = [
 new toursUrku (1,"1) Volcan Cotopaxi "), 
 new toursUrku (2,"2) Laguna Quilotoa "), 
 new toursUrku (3,"3) Glaciar Volcan Cayambe "), 
 new toursUrku (4,"4) Escuela de Glaciar del volcan Cayambe ") , 
 new toursUrku (5,"5) Iinizas Sur "), 
 new toursUrku (6,"6) Trekking en medias Montañas "),
 ]

 let tourParaContratar = document.getElementById("toursUrkumountain");

 toursUrkumountain.forEach(unPaqueteTour => {
  let paquete = document.createElement("option");
  paquete.value = unPaqueteTour.id.toString();
  paquete.innerText= unPaqueteTour.opciontour;
  tourParaContratar.append(paquete);
   });

//registro de la edad del usuario //

   const inputEdad = document.getElementById("edad");
   const EDAD_MINIMA = 18;
   const EDAD_MAXIMA = 70;
   
   inputEdad.addEventListener("change", () => {
     const edadIngresada = parseInt(inputEdad.value);
     
     if (isNaN(edadIngresada) || edadIngresada < EDAD_MINIMA || edadIngresada > EDAD_MAXIMA) {
       alert("Debes ingresar una edad válida (entre " + EDAD_MINIMA + " y " + EDAD_MAXIMA + ").");
       inputEdad.value = "";
       return;
     }
     
     console.log("La edad ingresada es: ", edadIngresada);
   });
   

  
  //calculo del valor total del grupo//
  
   const VALOR_TOUR = 40
  const inputTotalGrupo = document.getElementById("numeroDeIntegrantes");
   
    inputTotalGrupo.addEventListener("change", () => {
      const valorIngresado = parseInt(inputTotalGrupo.value);
      
      if (isNaN(valorIngresado)) {
        alert("Debes ingresar un número válido.");
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

//  evento de clic al botón
btnGuardar.addEventListener("click", function() {
  // obtenemos los valores ingresados por el usuario
  var nombre = document.getElementById("nombreIntegrante").value;
  var edad = document.getElementById("edadIntegrante").value;
  
if(edad<18) {
  alert ("te recuerdo que deber ser mayor de edad para realizar una actividad con nostros, por favor registra a una persona mayor de edad")
}

//json//
var integrante = {
  nombre: nombre,
  edad: edad
};
var integranteJSON = JSON.stringify(integrante);
localStorage, setItem ("integrante", integranteJSON)
//fin json//

  //agregamos el nombre y edad
  var li = document.createElement("li");
  li.textContent = nombre + " - " + edad;

  // obtenemos lista de integrantes y agregamos el nuevo elemento
  var listaIntegrantes = document.getElementById("listaIntegrantes");
  listaIntegrantes.appendChild(li);
//limpiar los inputs//
document.getElementById("nombreIntegrante").value = "";
document.getElementById("edadIntegrante").value = "";

});



