function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:

  var contador = 0;
  var encotrado;

  while (contador < secuencia.length) {

    if (secuencia[contador] % n === 0) {

      encotrado = secuencia[contador];
      break;

    }

    contador++;

  }

  return encotrado;

}

module.exports = encontrarPrimerMultiploDeN;