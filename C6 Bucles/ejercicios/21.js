function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:


  var siguiente = 1; 
  var validad = false;

  while(!validad){

    if(Math.pow(2,siguiente) == numero){

      validad = true;

    }
    else if(siguiente > numero ){

      break;

    }
    siguiente+=1;
  }


  return validad;
  
}

module.exports = esPotenciaDeDos;
