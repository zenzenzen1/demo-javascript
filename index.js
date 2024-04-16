console.log("Hello world from index.js");

let x;
x = "abc";
x = 1;
x = `a
aaa '"\``;
var y = "ab \'\"\\`" +
"c";
var d = {};
x = 1;
console.log(x + "\n" + y + " " + typeof y + " ");
console.log("typeof d", typeof d);
console.log("2", + "x = " + x + "\ny = " + y);
console.log("", + x );
console.log({a: "abc"} + "abc");

x = "abcd";
console.log(typeof x === "string");

// Empty, undefined, null
let a, b, c;
a = {};
console.log(a, b, c);
console.log(isNaN(a));
console.log()