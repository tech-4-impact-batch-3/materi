// ==================== init penampung list dari todo
const todos = [];

// ==================== check ketika pertama kali website di buka, apakah ada key: theme dan value: dark di storage
if (localStorage.getItem("todo")) {
  const todoStore = JSON.parse(localStorage.getItem("todo"));

  todoStore.map((todo) => {
    const li = document.createElement("li");
    li.innerText = todo;

    const container = document.querySelector("#list-container");
    return container.appendChild(li);
  });
}

// ==================== check ketika pertama kali website di buka, apakah ada key: theme dan value: dark di storage
document.querySelector("form").addEventListener("submit", (ev) => {
  ev.preventDefault();
  const userInput = document.querySelector("input").value;

  const li = document.createElement("li");
  li.innerText = userInput;

  todos.push(userInput);

  localStorage.setItem("todo", JSON.stringify(todos));

  const container = document.querySelector("#list-container");
  container.appendChild(li);
});

/* 
  Conclucion:
  JSON.parse -> ubah string ke object 
  JSON.stringify -> ubah apapun ke string JSON
*/
