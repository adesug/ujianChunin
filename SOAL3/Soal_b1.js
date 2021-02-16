function hitung(nilaiAwal, nilaiAkhir) {
    let dataArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    if (nilaiAwal <= nilaiAkhir && dataArray.length > 5) {
        console.log(dataArray.slice(2, 8))
    } else {
        console.log("tidak ada data");
    }



}
hitung(2, 8);