function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  var array = texto.split('');
  array.reverse();
  return array.join('');

}

module.exports = invertirTexto;
