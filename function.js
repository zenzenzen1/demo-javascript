console.log("function demo");

function sum(a, b){
    return a + b;
}

let sub = (a, b) => {
    return a - b;
}

var mul = function(a, b){
    return a * b;
}

let c = sum(2, 4);
console.log(c);
console.log(sub(2, 19));
console.log(mul(3, 5));

let obj = {
    name: "nxt",
    address: "VN",
    getName: function(){
        return this.name.substring(0, 1).toUpperCase() + this.name.substring(1);
    },
    // getName: () => this.name,
    age: 19
}
console.log(obj);
console.log("get name function: " + obj.getName());


