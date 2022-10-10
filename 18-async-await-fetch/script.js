// promise creation (membuat object promise)
let nonton = (kondisi) => {
  return new Promise((resolve, reject) => {
    if (kondisi == "jalan") {
      resolve("nonton terpenuhi")
    }
    reject("batal nonton")
  })
}

// utk menjalankan kode promise di atas
// ada 2 cara
// - promise (then catch)
// - async await

// ===================== Promise ===================
// promise
// namaPromis.then().catch()
nonton("jalan")
.then(result => {
  console.log(result);
}).catch(err => {
  console.log(err)
})

// ===================== async await ===============
// async await -> car utk nangkep obj promise
// buat async function
async function asyncNonton() {
  try {
    let result = await nonton("jalan")
    console.log(result);
  } catch (error) {
    console.log(error)
  }
}
asyncNonton()

// async arrow
// let asyncNonton = async () => { }


// ==================== FETCH ========================
// fetch -> obj promise
// di handle menggunakan promise atau async await
// API -> jembatan komunikasi ke server untuk mendapatkan data

// medapatkan data digimon
fetch("https://digimon-api.vercel.app/api/digimon")
.then(result => result.json())
.then(result => {
  console.log(result)
})