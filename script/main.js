  //aqui se escribe el codigo js 
  console.log("hola Bienvenido a Urku Extreme Mountain Tours");
  let edad = parseInt (prompt ("Me podrias decir que edad tienes?"));
  //parseint to convert numero entero paseintfloat to convert numero decimal 
console.log ("tu edad es de ", edad);
const MAYOR_EDAD = 18

 if (edad >= MAYOR_EDAD)
{
  class toursUrku {
    constructor (opciontour, precios) {
    this.opciontour = opciontour.toUpperCase();
    this.precios = parseFloat(edad);
    }
   }
  const toursUrkumountain = [
  new toursUrku ("a) Volcan Cotopaxi "), 
  new toursUrku ("b) Laguna Quilotoa "), 
  new toursUrku ("c) Glaciar Volcan Cayambe "), 
  new toursUrku ("d) Escuela de Glaciar del volcan Cayambe ") , 
  new toursUrku ("e) Iinizas Sur "), 
  new toursUrku ("f) Trekking en medias Montañas "),
]

  toString = function(){
    return this.opciontour;
    console.log
    }
   
   
const VALOR_TOUR = 40


alert ("Puedes contratar un paquete con nosotros. Que tour te gustaria contratar?")
   
function porCadaTour (toursUrku , funcionalidad) {
for (const untour of toursUrku) {
funcionalidad (untour)
 }
}
toursUrkumountain.forEach(eltour => {
  console.log ("los tours son: " + eltour.toString());
});

let tours = ["1) Volcan Cotopaxi","2) Laguna Quilotoa","3) Glaciar Volcan Cayambe","4) Escuela de Glaciar del volcan Cayambe","5) Iinizas Sur","6) Trekking en medias Montañas"]
porCadaTour (tours, console.log)

let tourEleguido = prompt(" Seleciona un numero por favor: " + tours.join(", "));

// let tourBuscado = toursUrkumountain.find(eltour => eltour.opciontour.includes (tourEleguido.toUpperCase()) 
// );
//  if (tourEleguido !== undefined) {
//   alert("el tour elegido es " + tourBuscado.toString())
//    } else {
//     alert("no encontramos el tour ingresado con el nombre: " + tourEleguido)
//    }


class IntegrantesTour {
 constructor (nombre, edad) {
 this.nombre = nombre.toUpperCase();
 this.edad = parseFloat(edad);
 }
}
let grupoTour = [];
let respuesta = "SI";

do {
let nombre = prompt("Ingrese el nombre de la persona que va a al tour");
let edad = prompt ("ingrese la edad de la personas");
 const UnIntegrante = new IntegrantesTour(nombre, edad);
if (edad<18) {
alert ("hmm lo siento, te recordamos que para realizar una actividad con nosotros debes ser mayor de edad, por favor ingresa los datos de una persona mayor de 18 años")
let nombre = prompt("Ingrese el nombre de la persona que va a al tour");
 let edad = prompt ("ingrese la edad de la personas");
 const UnIntegrante = new IntegrantesTour(nombre, edad);
}
 grupoTour.push(UnIntegrante);
 console.log("la cantida de integrantes es de ",grupoTour.length);
 respuesta = prompt("Quieres seguir añadiendo integrates? SI/NO")
} while (respuesta.toUpperCase() !== "NO");

 console.log ("Estos son los integrantes que iran al tour ", grupoTour)

function descuentos () {
  const descuento = 0.8
   let valor_total = VALOR_TOUR *grupoTour.length*0.8;
  alert ("El valor a cancelar es de $"+valor_total)
 };

 if (grupoTour.length>5) {
 descuentos ()
} else { 
   valor_total = VALOR_TOUR *grupoTour.length;
  alert ("El valor a cancelar es de $"+valor_total)
 }



} else {
 alert (" hmm lo siento, te recordamos que para realizar una actividad con nosotros debes ser mayor de edad")
 }




 