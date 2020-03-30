var drinks = [];

drinks.push('water', 'coffee', 'tea');
console.log(drinks);

var foods = [];

foods.push('apples', 'sandwich', 'chips');
console.log(foods);

var meals = [drinks[0], drinks[1], drinks[2], foods[0], foods[1], foods[2]];
console.log(meals);

console.log(meals.reverse(drinks[0], drinks[1], drinks[2], foods[0], foods[1], foods[2]))