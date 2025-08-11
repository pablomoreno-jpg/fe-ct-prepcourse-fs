function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  var producto = 1; 

  for (var i = a; i <= b ; i++){

    producto *= i;

  }

  if(producto == -0){

    return 0;
  }


  return producto;

}

module.exports = productoEntreNúmeros;