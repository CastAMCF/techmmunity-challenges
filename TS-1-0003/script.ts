function sumAges(person: object) {
    var result = 0;
	//https://stackoverflow.com/a/38292886
    Object.keys(person).forEach(key => {
        result += person[key];
    });

    console.log(result);
}

sumAges({ jose: 30, cleiton: 12})
sumAges({ maria: 70, simone: 99 })