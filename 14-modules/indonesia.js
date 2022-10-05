// import dari file jepang dan amerika
import Entertainment, { motor as motorJepang, smartPhoneJepang, sayHello } from "./jepang.js"
import {apple} from './amerika.js';

sayHello()

console.log(Entertainment);
console.log(smartPhoneJepang);

console.log(motorJepang);

motorJepang.splice(1, 1)

console.log(motorJepang)
console.log(apple);