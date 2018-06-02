targetTerdekat = (arr) => {
	var jarakO = arr.indexOf('o');
	var xTerdekat = arr.indexOf('x');

	return xTerdekat - jarakO > 0 ? xTerdekat - jarakO : ((arr.length - 1) + xTerdekat - jarakO);
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2