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

console.log(arr.map(t => (t.name + "")));
console.log(arr.map(t => t.age).reduce((prev, curr, index) => {
    console.log("prev: ", prev + " curr: ", curr + " index: ", index);
    return (prev * (index + 1) + curr) / (index + 2);
}, 1));

arr = [[1, 2], [3, 4], [6, 2, 6, 3, 10, 3]];
flatArr = arr.reduce((prev, curr) => {
    return prev.concat(curr);
}, []);
console.log(flatArr);

let i = 0;
console.log(arr.flat().sort((a, b) => {
    i++;
    return a - b;
}));
console.log(i);
