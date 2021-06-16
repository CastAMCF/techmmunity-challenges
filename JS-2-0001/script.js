function maxieMinnie(num) {
    //https://www.geeksforgeeks.org/how-to-convert-a-number-into-array-in-javascript/
    var arr = String(num).split("").map((num)=>{
      return Number(num)
    })

    var newarr = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            //https://stackoverflow.com/questions/30229522/how-can-i-join-an-array-of-numbers-into-1-concatenated-number
            if(Number(arr.join("")).toString().length == arr.length) newarr.push(Number(arr.join("")));

            var temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }

    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
    var max = newarr.reduce(function(a, b) {
      return Math.max(a, b);
    });
    var min = newarr.reduce(function(a, b) {
      return Math.min(a, b);
    });

    var maxMin = [max, min];
    return maxMin;
}