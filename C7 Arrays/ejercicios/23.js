function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:

  contador = 0;
  array = []

  while (contador < 10) {


    num += 2

    contador++;

    array.push(num);

    if(num == contador){

      return "Se interrumpió la ejecución"
    }

  }


  return array;

}

module.exports = breakStatement;
