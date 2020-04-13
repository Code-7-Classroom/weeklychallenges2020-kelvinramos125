// const me = (name)=>{
//     this.name = "Kelvin Melendez";
// }
// console.log(name);

// const sayHi = ()=>{
//     console.log(`Hi, ${name}`);
// }

// sayHi();

let me = {
    name: "Kelvin Melendez",
    sayHi: ()=>{
        console.log(`Hi, ${name}`);
    }
}
console.log(me.name);
console.log(me.sayHi());