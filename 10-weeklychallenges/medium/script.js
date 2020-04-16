let array = [];

const avgNumber = (array) =>{
    let sum = array.reduce(function (a, b) {
        return a + b;
    }, 0);
    console.log(array);
    console.log(`The total sum of the array is: ${sum}`);
    console.log(`The average of the array is: ${(sum/array.length).toFixed(2)}`);
}

avgNumber([1, 3, 5, 2, 9, 4]);

avgNumber([1, 3, 5, 2, 9, 4]);

avgNumber([2, 5]);