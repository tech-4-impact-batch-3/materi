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
console.log(buku.penulis.penulis1.nama);
console.log(buku.penulis.penulis2.umur);
