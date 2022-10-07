// ========================= CALLBACK =====================
console.log("CALLBACK")
console.log("A")

// butuh proses yg memakan waktu
// callback -> function yg dijadikan sbg argumen
setTimeout(() => {
  console.log("B")
}, 1000)

console.log("C")

// ======================== PROMISES =====================
console.log("PROMISES")
// pembuatan promise.............
let nontonPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve("nonton terpenuhi") // berhasil
  } 

  reject("gagal"); // gagal
});

// eksekusi proses..............
console.log("A");

nontonPromise
  .then((result) => {
    console.log(result);
    return `${result} bareng doi`
  })
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err);
  });

console.log("C");


// ================== promise dari function =============
console.log("PROMISES dari function")
let nonton = (kondisi) => {
  return new Promise((resolve, reject) => {
    if (kondisi == "jalan") {
      resolve("nonton terpenuhi")
    }
    reject("batal nonton")
  })
}

nonton("jalan")
.then(result => {
  console.log(result)
})
.catch(err => {
  console.log(err);
})