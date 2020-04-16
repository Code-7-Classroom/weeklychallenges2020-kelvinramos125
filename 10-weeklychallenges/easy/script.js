const maxNumber = (array) =>{
    console.log(array);
    let max = Math.max(...array);
    return console.log(`Max number is: ${max}`);
}

maxNumber([1, 3, 5, 2, 9, 4]);

maxNumber([-1, 0, -5, -2, -10]);