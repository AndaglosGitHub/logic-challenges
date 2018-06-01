angkaPalindrome = (num) => {

    cekAngkaPalindrome = (num) => {
        var hasilModulus = 0;
        var hasilAngka = 0;

        for (var i = num; i > 0; i = parseInt(i / 10)) {
            hasilModulus = i % 10;
            hasilAngka = hasilAngka * 10 + hasilModulus;
        }

        return hasilAngka === num ? true : false;
    }

    var hasil = 0;
    var angkaPalindrome = false;

    while (angkaPalindrome == false) {
        if (cekAngkaPalindrome(++num)) {
            angkaPalindrome = true;
            hasil = num;
        }
    }

    return hasil;
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001