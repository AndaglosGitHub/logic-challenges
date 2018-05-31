konversiMenit = (minutes) => {
	var jam = Math.floor(minutes / 60);
	var menit = Math.floor(minutes % 60) < 10 ? '0'+Math.floor(minutes % 60) : Math.floor(minutes % 60);

	return `${jam}:${menit}`;
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00