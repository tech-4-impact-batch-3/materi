let users = [
  {
    nama: "dila",
    umur: 17,
    alamat: "bandung",
  },

  {
    nama: "audzan",
    umur: 18,
    alamat: "jakarta",
  },
  {
    nama: "dolton",
    umur: 16,
    alamat: "sulawesi",
  },
];

console.log(users);

let data = users.map((el) => {
  // console.log(el.nama);
  el.status = "aktif";
  return el;
});

// console.log(data);

// console.log(users[0].nama);
