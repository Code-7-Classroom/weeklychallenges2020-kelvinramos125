var nums = [2, 7, 11, 15, 9];

function finder(target){
  for (var i = 0; i<nums.length; i++){
    if(nums[i] == target){
        console.log("Target, " + target + "'s position is: "+ nums.indexOf(target))
    }
    else{
      console.log("Target, " + target + "'s position is: "+ nums.indexOf(target));
    }
  }
}

console.log(nums);
finder(9);
finder(1);

