### Soal A
**Buatlah 3 program bebas dengan menggunakan promise**
### Jawab
 * Run [Code](https://playcode.io/737164/)
   * Penjelasan : Kode di atas apabila dijalankan maka akan menghasilkan log  Berhasil, jika variabel process kita
    ganti nilainya menjadi false maka yang akan muncul adalah log Gagal.
    Jadi method then untuk menangkap sinyal resolve (sukses), sedangkan catch untuk menangkap sinyal reject (gagal).
 * Run [Code](https://playcode.io/737165/)
    * Penjelasan : Jika saat request gagal entah karena koneksi internet    terputus atau URL salah atau web service down
    maka akan menampilkan teks Network Error.

 * Run [Code](https://playcode.io/737167/)
   * Penjelasan : Method then dipanggil dua kali karena fitur fetch akan mengembalikan response dalam bentu object. Untuk mengubahnya menjadi format JSON maka kita bisa gunakan method json() yang mengembalikan promise juga sehingga kita gunakan method then yang kedua untuk mendapatkan data response dalam format JSON.


### Soal B
**Buatlah program menggunakan method fetch untuk menampilkan semua title (hanya title nya saja) dari REST API dibawah ini https://dhiyo-api-article.herokuapp.com/articles Gunakan debugger console bawaan browser Chrome untuk melihat hasilnya**

### Jawab
* Run [Code](https://playcode.io/736989/)
  * penjelasan : pada kode diatas menggunakan method fecth yang berisi link untuk get data api,fetch merupakan cara baru dalam melakukan network request pada dasarnya fungsi fetch memanfaatkan sebuah Promise. lalu menggunakan method then() untuk mengembalikan promise lalu tambahkan res untuk bentuk respon berusan data json lalu method map digunakan mengembalikan elemen baru lalu panggil data user.tittle  

