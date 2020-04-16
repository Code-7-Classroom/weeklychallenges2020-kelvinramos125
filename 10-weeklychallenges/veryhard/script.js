let array = []

const letterUsed = (string) => {
    console.log(`Input: ${string}`);
for (let i = 0; i < string.length; i++){
    let count = 0;
    for (let j = 0; j < string.length; j++){
        if (string[j].toLocaleLowerCase() === string[i].toLocaleLowerCase()){
            count++;
        }
    }
    
        if (count === 1){
            array.push(string[i])
            console.log(`Output: ${array[0]}`);
        }
            counter = 0;
    }
    
    array = [];
}

letterUsed('Javascript');
letterUsed('Banana');
letterUsed('Mom');
letterUsed('the quick brown fox jumps over the calm kitten quietly');

