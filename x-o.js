xo = (str) => {
	jumlahX = 0;
	jumlahO = 0;

	for (var i = str.length; i >= 0; i--) {
		if (str[i] === 'x') {
			jumlahX++
		}else if (str[i] === 'o') {
			jumlahO++
		}
	}

	return jumlahX == jumlahO ? true : false;

}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true