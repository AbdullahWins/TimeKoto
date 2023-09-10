const { Timekoto } = require("./TimeKoto");

console.log("timestamp in seconds", Timekoto());
console.log("timestamp in seconds", Timekoto("s"));
console.log("timestamp in miliseconds", Timekoto("m"));
