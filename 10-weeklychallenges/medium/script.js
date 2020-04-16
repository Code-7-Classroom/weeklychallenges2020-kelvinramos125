let array = [1, 3, 5, 2, 9, 4];

const avgNumber = () =>{
    let sum = array.reduce(function (a, b) {
        return a + b;
    }, 0);
    console.log(array);
    console.log(`The total sum of the array is: ${sum}`);
    console.log(`The average of the array is: ${sum/array.length}`);
}

avgNumber();


let array2 = [1, 3, 5, 2, 10, 4];

const avgNumber2 = () =>{
    let sum = array2.reduce(function (a, b) {
        return a + b;
    }, 0);
    console.log(array);
    console.log(`The total sum of the array is: ${sum}`);
    console.log(`The average of the array is: ${(sum/array2.length).toFixed(2)}`);
}

avgNumber2();