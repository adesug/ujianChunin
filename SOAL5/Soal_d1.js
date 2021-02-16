var str = "saya cinta PLUGIN",
    reversed = "",
    idx;

while (true) {
    idx = str.lastIndexOf(" ")
    reversed = reversed + str.substring(idx) + " "
    if (idx < 0) break;
    str = str.substring(0, idx)
}
console.log(reversed)

var flip = function(str) {
    var res = "",
        i, sp = ' ';
    while (str) {
        i = str.lastIndexOf(sp);
        res += str.substr(i + 1) + sp;
        str = str.substr(0, i);
    }
    return res.substr(0, res.length - 1); //remove last space
};

console.log(flip("saya cinta PLUGIN"));