// deklarasi promise
let promise = new Promise((resolve, reject) => {
        let process = true // contoh saja
        if (process) resolve('Berhasil')
        else reject('Gagal')
    })
    // cara menggunakan promise
promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error))