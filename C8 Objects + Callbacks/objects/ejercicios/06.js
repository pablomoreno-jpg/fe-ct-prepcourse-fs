const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  var propiedades = 0;

  for(var prop in objeto){
    
    propiedades++;

  }

  return propiedades;
};

module.exports = contarPropiedades;
