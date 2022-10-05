// for in
let siswa = {
  nama: "Reyhan",
  umur: 22,
  asal: "jakarta",
  hobi: "membaca",
};

console.log(siswa);

for (let key in siswa) {
  console.log(siswa[key]);
  //   console.log(key);
  //siswa[key] -> siswa['nama'] -> siswa['umur'] -> siswa['asal']
}

let buku = {
  judul: "tips jago javascript",
  tahun: 2022,
  penulis: {
    penulis1: {
      nama: "Reyhan",
      umur: 28,
      kota: "jakarta",
    },
    penulis2: {
      nama: "aby",
      umur: 25,
      kota: "bandung",
    },
  },
};

console.log(buku);
for (let key in buku.penulis.penulis1) {
  console.log(buku.penulis.penulis1[key], "----ini dari nested");
}
