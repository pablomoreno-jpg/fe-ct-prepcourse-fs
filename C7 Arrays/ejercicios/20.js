function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  return array.every((elem) => elem == array[0]);

}

module.exports = todosIguales;
