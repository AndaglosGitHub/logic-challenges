pasanganTerbesar = (num) => {
	var ubahString = num.toString();
	var pasangan = [];

	for (var i = 0; i < ubahString.length - 1; i++) {
		pasangan.push(`${ubahString[i]}${ubahString[i + 1]}`)
	}

	var pasanganTerbesar = '';
	for (var i = 0; i < pasangan.length; i++) {
		if(pasangan[i] > pasanganTerbesar){
			pasanganTerbesar = pasangan[i];
		}
	}

	return pasanganTerbesar
}


console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99