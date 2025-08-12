function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:

  var num = numeros[0];
  var faltante = null;

  for(var i = 1; i< numeros.length; i++){

    if(numeros[i] - num > 1){

      faltante = num + 1;

    }

    num = numeros[i];
  }

  return faltante;
}

module.exports = encontrarNumeroFaltante;