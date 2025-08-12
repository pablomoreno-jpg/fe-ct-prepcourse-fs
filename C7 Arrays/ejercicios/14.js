function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  var mayores = array.filter((num) => num > 10)

  return mayores.length;
}

module.exports = contarElementosMayoresA10;
