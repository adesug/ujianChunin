function sortAlphabet(str) {
    return [...str].sort((a, b) => a.localeCompare(b)).join("");
}

console.log(sortAlphabet("56431046145403146")); // Logs: "djklopr"