// var Converter = {
//   toAscii: function (hex) {
//     let str = ""
//     for(let i = 0; i < hex.length; i = i + 2) str += String.fromCharCode(parseInt(hex.slice(i,i + 2), 16))
//     return str
//   },
//   toHex: function (ascii) {
//     return ascii.split("").map( x => x.charCodeAt().toString(16)).join("")
//   }
// }

const Converter = {
  toAscii : hex =>
    hex.replace(/.{2}/g, val => String.fromCharCode(parseInt(val, 16))),
  toHex: ascii =>
    ascii.replace(/./g, val => val.charCodeAt().toString(16))
};

console.log(Converter.toHex("Look mom, no hands"))
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
console.log(Converter.toAscii("4c6f6f6b206d6f6d2c206e6f2068616e6473"))