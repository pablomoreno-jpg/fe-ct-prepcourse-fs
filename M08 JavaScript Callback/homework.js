/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:

   var separarNombre = function(nombre){

      return nombre.split("");
   }

   var letraMayuscula = function(letra){

      return letra.toUpperCase();
   }

   var upperlowCamelcase = function (cb1,cb2,nombre){

      var array = cb1(nombre);
      var nuevoNombre = "";

      for(var i = 0; i < array.length; i++){

         if( i == 0){

            array[i] = cb2(array[i]);
         }

         nuevoNombre += array[i];
      }  

      return nuevoNombre;
   }

   return upperlowCamelcase(separarNombre,letraMayuscula,nombre);
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:

   return cb(num1,num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   var suma = 0;

   arrayOfNumbers.forEach(num =>{

      suma += num;

   })

   cb(suma);

}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:

   array.forEach(elemento => {

      cb(elemento);

   })

}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:

   var arreglo = [];

   array.forEach(elemento => {

      arreglo.push(cb(elemento));

   })

   return arreglo;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   var verificarSiEsA = function(letra){

      if( letra === "a"){

         return true;
      }
      else{

         return false;
      }
      
   }

   var obtenerPrimeraLetra = function(palabra){

      return palabra[0];

   }

   var buscarPalabraQueEmpiezenConA = function(cb1,cb2,array){

      var nuevoArreglo = [];

      array.forEach(elemento => {

         if(cb1(cb2(elemento))){

            nuevoArreglo.push(elemento);
         }

      })

      return nuevoArreglo;
   }

   return buscarPalabraQueEmpiezenConA(verificarSiEsA,obtenerPrimeraLetra,arrayOfStrings);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
