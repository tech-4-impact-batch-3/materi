let btnDecrement = document.getElementById("decrement")
let btnIncrement = document.getElementById("increment")
let counter = document.getElementById("counter")

let angka = 0

btnIncrement.addEventListener("click", function() {
  angka = angka + 1
  counter.innerText = angka
  // console.log(angka)
  // console.log("increment");
})

btnDecrement.addEventListener("click", function() {
  angka--
  counter.innerText = angka
})