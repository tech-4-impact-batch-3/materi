// ====================== String ===============================
let hewan = "kAnCIl"

console.log(typeof hewan)

// properties
console.log(hewan.length);

// built-in method
console.log(hewan.toUpperCase())
console.log(hewan.toLowerCase())

console.log(hewan.charAt(1))
console.log(hewan[1])

// kAnCIl
console.log(hewan.includes("s"))

let kalimat = "dengan menggunakan split(), kita dapat memisahkan sebuah string menjadi data array"
console.log("BEFORE", kalimat)
console.log("AFTER", kalimat.split(" "));


// ==================== Number ===========================

console.log(Number("123")); // 123 in Number

console.log(isNaN(2131)) // false
console.log(isNaN("dawdf")) // true

let angka = 3.12345
console.log(angka.toFixed(1)) // 3.1
console.log(angka.toFixed(2)) // 3.12




// ========================= Math  ==============================

// properties
console.log(Math.PI)

// method
console.log(Math.abs(-5)) // 5
console.log(Math.ceil(5.2)) // 6
console.log(Math.floor(5.6)) // 5
console.log(Math.round(5.6)) // 6
console.log(Math.round(5.2)) // 5
console.log(Math.random()) // 0.123342





// ====================== Date  ============================

console.log(Date()) // 'Tue Sep 27 2022 20:31:20 GMT+0700 (Indochina Time)'
console.log(Date.now()) // 1664285495449

let date = new Date()
console.log(date.getDay()); 
console.log(date.getFullYear()); // 2022




// ==================== prototype ========================

// kasus
// hallo -> ollah

// membuat method baru utk tipe data string
String.prototype.reverse = function(){
  let s = ""
  for (let i = String(this).length-1; i >= 0 ; i--) {
    s = s + String(this)[i]
  }

  return s
}

// method yg dimiliki oleh string
console.log("hallo".reverse())
console.log("selamat datang".reverse())

// function dgn argumen string
// console.log(reverse("hallo"));