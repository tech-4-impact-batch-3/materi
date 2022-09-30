let paragraf = document.getElementById("paragraf")

// cara ke-2 
paragraf.onclick = function () {
  alert("ini dari paragraf")
}
// paragraf.onclick = tampilkanAlert

function tampilkanAlert () {
  alert("ini alert")
}

// cara ke-3
// addEventListener bisa multiple event
let button = document.getElementById("btn")
button.addEventListener("click", function (event) {
  console.log(event.target)
  alert("ini dari button")
})

// button.addEventListener("click", function () {
//   confirm("apakah ini dari button?")
// })