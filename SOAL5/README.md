### Soal A
**Diberikan sebuah variabel yang berisikan bilangan integer dengan ketentuan angka 0 (nol) dalam variabel tersebut merupakan pemisah antara satu bilangan dengan bilangan lainnya. Bilangan-bilangan tersebut akan dipisah dan diurutkan berdasarkan angka di bilangan-bilangan itu sendiri. Setelah itu, bilangan hasil pengurutan akan digabung kembali dengan tanpa pemisah dengan output berupa bilangan integer. Buatlah method/function yang menerima parameter hanya deret angka dan menghasilkan output seperti keterangan di atas. contoh (56431046145403146) menjadi (134561444561346)**

* Run [code](https://playcode.io/738125/)



### Soal B
**Buatlah sebuah function yang dapat mengembalikan string baru yang telah diurutkan dari a - z akan tetapi tidak diperbolehkan ada huruf yang sama. Contoh : (pluginsangatkerensekali) menjadi (aegiklnprsu)**

* Run [code](https://playcode.io/738117/)
  * penjelasan : terdapat function sortAlphabet yang memiliki parameter string lalu pecah string menggunakan spreadoperator dengan menambahkan methd sort untuk mengurutkan elemen string yang kemudian digambungkan kembali lalu dipecah dengan method split dan filter string untuk mengurutkan secara abjad.

### Soal C
**buatlah fungsi yang menampilkan angka, berdasarkan urutan angka yang sudah di tentukan. Yang menerima 3 parameter: n = urutan angka yang ingin dicari, a = angka pertama, b = selisih tiap angka**

* Run [code](https://playcode.io/737168/)
  * penjelasan : terdapat fungsi angka yang memiliki 3 parameter a=nilaiawal , b= nilaiakhir, n=dataarray lalu masuk ke pengkondisian if jika nilai awal kurang dari nilai akhir dan data array lebih dari 5 maka melakukan pengurutan lalu dipotong dengan method slice.

### Soal D
**Diberikan sebuah kalimat, ubah urutan kata-kata di dalam kalimat menjadi terbalik. Misalnya kalimat “Saya cinta PLUGIN”, output “PLUGIN cinta Saya” tanpa menggunakan built-in function / method bawaan dari javascript**

* Run [code](https://playcode.io/738077/)

### Soal E
**Anton sedang bersiap untuk mengikuti tes IQ. Tes yang paling sering keluar adalah mencari angka mana yang berbeda dari yang lain. Anton mengamati bahwa pasti ada satu angka yang berbeda dari yang lain dalam hal pemerataan. Buatlah sebuah program yang dapat membantu Anton untuk mengetahui di posisi manakah angka yang berbeda. Catatan Posisi angka dimulai dari satu (1) bukan nol (0)**

* Run [code](https://playcode.io/738121/)
  * penjelasan : pada kode diatas terdapat fungsi angka yang memiliki variabel min dan max disitu untuk mencari data diantara nilai minimal dan maksimal yang akan dimasukkan.lalu cetak dengan menambahkan method math.floor untuk mengembalikan bilangan bulat terbesar kurang dari atau sama dengan angka yang diberikan dan menambahkan method random untuk mengacak angka lalu kalikan dengan nilai min dan max.sehingga menghasilkan angka berbeda.


### Soal F
**Jelaskan apa yang kalian tahu mengenai Database, berikan contoh 5 query yang kalian tau. Jelaskan apa yang di maksud dengan Framwork, lalu apa perbedannya Framework dengan Library, dan berikan 7 contoh Framework Javascript yang kalian tahu. Jelaskan perbedaan antara FrontEnd dan Backend menurut pendapat kalian.**

### Jawab 
* Database 
  * Penjelasan : susunan record data operasional dari suatu organisasi atau perusahaan, yang diorganisir dan disimpan secara terintegrasi dengan menggunakan metode tertentu dalam komputer sehingga mampu memenuhi informasi yang optimal yang dibutuhkan oleh para pengguna.
  * Query :
    * Select : menampilkan data pada tabel
      * SELECT * FROM customer;
    * Where : memfilter data/record
      * SELECT * FROM customer WHERE id = '1';
    * Insert : Memasukkan data/record Baru
      * INSERT INTO nama_tabel('nama_field','nama_field') VALUES ('nilai_masukkan','nilai_masukkan);
    * Update : Memperbarui Data/record 
      * UPDDATE customer SET nama='Hendry' WHERE id = '4';
    * Delete : Menghapus data
      *  DELETE FROM customer WHERE negara = 'USA';
 * Framework
   * penjelasan : Merupakan sebuah kerangka yang bertujuan untuk merapikan uraian code yang ditulis.
     * contoh framework js : Node.js , React.js , Vue.js, Meteor.js
 * Library
   * penjelasan : Bagian kode yang dapat digunakan kembali yang menawarkan fungsionalitas tertentu. 
     * contoh library js : Jquery, Sweetalert, Dragula
 * Perbedaan Framework dan Library terletak pada bagian fungsionalitasnya yaitu framework digunakan sebagai dasar dan library sebagai isi dari dari kerangka tersebut 

 * front end : tampilan / ui 
 * back end : berhubungan dengan data /server side
  

### Soal G
**Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya**
  * concat : Penyambung array
      * Bentuk [code](https://playcode.io/737122/) 
  * charAt : mengetahui karakter pada urutan ke..
      * Bentuk [code](https://playcode.io/737151/)
  * toLowerCase : menjadikan huruf kecil
      * Bentuk [code](https://playcode.io/737152/)
  * toUpperCase : menjadikan huruf besar
      * Bentuk [code](https://playcode.io/737153/)
  * push :menambah dibelakang
      * Bentuk [code](https://playcode.io/737155/)
  * pop : menghapus dibelakang
      * Bentuk [code](https://playcode.io/737154/)
  * shift : menghapus diawal
      * Bentuk [code](https://playcode.io/737156/)
  * unshift : menambah diawal
      * Bentuk [code](https://playcode.io/737157/)
  * prompt : mengambil sebuah inputan dari user
      * Bentuk [code](https://playcode.io/737159/)
  * alert : pesan dialog
      * Bentuk [code](https://playcode.io/737158/)
