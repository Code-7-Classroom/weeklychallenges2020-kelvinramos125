var Person = function (name, job, age) {
    Programmer.call(this, name, job, age);
    this.name = name;
    this.job = job;
    this.age = age;
    this.profession = function() {
        console.log(this.name +' is a ' + this.job);
    }
    this.exercise = function() {
        if(true){
         console.log(this.name + "Running is fun! - said no one ever");
        }
        else{
            console.log(this.name + "Running is fun! - said everyone");
        }
    }
}

var Programmer = function(language, busy) {
    this.language = 'javascript';
    this.busy = true;
    this.completeTask = function() {
        this.busy =false;
        if(this.busy == false){
        return this.name + 'is not busy';
        }
        else{
            return this.name + 'is busy';
        }
    }
    this.acceptNewTask = function() {
        this.busy = true;
        return this.name + ' is busy';
    }
    this.offerNewTask = function() {
        if(this.busy == true){
            return this.name + ' cannot accept any new tasks right now.'
        }
        else{
            return this.name + ' would love to take on a new responsibility.'
        }

    }
    this.learnLanguage = function(){
        this.language = ['javascript', 'java', 'node'];
        console.log(this.name + ' is learning these languages: ' + this.language);
    }

    this.listLanguage = function(){
        this.language = ['HTML', 'CSS', 'React', 'Python'];
        console.log(this.name + ' already knows these languages: '+ this.language);
    }
};
Person.prototype = Object.create(Programmer.prototype);
Person.prototype.constructor === Programmer;

var john = new Person('John ',' Front-end developer ', 24);
var mary = new Person('Mary ', ' Back-end developer ', 22);

john.exercise();
john.profession();
console.log(john.completeTask());
console.log(john.offerNewTask());
john.learnLanguage() + john.listLanguage();

console.log('-------------------------------------');

mary.exercise();
mary.profession();
console.log(mary.completeTask(true));
console.log(mary.offerNewTask());
console.log(mary.acceptNewTask());
mary.learnLanguage(['C#', 'C++', 'Java']) + john.listLanguage(['HTML', 'Google', 'Ruby', 'React']);