Corrija o bug! #2

Nesse trecho existe um loop infinito, faça as alterações necessarias para corrigir o bug:
function printArray(number) {
  var newArray = [];

  for(var i = 1; i <= number;) {
    newArray.push(i);
  }

  return newArray;
}