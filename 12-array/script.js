// ======================== Array =========================
// mampu menyimpan banyak data,
// dan bisa menyimpan berbagai macam tipe data

let arr = ["hallo", 1, true]

arr[0] = "selamat datang"

console.log(arr);
console.log(arr.length);
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

let arrBuah = [
  "jeruk", 
  "semangka", 
  "pepaya", 
  "rambutan",
  "melon",
  "belimbing"
]

// menambahkan data...................
arrBuah.push("duku")          // di akhir
arrBuah.unshift("anggur")     // di awal

// menghapus data.....................
arrBuah.pop()        // di akhir
arrBuah.shift()      // di awal

// menghapus di tengah................
// splice, merubah data arraynya
// dan dapat mereturn nilai
arrBuah.splice(2, 0, "buah naga")
console.log(arrBuah)

// slice, ambil data dgn cara mengcopy
let slice = arrBuah.slice(2, 4)
console.log(arrBuah);
console.log(slice)

// ======================= array loop ============================
console.log(arrBuah);

// for..........................
for (let i = 0; i < arrBuah.length; i++) {
  console.log(arrBuah[i])
}

for (let i = arrBuah.length - 1; i >= 0; i--) {
  console.log(arrBuah[i])
}

// for of.......................
for (let buah of arrBuah){
  console.log(buah);
}
           
// forEach......................
// tanpa return
arrBuah.forEach((item) => {
  console.log(item)
})

// map..........................
// bisa dengan return
let buahSegar = arrBuah.map((item) => {
  return item + " " + "segar"
})
console.log(buahSegar)



// ========= contoh kasus ===========
// Merubah angka desimal menjadi persen
let angkaDes = [
  0.45,
  0.67,
  0.23,
  0.76,
]

// Cara map
// kasus seperti ini lebih dianjurkan menggunakan map
let angkaPersenMap = angkaDes.map((item) => {
  return item * 100 + "%"
})
console.log(angkaPersenMap);

// Cara forEach
let angkaPersenForEach = []
angkaDes.forEach((item) => {
  angkaPersenForEach.push(item * 100 + "%")
})
console.log(angkaPersenForEach)

// ===================== Array Multidimensi ==================
let arrMulti = [
  ["nama", "alpha"],
  ["umur", 17],
  ["kelas", "JS"],
]

console.log(arrMulti[0][1]);
console.log(arrMulti[2][1])

arrMulti[2][1] = "CSS"
console.log(arrMulti);

