function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:



   var identificar = function (letras) {

      return letras[0] == "a";
   }

   var separar = function (palabra) {

      return palabra.split("");
   }

   var filtrar = function (array, separar, identificar) {

      return array.filter((palabra) => identificar(separar(palabra)))

   }
   var arrayA = filtrar(arrayOfStrings, separar, identificar);

   return arrayA;

}

module.exports = filter;
