groupAnimals = (animals) => {
	animals.sort();
	var hasil = [];
	var animalPertama = animals[0][0];
	var urutanAnimal = [];

	for (var i = 0; i < animals.length; i++) {
		if (animalPertama == animals[i][0]) {
			urutanAnimal.push(animals[i])
		}else{
			hasil.push(urutanAnimal)
			urutanAnimal = []
			animalPertama = animals[i][0]
			urutanAnimal.push(animals[i])
		}

		if (i == animals.length - 1) {
			hasil.push(urutanAnimal);
		}
	}

	return hasil;

}


console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil'])); /*[ [ 'anoa', 'ayam' ], [ 'cacing' ], [ 'kancil', 'kuda' ] ] */
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ])); /*[ [ 'anoa', 'ayam' ], [ 'cacing', 'cicak' ], [ 'kancil', 'kuda' ], [ 'unta' ] ]*/