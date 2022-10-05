let hewan = {
  nama: "kucing",
  kaki: 4,
  warna: "putih",
};
console.log(hewan);

delete hewan.warna;
delete hewan.kaki;
console.log(hewan);

hewan.suara = "meong";
console.log(hewan);
