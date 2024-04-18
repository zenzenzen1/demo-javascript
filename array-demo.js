console.log("array-demo");
let arr = ["a", "b", "c"];

console.log(arr.push("d"));
arr.unshift(1);

console.log(arr);

// array of objects
arr = [{name: "nxt", age: 18}, {name: "ThanhMv", age: 20}];
console.log(arr);

arr = [2, 5, 2, 6, 2, 1, {name: "Nxt", age: 19}];
let filter = arr.filter((item, index, a) => {
    !isNaN(item);
    return item instanceof Object;
});
console.log(filter);

arr = [
    {name: "Nxt", age: 22},
    {name: "abc", age: 29},
    {name: "ThanhMV", age: 20},
    {name: "zz", age: 5}
];

filter = arr.filter((value, index) => {
    return value.age >= 22;
});
console.log(filter);

console.log(arr.find((t) => {
    console.log(t.name);
    return (t.name + "").startsWith("N");
}));