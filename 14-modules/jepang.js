import {apple} from './amerika.js';
console.log(apple);

let motor = ["suzuki", "yamaha", "honda", "kawasaki"]
const smartPhone = ["sony", "samsung", "fujitsu", "LG"]

let dokumenNegara = "Hello"

export function sayHello() {
  console.log("hallooo")
}
let entertainment = ["anime", "manga", "wibu", "dorama"]

// kita dapat melakukan export pada variabel, function, class
// "export" dapat melakukan banyak export
// "export" di tangkap (import) menggunakan kurung kurawal
// "export default" cuma bisa 1 aja yg di export
// "export default" ditangkap tanpa kurung kurawal
export { motor, smartPhone as smartPhoneJepang}
export default entertainment