function order(array) {
    var sortedArray = [];
    
    var minTemp = 0;
    for (var i = 0; i < array.length; i++) minTemp = Math.min(array[i], minTemp)

    while(sortedArray.length != array.length){
        var temp = minTemp;
        for (var i = 0; i < array.length; i++) {
            if(array[i] > temp && !sortedArray.includes(array[i])) {
                temp = array[i];
            }
        }
        sortedArray.push(temp);
    }

    return sortedArray;
}