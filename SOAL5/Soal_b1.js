function sortAlphabet(string) {
    return [...string].sort().join("")
        .split('')
        .filter(function(item, pos, self) {
            return self.indexOf(item) === pos;
        })
        .join('');
}


console.log(sortAlphabet("pluginsangatkerensekali"));