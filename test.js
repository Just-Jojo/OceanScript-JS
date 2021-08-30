const { encode, decode } = require("./scr/oceanscript/ocs");

const vari = encode("Hello World");
console.log(vari);
console.log(decode(vari))