// menambahkan properti baru ke dalam objek
let buku = {
  judul: "mantan jadi manten",
  penulis: "hayati",
  "jumlah halaman": 250,
};

console.log(buku);

buku.tahun = 2022;
buku.terjual = 3000;
console.log(buku);

buku["penerbit"] = "gramedia";
console.log(buku);
