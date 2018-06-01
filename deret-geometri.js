tentukanDeretGeometri = (arr) => {
	var hasilBagi = Number( Math.round( arr.slice(-1) / arr.slice(-2, -1) ) );
	var hasil = true;

	for (var i = arr.length - 1; i > 0; i--) {
		hasil = hasilBagi !== (Math.round(arr[i] / arr[i-1])) ? false : hasil;
	}

	return hasil
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false