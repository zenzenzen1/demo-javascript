let arr = [1, 2, 3, 4, 2, 5, 4, 10, 3];
var i = 0;
let z = 1;
for (var i = 0; i < arr.length; i++) {
    const element = arr[i];
    let z = 10000;
    
    // console.log(element);
}

// let z = 10;
i = 1;
console.log("i", i = i++ + 1); console.log(i)
console.log("z", z);

// for (const iterator of arr) {
//     console.log(iterator.valueOf());
// }

var obj = {
    name: "abc",
    address: "VN"
}

// for (const key in obj) {
//     console.log(key);
// }
i = 0;
do {
    i++;
    console.log(i);
} while (i != 2);


for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    if(e === 4){
        continue;
    }
    console.log(i, e);
}

