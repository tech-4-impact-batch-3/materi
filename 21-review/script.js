let url = "https://63478a450484786c6e82998f.mockapi.io/healthy-food";

async function getFood() {
  let response = await fetch(url);
  let result = await response.json();

  console.log(result);

  result.forEach((item) => {
    console.log(item);
  });
}

getFood();

let hasilDariTMDB = {
  status: 200,
  url: "http://tmdb....",
  result: [
    { id: 1, title: "spiderman" },
    { id: 2, title: "thor" },
    { id: 3, title: "wakanda" },
  ],
};

console.log(hasilDariTMDB.result);

async function searchMovies() {
  let response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=c0fe8ebdd2569d69e8b36b0670f41038&query=${input.value}&page=1`
  );
  let result = await response.json();

  console.log(result)
}

// get data movies
// 1. ambil data movie pakai fetch
// 2. coba tampilin datanya di console
// 3. loop datanya, lalu tampilkan per item di console
// 4. tampilkan data item menggunnakan DOM

// pencarian movies
// 1. buat text input dan button cari
// 2. ambil elementnya pakai DOM
// 3. tombol cari dikasih event click
// 4. event click tombol cari menjalankan perintah mirip seperti get data movies
