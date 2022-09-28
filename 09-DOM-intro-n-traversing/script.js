// ===================== traversing ke bawah =====================

// getElement family........................
let title = document.getElementById("title")
console.log(title)

let items = document.getElementsByClassName("item")
console.log(items[2]);

let list = document.getElementsByClassName("list")
console.log(list[0])
console.log(list[0].children)

let itemByTag = document.getElementsByTagName("li")
console.log(itemByTag[1])
console.log(itemByTag.item(1))
console.log(itemByTag.length)

// query selector family...................
let listQuery = document.querySelector(".list")
console.log(listQuery);

let itemQueryAll = document.querySelectorAll(".item")
console.log(itemQueryAll)

for (let i = 0; i < itemQueryAll.length; i++) {
  console.log(itemQueryAll[i])
}

let itemQuery = document.querySelector(".item")
console.log(itemQuery);

// ===================== traversing ke atas =======================

console.log(itemQuery.parentElement);
console.log(itemQuery.closest(".list"));

// ===================== traversing ke samping =====================

console.log(itemQuery.previousElementSiblingc);
console.log(itemQuery.nextElementSibling);