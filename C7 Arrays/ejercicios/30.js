function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:



  for(var i = 0; i < numeros.length; i++){

    for(var  x = 0 ; x < numeros.length; x++){

      if(numeros[i] == numeros[x] && i != x){
        
        return numeros[i];

      }

    }
    
  }
    
}

module.exports = encontrarElementoRepetido;