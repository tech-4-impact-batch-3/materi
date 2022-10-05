const greeting = {
  welcome: function () {
    return "halo selamat datang";
  },
  afterPay: function () {
    return "Terimakasih sudah membeli produk kami";
  },
};

console.log(greeting.welcome());
console.log(greeting.afterPay());

let siswa = {
  nama: "dila",
  umur: 17,
  hobi: "membaca",
};

console.log(siswa);
// [nama, umur, hobi]

console.log(Object.keys(siswa));
console.log(Object.values(siswa));
