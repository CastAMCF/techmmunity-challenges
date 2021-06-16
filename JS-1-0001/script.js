function getBigger(arrayPalavras) {
    var temp = 0;
    var bigger;
    
    for (var i = 0; i < arrayPalavras.length; i++) {
        if(arrayPalavras[i].length > temp) {
            temp = arrayPalavras[i].length;
            bigger = arrayPalavras[i];
        }
    }

    return bigger;
}