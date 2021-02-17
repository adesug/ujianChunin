function printSegitiga() {
    let string = '';
    for (i = 1; i <= 6; i++) {
        for (j = 1; j <= i; j++) {
            string += ' '
        }
        for (k = 6 - i; k >= i - 6; k--) {
            string += i
        }
        string += '\n'
    }

    console.log(string)
}
printSegitiga();