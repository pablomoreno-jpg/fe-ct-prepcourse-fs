function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  var primerVuelta = true;
  var masGrande;



  if (array.length > 0) {

    array.forEach(element => {

      if (primerVuelta) {
        masGrande = element;
        primerVuelta = false;
      }
      else if (element > masGrande) {

        masGrande = element;

      }

    });

    return array.indexOf(masGrande);
  }
  else {

    return array.length;
  }


}

module.exports = encontrarIndiceMayor;
