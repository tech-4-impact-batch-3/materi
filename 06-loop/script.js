// ============== Loop ===================
// ============== for ==================== 
// console.log("==== For =====")
// for (initial; codition; iteration) {}
// for (start; stop; step) {}
// counted loop

// contoh kasus..........................
// 1 - 10
for (let i = 1; i <= 10 ; i++) {
  console.log(i)
}

// cari angka 6
for (let i = 1; i <= 10 ; i++) {
  if (i == 6) {
    console.log(i , "yess ketemu")
  } else {
    console.log(i)
  }
}

// ============== while ==================== 
// console.log("==== while =====")

// syntax while mirip seperti if
// while akan diulang, if cuma 1x dijalankan
// while (condition) { }

// while (jantungku masih bertedak) {
//   selama itu pula engkau milikku
// }

// while (hidup()) {
//   belajar()
//   beribadah()
// }

// contoh kasus..........................
// 1 - 10
let i = 10
while (i <= 10) {
  console.log(i)
  i++
}

// cari angka yg dapat di bagi 2, 3, 4, 5, 6
// butuh while, karena ga tau hasil akhirnya
i = 1
let isKetemu = false

while (!isKetemu) {
  if (
    i % 2 == 0 && 
    i % 3 == 0 && 
    i % 4 == 0 && 
    i % 5 == 0 &&
    i % 6 == 0 
    ) {
      console.log(i);
      isKetemu = true
    }

    i++
}

// ============== do while ==================== 
// console.log("==== do while =====")
// Mirip seperti while, tapi eksekusi dilakukan pertama lalu bertanya
// do {
  // eksekusi
// } while ( /*condition*/ )

// contoh kasus..........................
// 1 - 10
i = 1
do {
  console.log(i)
  i++
} while (i <= 10)
  
// cari angka yg dapat di bagi 2, 3, 4, 5, 6
// butuh while, karena ga tau hasil akhirnya
i = 1
isKetemu = false

do {
  if (
    i % 2 == 0 && 
    i % 3 == 0 && 
    i % 4 == 0 && 
    i % 5 == 0 &&
    i % 6 == 0 
    ) {
      console.log(i);
      isKetemu = true
    }

    i++
} while (!isKetemu)