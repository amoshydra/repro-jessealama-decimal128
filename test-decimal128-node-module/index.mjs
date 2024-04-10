import { Decimal128 } from "decimal128";

console.log(new Decimal128("1234567890123456789012345678901234").toString())
console.log(new Decimal128("9999999999999999999999999999999999").toString())
console.log(new Decimal128(".9999999999999999999999999999999999").toString())
console.log(new Decimal128("." + "1234567890".repeat(1)).toString())
console.log(new Decimal128("." + "1234567890".repeat(2)).toString())
console.log(new Decimal128("." + "1234567890".repeat(3)).toString())
console.log(new Decimal128("." + "1234567890".repeat(4)).toString())
console.log(new Decimal128("." + "1234567890".repeat(5)).toString())