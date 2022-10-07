// ==================== check ketika pertama kali website di buka, apakah ada key: theme dan value: dark di storage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}

// ==================== check ketika pertama kali website di buka, apakah ada key: theme dan value: dark di storage
document.getElementById("toggle").onclick = () => {
  if (localStorage.getItem("theme")) {
    localStorage.removeItem("theme");
    document.body.classList.remove("dark");
  } else {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
  }
};
