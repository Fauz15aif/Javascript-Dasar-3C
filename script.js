// AKTIVITAS 1
// Setup berkas js dengan cara eksternal

// Mencetak sebuah nilai dengan cara (console.log) 
//cetak sebuah teks dengan tipe data "string"
console.log("=== Kalkulator Nilai Rapor Kelas"); // Mencetaka sebuah teks judul
console.log("Javascript Telah Terhubung"); //teks untuk memastikan terhubungnya javascript 

// aktivitas 2
//membuat variabel const dan let 

//Const digunakan untuk nilai yang TIDAK PERNAH BERUBAH

const NAMA_KAMPUS = "UPI PWK"; // Nama Kampus
const MATA_KULIAH = ["SCM", "Promnet", "Jarkom"]; //Daftar Matakuliah (array)


//let digunakan untuk nilai yang BISA BERUBAHH sewaktu waktu

let NAMA_DOSEN = "Dr. Muhammad Fauzi Saifuddin, S.Pd S.Fil M.Fil"; //nama dosen yang ngajar
let KELAS_PRAKTIKUM = "Lama Komputer B";

//cetak dari kedua variabel tersebut menggunakan operator +
//operator + digunakan untuk menjummlahkan variabel + tipe data
console.log( "Kampus : " + NAMA_KAMPUS); //MENCETAK NAMA KAMPUS DENGAN MENGGABUNGKAN 5 VARIBEL
console.log("Kelas : " + KELAS_PRAKTIKUM); //mencetak kelas praktikum
console.log("Dosen : " + NAMA_DOSEN); //mencetak nama dosen



//demo perbedaan variabel let vs const

//1. "let" -> nilai nya berubah ubah sewaktu waktu
NAMA_DOSEN = "BOWO"; // MENGUBAH NAMA DOSEN DOSEN
console.log("Dosen baru telah ditambahkan : " + NAMA_DOSEN);


// // 2. "CONST" -> nilai nya tetap 
// NAMA_KAMPUS = "UPI BUMSIL";
// console.log("Nama kampus : " + NAMA_KAMPUS);

//INPUT INTERAKTIF

// 1. alert() digunakan untuk menampilkan dialog pemeberitahuan  awal(pop up)
alert("Selamat Datang di Aplikasi Kalkulator Sederhana");

//2. prompt() digunakan untuk menampilkan dialog input teks dan untuk disimpan ke variabel
let NAMA_MAHASISWA = prompt("Halo! Masukan nama kamu untuk memulai");

// penjelasan Conditional statement / percabangan sederhana
//cukup tulis "if (NAMA_MAHASISWA)" ->KONDISI PERTAMA YANG AKAN DICEK
//JIIKA kondisi pertama di memenuhi maka masuk ke kondisi kedua -> false

if (NAMA_MAHASISWA){
    //JIKA user memasukan nama maka akan ada greetings
    alert("Halo!, " + NAMA_MAHASISWA + " yuk kita menghitung nilai");
    console.log("Mahasiswa yang aktif : " + NAMA_MAHASISWA);
}else{
    //jika user tidak memasukan nama akan disebut anonim
    alert("kamu tidak memasukan nama, kamu disebut anonymous");
    NAMA_MAHASISWA = "Mahasiswa Anonim";
    console.log("Mahasiswa aktif : " + NAMA_MAHASISWA);
}


// AKTIVITAS 3 Operasi aritmatika - HITUNG NILAI RATA RATA

let NILAI_SCM = 80;
let NILAI_PROMNET = 75;
let NILAI_JARKOM = 90;

//Hitung jumlahh nilai

let JUMLAH_NILAI = NILAI_SCM + NILAI_PROMNET + NILAI_JARKOM;

//SETELAH DIJUMLAH LALU DIBAGI
let NILAI_RATARATA = JUMLAH_NILAI / 3;

///CETAK RINCIAN NILAINYA KE CONSOLE
console.log("Nilainya : " + NAMA_MAHASISWA);
console.log("NILAI_SCM : " + NILAI_SCM);
console.log("NILAI_PROMNET : " + NILAI_PROMNET);
console.log("NILAI_JARKOM : " + NILAI_JARKOM);

console.log("nilai rata rata kamu adalah : " + NILAI_RATARATA);





//AKTIVITAS 4 percabangan if, elseif, else. untuk menentukan predikat

//buat varibel predikat dan keterangan
let PREDIKAT = "";
let KETERANGAN = "";

//PERCABANGAN if, elseif, else. percabngan itu evaluasi dari konsisi 1 sampai kondisi rerakhir
//salah satu kondisi terpenuhi maka ia true maka blok tersebut dijalankan
//">=" operator lebih dari sama atau sama dengan

if (NILAI_RATARATA >= 90) {
    //KONDISI yang peertama kali di cek :apakah rata rata 90?
    PREDIKAT ="A";
    KETERANGAN = "Sangat Baik";
} else if (NILAI_RATARATA >= "80") {
    //KONDISIkedua dimna kondisi pertama tidak memenuhi
    PREDIKAT = "B";
    KETERANGAN = "Baik";
} else if (NILAI_RATARATA >= 70) {
    //kondisi ketiga dimana kondisi pertama dan kedua tidak memenuhi
    PREDIKAT = "c";
    KETERANGAN = "pulang aja";
}else {
    ///jikka semua kondis diatas tidak emmenuhi 
    PREDIKAT = "D" ; 
    KETERANGAN = "Belajar Lagi DEck";
}


///tampilkan hasil predikat
console.log("predikat : " + PREDIKAT );
console.log("keterangan : " + KETERANGAN );

//tampilkan alert juga supaya user tau hasil peridikat da keteranganya

alert(
    "Hasil Raport : " + NAMA_MAHASISWA + ":\n" + /// artinya ganti baris (enter)
    "Rata - rata : " + NILAI_RATARATA + ":\n" +
    "Predikat : " + PREDIKAT + "\n" +
    "Keterangan : " + KETERANGAN
);


//function adalh cara kita untuk membungkud ssekumpulan kode menjadi satu kesatuan/ satu blok
// function ini bisa dipanggil kapan saja dengan nama fungsinya
// struktur kepenulisan : function NAMA_FUNTION(parameter1, 2, 3,) {.....}


function HITUNG_RATARATA(nilai1, nilai2, nilai3) {
    let JUMLAH = nilai1 + nilai2 + nilai3; //-> jumlhkan dulu mengg88nakan variabel let dengan nama jumlah
    return JUMLAH / 3; //-> hasilnuya diambil variabel let dengan nama jumlah di bagi 3
}

function TENTUKAN_PREDIKAT(PREDIKAT) {
    /// SERIAP BARIS "if" akan langsung mengahasilkan ouput / return dan kjonf=diasi harus terpenuhi
    if (PREDIKAT >= 90) return "A - sangant baik";
    if (PREDIKAT >= 80) return "B - Baik";
    if (PREDIKAT >= 90) return "c - Belajar lagi deck";
    return "D - Pulang aja";
}


///cara manggil function / rumus yang kita buat

let NILAI_MAHASISWA_A = HITUNG_RATARATA(88, 92,70); //hitung nilai rata rata


//tampilkan predikat mahasiwa a
///panggil fungsi TENTUKAN_PREDIKAT() 
let PREDIKAT_MAHASISWA_A = TENTUKAN_PREDIKAT(NILAI_MAHASISWA_A);

///CETAK
 console.log("Data Mahasiswa A adalah : ");
 console.log("Rata ratanya adalah : " + NILAI_MAHASISWA_A);
 console.log("Pedikat nya adalah : " + PREDIKAT_MAHASISWA_A);





//AKTIVITAS KE 6 : ARRAY & FOR loop

// Array yang ita buat disini "kotak penyimpanan"
//Ditulis [...,....,...,]

//menampilkan data mahasiswa menggunakaan arraay
let DAFTAR_MAHASISWA = [
    "Salman", //posisi index ke - 0 
    "Bowo", //posisi index ke - 1
    "Desta", //posisi index ke - 2 
    "Nadia", //posisi index ke - 3 
    "Kirei" //posisi index ke - 4
    ///total panjang array 5
];

// tampilkan daftar mahasiswa 
console.log("Daftar Mahasiswa Kelas " + KELAS_PRAKTIKUM)

// for loop digunakan untuk mengulang kode berkali kali sampai kondisi terminasinya habis
// struktur for loop ; (awal; kondisitreminasi; langkah) {...}
// let i = 0 -> Mulai dari variabel dari index pertama (array)
//i < DAFTAR_MAHASISWA.length -> ulangi sampai panjang array nya hhabais
// i++ / i-- -> setelah setiap putaran, tambahan i dengan +1(0->1->2 hbs)


for(let i = 0; i < DAFTAR_MAHASISWA.length; i++) {
    // DAFTAR_MAHASISWA[i] -> AMbil elemen pada posisi indeks ke i/pertama
    // (i + 1) - digunakan untuk agar nomor uurut nya +1 dan dimulai dari 1
    console.log((i + 1) + "." + DAFTAR_MAHASISWA[i]);
}

// .length adalah properti yang mengembalikan total panjang/elemen yang ada didalamnya array
console.log("Total Mahasiswa ; " + DAFTAR_MAHASISWA.length);
console.log("Praktikum Selesai war is over");