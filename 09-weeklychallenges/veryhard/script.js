// var amount = 11;
// var coins = [1, 2, 5];
// function medium(amount, coins) {
// var coinCount, left, coinTotal;
// var coinTotal = 0;
// coins = coins.sort((a,b)=>a-b).reverse();
//    for (var i = 0; i < coins.length; i++) {
//        coinCount = math.floor(amount / coins[i]);
//        coinTotal += coinCount;
//        amount = amount - (coinCount * coins[i]);
//    }
//     if (amount !==0) {
//       return -1;
//     } else {
//         return coinTotal;
//      }
// }
// medium()

var amount = 11;
var coins = [1, 2, 5];
var max = Math.max.apply(null,coins);

function totalAmount(total, num){
  return total + num;
}

function equation(){
  var sumTotal = coins.reduce(totalAmount);
  var result = amount - sumTotal;
  console.log("Output = " + result);

  if (max > result){
  console.log("Explanation: "+ coins[0] + " + " + (coins[1] + result) +
  " + " +coins[2] + " = " + amount);
  }
  else{
    console.log(-1);
  }
}
console.log(coins);
console.log("Amount = " + amount);
equation();