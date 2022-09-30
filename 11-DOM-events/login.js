let loginForm = document.querySelector("#sign-in")
let inputUsername = document.querySelector('#username')
let inputPassword = document.querySelector('#password')

let user = {
  username: "auzan",
  password: "123"
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault()

  let userLogin = {
    username: inputUsername.value,
    password: inputPassword.value
  }

  console.log(userLogin);

  let login = userLogin.username == user.username && 
              userLogin.password == user.password;

  if (login) {
    console.log("selamat anda berhasil login")
  } else {
    console.log("username dan password anda salah");
  }
    
  // Membersihkan form
  // cara 1
  loginForm.reset()

  // cara 2
  // inputUsername.value = ""
  // inputPassword.value = ""

  // console.log("ini dari form yg di submit");
})

