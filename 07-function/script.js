// =========== FUNCTION ============

// cara buat function ada 3
// 1 - function clasic =============
// function myFunction(kondisi) { }

// 2 - fanction variable =============
// let myFunction = function (kondisi) { }

// 3 - arrow function =============
// let myFunction = (kondisi) => { }

// =========== kasus ===============
// hallo, apa kabar auzan?
// hallo, apa kabar alpha?
// hallo, apa kabar semuanya?

// cara simple
// console.log("hallooo, apa kabar auzan?")
// console.log("hallooo, apa kabar farhan?")
// console.log("hallooo, apa kabar rezieq?")
// kalo ada perubahan pada text, maka semua harus diganti

// =========== Solusi ==============

// tanpa return ==========
// deklarasi function
function greeting(name = "Alpha") {
  console.log(`hallo, apa kabar ${name}?`)
}

// calling function
greeting("auzan")
greeting("farhan")
greeting("rizieq")
greeting()

// dengan return ==============
function greeting2(name) {
  return `hallo, apa kabar ${name}?`
}

let say = greeting2("Luthfi")
console.log(say, "baik baik saja") 
console.log(greeting2("farhan")) 
console.log(greeting2("rizieq")) 

// ========= kasus lain ================ 
// cek string lebih dari 8 char
function checkString(s) {
  if (s.length >= 8) {
    return true
  } else {
    return false
  }
}

console.log(checkString("hallo"));
console.log(checkString("halloooo"));

// short syntax
let checkStringArrow = (s) => s.length >= 8 ? true : false
console.log(checkStringArrow("halloooo"));


// ========= kasus lain ================ 
// cari angka
function cariAngka (x) {
  let isKetemu = false
  for (let i = 1; i <= 20; i++) {
    if (i == x) {
      console.log(i)
      isKetemu = true
    }
  }

  if (!isKetemu) {
    console.log("data tidak ditemukan")
  }
}

cariAngka(3)
cariAngka(5)
cariAngka(22)




























