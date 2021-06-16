function secondsToMinutes(seconds) {
    if(seconds/60 - parseInt(seconds/60) >= 0.5){
        return parseInt(seconds/60) + 1; 
    }else{
        return parseInt(seconds/60); 
    }
}