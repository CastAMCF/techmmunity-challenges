function getHowManyDaysYouLived(age) {
    var bornyear = new Date().getFullYear() - age;
    var dayslived = 0;
    
    for (var i = 0; i < age; i++) {
		//https://stackoverflow.com/a/16353241
        if(((bornyear % 4 == 0) && (bornyear % 100 != 0)) || (bornyear % 400 == 0)) {
            dayslived = dayslived + 366;
        }else{
            dayslived = dayslived + 365;
        }
        bornyear++;
    }

    return dayslived;
}