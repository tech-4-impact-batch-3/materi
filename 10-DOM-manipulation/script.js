let app = document.getElementById("app")

// =========== memberikan content ============
// app.innerText = "<h1>apa kabs</h1>"
app.innerHTML = "<h1>Hallo</h1>"

// ========== membuat element ===============
let p = document.createElement("p")
p.innerText = "ini adalah paragraf"

// menambahkan child kedalam parent
app.append(p)

// proses yg sama
let p2 = document.createElement("p")
p2.innerText = "paragraf ke-2"
app.appendChild(p2)

// append vs appendChild
// appendChild ga bisa input data string
app.append("menggunakan append")
// app.appendChild("appendChild") // error

// =============== remove element ==========
let end = document.getElementById("end")
end.remove()

let link = document.getElementsByClassName("link")[0]

// =============== attribute ======================
console.log(link.attributes) // [] list attribute
console.log(link.getAttribute("href")); // ambil isi attribute
link.setAttribute("id", "google") // add attribute


// =============== memberikan style =====================
link.style.color = "black"
link.style.border = "1px solid black"
link.style.padding = "5px 20px"
link.style.backgroundColor = "aqua"
link.style.removeProperty("border") // menghapus style property

// =============== mendapatkan style dari element =======
let tess = document.getElementById("tess")
let tessStyle = getComputedStyle(tess)
console.log(tessStyle.height)


// =============== class =======================
let container = document.getElementsByClassName("container")[0]
console.log(container.classList); // [] list of class
container.classList.add("home") // menambahnkan class
container.classList.remove("container") // menghapus class


