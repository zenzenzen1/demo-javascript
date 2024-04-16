console.log("object-demo");
let human = {
    "name": "nxt",
    "age": 20,
    "dia chi": "VN",
    getName: function(){
        return this.name.toUpperCase();
    }
};
// change value of property
human.age = 100;
// add properties
human["abc"] = "zzz";
human["getAge"] = () => human.age;
human["gender"] = "Male";


console.log(human["name"], human.age, human["dia chi"] + human);
console.log(human);
console.log(human["abc"]);
// console.log("getAge", human["getAge"]());
console.log("getAge", human.getAge());
console.log("gender", human["gender"]);

