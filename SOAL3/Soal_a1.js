function cariNama(cari, jumlah, hasil) {
    let dataBaru = []
    name.filter((data) => {
        if (data.toLowerCase().includes(cari)) {
            dataBaru.push(data)
        } else if (data.toUpperCase().includes(cari)) {
            dataBaru.push(data)
        }
    })
    hasil(dataBaru, jumlah)
}

const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

function callback(data, jumlah) {
    console.log(data.slice(0, jumlah));
}
cariNama("an", 4, callback);