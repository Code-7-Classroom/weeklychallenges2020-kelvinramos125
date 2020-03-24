var tom = {
    fullName: 'Tom',
    mass: 8,
    height: 9,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var jerry = {
    fullName: 'Jerry',
    mass: .1,
    height: 3.94,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

tom.calcBMI();
jerry.calcBMI();
console.log(tom, jerry);

if(tom.bmi > jerry.bmi){
    tombmi = true;
    console.log("Tom's BMI is bigger than Jerry's " + tombmi);
}
else{
    tombmi = false;
    console.log("Jerry's BMI is bigger than Tom's " + tombmi);
}

// if(tom.bmi > jerry.bmi){
//     console.log("Tom's BMI is bigger than Jerry's");
// }
// else{
//     console.log("Jerry's BMI is bigger than Tom's");
// }


