console.log("callback demo");
var z = 0;
function sum(a, b, abc){
    let s = a + b;
    
    let i = 0;
    let timer = setInterval(() => {
        abc(s);
        i++;
        if(i == 5){
            clearInterval(timer);
        }
    }, 1000);
    
}
console.log("z", z);
let print = (message) => {
    console.log("sum = " + message);
}

function sayHello(){
    console.log("Hello");
}

sum(3, 2, (sum) => {console.log(sum + 100)});
// sum(2, 1, sayHello);



console.log("End");