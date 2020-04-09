var orgAmount = prompt("Enter the amount you are trying to get:");
var amount = orgAmount;
var coins = [1, 2, 5];
var sumTotal = coins.reduce(totalAmount);
var result = orgAmount - sumTotal;

function totalAmount(total, num){
  return total + num;
}
  function newTotal(){
    var output = "Explanation: " + orgAmount + " = ";
    var sortedCoins = coins.sort((a, b) => b-a);

    //loops over each coin
    //loops to 5, 5 goes in to 11 twice
    //loops in 2, goes to 1/2 which = .5, not a whole number then = 0
    //loops in 1, goes in to 1/1 = 1
    for (var count = 0; count < sortedCoins.length; count++){
      var coinCount = Math.floor(orgAmount / sortedCoins[count]);

      //loops over number of coins
      //loops 2 times for 5 and subtracts orgAmount by 5*2 = 1
      //loops in for 2 zero times since it didn't resulted in a whole number
      //loops in 1 for 1/1, subtract 1 from orgAmount after being subtracted by 2*5
      //which equals 0 and works
      for (var count2 = 0; count2 < coinCount; count2++){
        orgAmount -= sortedCoins[count];
        output += sortedCoins[count] + " + ";

      }
    }
    //if loop for orgAmount = 3 and array holds 2 alone
    //first loop, 2 goes in once in 3
    //second loop, orgAmount - 2 = 1; since amount didn't = 0 it shows -1
    if (orgAmount != 0){
      console.log(-1);
    }
    else{
    console.log(coins);
    console.log("Output: " + result)
    console.log("Amount = " + amount);
    console.log(output.substr(0,output.length - 2));
    }
  }

  newTotal();

  // console.log("Explanation: "+ coins[0] + " + " + (coins[1] + result) +
  // " + " +coins[2] + " = " + amount);

  // console.log(coins);
  // console.log("Amount = " + amount);
  // function equation(){
  //   var sumTotal = coins.reduce(totalAmount);
  //   var result = amount - sumTotal;
  //   var quarterCounter = 0;
  //   var dimeCounter = 0;
  //   var nickleCounter = 0;
  //   var penniesCounter = 0;

  //   console.log("Output = " + result);

  //   //quaters
  //   while (amount >= 25){
  //     amount = amount-25;
  //     quarterCounter++;
  //   }
  //   // console.log(result);
  //   // console.log(quarterCounter);

  //   //dimes
  //   while (amount >= 10){
  //     amount = amount-10;
  //     dimeCounter++;
  //   }

  // //nickles
  //   while (amount >= 5){
  //     amount = amount-5;
  //     nicleCounter++;
  //   }

  //   //pennies
  //   while (amount >= 1){
  //     amount = amount-1;
  //     penniesCounter++;
  //   }

  //   //Explanation: 11 = 5 + 5 + 1
  //     var output = "Explanation: " + orgAmount + " = ";
  //     for (var count = 0; count < quarterCounter; count++){
  //       output += "25 + ";
  //     }
  //     for (var count = 0; count < dimeCounter; count++){
  //       output += "10 + ";
  //     }
  //     for (var count = 0; count < nickleCounter; count++){
  //       output += "5 + ";
  //     }
  //     for (var count = 0; count < penniesCounter; count++){
  //       output += "1 + ";
  //     }
  //     console.log(output.substr(0, output.length - 2));
  // }
  // equation();