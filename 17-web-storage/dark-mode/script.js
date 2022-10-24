const toggleBtn = document.getElementById("toggle");

// cek ketika pertama kali web di jalankan apakah tema di localStorage itu dark atau bukan
if (localStorage.getItem("theme") === "dark") {
  // tambahkan class dark dan buat input checkbox ke trigger
  document.body.classList.add("dark");
  toggleBtn.checked = true;
} else {
  // hapus class dark
  document.body.classList.remove("dark");
}

// ketika tombol di tekan maka lakukan: jika tema saat ini light, ubah ke dark. begitu sebaliknya
document.getElementById("toggle").onclick = () => {
  // hapus tema dari localStorage jika sebelumnya sudah ada
  if (localStorage.getItem("theme")) {
    localStorage.removeItem("theme");
    document.body.classList.remove("dark");
  } else {
    // tambahkan tema ke localStorage jika sebelumnya belum ada
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
  }
};
