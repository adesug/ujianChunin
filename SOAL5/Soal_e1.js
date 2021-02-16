function angka() {
    var min = 1;
    var max = 10;

    console.log(Math.floor(Math.random() * (max - min + 1) + min));
}
console.log(angka());