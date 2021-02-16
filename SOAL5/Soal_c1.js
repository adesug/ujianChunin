function angka(a, b, n) {
    nilaiAwal = a;
    nilaiAkhir = b;
    dataArray = n;

    if (a < b && n.length > 5) {
        return n.sort((a, b) => a - b).slice(a, b - 1)
    } else {
        return
    }
};

console.log(angka(1, 5, [1, 3, 2, 5, 4, 6, 8, 7, 9, 10]));