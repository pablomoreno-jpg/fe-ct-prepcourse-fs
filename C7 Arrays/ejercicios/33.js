function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:

  var array1 = str1.split('');
  var array2 = str2.split('');
  var array3 = str3.split('');

  var largo = Math.max(array1.length, array2.length, array3.length);

  var palabra = "";

  for (var i = 0; i < largo; i++) {

    if (array1[i] != "" && array1[i] != undefined) {

      palabra += array1[i]

    }

    if (array2[i] != ""  && array2[i] != undefined) {

      palabra += array2[i]

    }

    if (array3[i] != ""  && array3[i] != undefined) {

      palabra += array3[i]

    }

  }

  return palabra;

}

module.exports = combine;