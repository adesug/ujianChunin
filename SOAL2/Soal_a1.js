function NilaiUn(a, b, c, d) {
    indonesia = a;
    inggris = b;
    matematika = c;
    ipa = d;

    rataRata = (a + b + c + d) / NilaiUn.length;
    if (rataRata >= 90 && rataRata <= 100) {
        console.log("Grade = A")
    } else if (rataRata >= 80 && rataRata <= 89) {
        console.log("Grade = B")
    } else if (rataRata >= 70 && rataRata <= 79) {
        console.log("Grade = C")
    } else if (rataRata >= 60 && rataRata <= 69) {
        console.log("Grade = D ")
    } else if (rataRata >= 0 && rataRata <= 59) {
        console.log("Grade = E")
    }
    return rataRata;
}
console.log(NilaiUn(70, 80, 70, 70));