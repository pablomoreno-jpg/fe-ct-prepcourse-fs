/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

const forEach = require("../C8 Objects + Callbacks/callbacks/ejercicios/05");

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  var array = []
  var llaves = Object.keys(objeto);

  for (var i = 0; i < llaves.length; i++) {

    array.push([llaves[i], objeto[llaves[i]]])
  }

  return array;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  var array = string.split("");
  var objeto = {}

  for (var i = 0; i < array.length; i++) {

    if (Object.hasOwn(objeto,array[i])) {

      objeto[array[i]] += 1;

    }
    else {

      objeto[array[i]] = 1;

    }

  }

  return objeto;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  var mayus = []
  var minus = []

  for (var i = 0; i < string.length; i++) {

    if (string[i] >= "A" && string[i] <= "Z") {

      mayus.push(string[i]);

    } else {

      minus.push(string[i]);
    }

  }

  var combianacion = mayus.concat(minus);

  return combianacion.join("");

}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  var palabras = frase.split(" ");
  var array = []

  palabras.forEach((palabra) => {

    array.push(palabra.split("").reverse().join(""));
  })

  var nuevaFrase = array.join(" ");

  return nuevaFrase;
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

  var str = numero.toString()

  var miNumero = Number(str.split("").reverse().join(""));

  if (miNumero === numero) {

    return "Es capicua";
  }

  return "No es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:

  return string.split("").filter((letra) => letra != "a" && letra != "b" && letra != "c").join("");

}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  return arrayOfStrings.sort((a,b)=> a.length - b.length);

}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  var array3 = [];

  array3 = array1.filter(valor => array2.includes(valor));

  return array3;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
