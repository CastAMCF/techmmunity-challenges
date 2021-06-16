function caesarCipher(texto, rotacao){
    var ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var abc = "abcdefghijklmnopqrstuvwxyz";

    var encyptText = "";
    var temp = rotacao;

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] != texto[i].toLowerCase()) {
            while(ABC.indexOf(texto.charAt(i))+temp > 25){
                temp = temp - 26;
            }
            encyptText += ABC.charAt(ABC.indexOf(texto.charAt(i))+temp);
        }else if(texto[i] != texto[i].toUpperCase()){
            while(abc.indexOf(texto.charAt(i))+temp > 25){
                temp = temp - 26;
            }
            encyptText += abc.charAt(abc.indexOf(texto.charAt(i))+temp);
        }else{
            encyptText += texto.charAt(i);
        }
        temp = rotacao;
    }

    return encyptText;
}