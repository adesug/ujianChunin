function checkGrade(nilai) {

    if (nilai > 79 && nilai <= 100) {
        console.log("A");
    } else if (nilai > 64 && nilai <= 79) {
        console.log("B");
    } else if (nilai > 50 && nilai <= 64) {
        console.log("C");
    } else if (nilai > 1 && nilai <= 50) {
        console.log("D");
    } else if (nilai > 101) {
        console.log("Anda Terlalu Cerdas");
    }

}
checkGrade((100))
checkGrade((65))
checkGrade((52))
checkGrade((40))
checkGrade((1000))