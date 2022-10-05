let siswa = {
  nama: "terra",
  umur: 17,
  hobi: "memancing",
  "nomor handphone": 182367599,
};

// cara akses objek terbagi menjadi 2
// 1. dot notation
// ekspektasi output : terra

console.log(siswa.nama);
// console.log(siswa.nomor handphone);

// 2. bracket
console.log(siswa["nama"]);
console.log(siswa["nomor handphone"]);

// memanggil nama objek dengan variable
let properti = "umur";
console.log(siswa[properti]);

siswa.nama = siswa.umur;
console.log(siswa);
