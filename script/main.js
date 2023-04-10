  //aqui se escribe el codigo js 
  console.log("hola Bienvenido a Urku Extreme Mountain Tours");
  let edad = parseInt (prompt ("Me podrias decir que edad tienes?"));
  //parseint to convert numero entero paseintfloat to convert numero decimal 
console.log ("tu edad es de ", edad);
const MAYOR_EDAD = 18

 if (edad >= MAYOR_EDAD)
{
   const OPCION_A = "a) Volcan Cotopaxi "
   const OPCION_B  = "b) Laguna Quilotoa "
   const OPCION_C = "c) Glaciar Volcan Cayambe "
   const OPCION_D ="d) Escuela de Glaciar del volcan Cayambe "
   const OPCION_E = "e) Iinizas Sur "
   const OPCION_F = "f) Trekking en medias Montañas "
   const VALOR_TOUR = 20


   alert ("Puedes contratar un paquete con nosotros. Que tour te gustaria contratar?")
  let tour = prompt (" Seleciona una letra por favor: a) Volcan Cotopaxi, b) Laguna Quilotoa c) Glaciar Volcan Cayambe, d) Escuela de Glaciar del volcan Cayambe e) Iinizas Sur, f) Trekking en medias Montañas   ");


     let grupo = parseInt (prompt ("Cuantas personas van al Tour")) 
     console.log ("el grupo es de "+ grupo)
     
     function integrantesgrupo () {
      //ciclo ingresando nombres de personas que contrataran el tour 
      for (let i = 0; i < grupo ; i++) {
        let t = i+1;
        let nombre = prompt ("Ingrese el nombre del integrante " + t );
        console.log ("intregrante " + t + " es " + nombre );
      }
     
    }

    
     if (grupo>5) {
      const descuento = 0.80;
      let valor_total= VALOR_TOUR * grupo*0.8;
      alert ("El valor a cancelar es de $"+valor_total);
      let y =1 ;
      let grupototal= grupo + y;
      integrantesgrupo ();
     }

     else {let valor_total= VALOR_TOUR*grupo;
      alert ("El valor a cancelar es de $"+valor_total);
 
    integrantesgrupo ();
 }
  }

   else {
    alert (" hmm lo siento, te recordamos que para realizar una actividad con nosotros debes ser mayor de edad")
 }





 