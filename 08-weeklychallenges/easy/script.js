var run = exercise('running');
var swim = exercise("swimming");

function exercise(value) {
    return function() {
        return "Today exercise: " + value;
    };

}

console.log(run());
console.log(swim());

// var nums = [2, 7, 11, 15];
// var target = 17;

// for (var i = 0 , j = 1 ; i < nums.length, j < nums.length; j++) {
//   if (nums[i] + nums[j] === target) {
//     console.log(nums[i] + " + " + nums[j] + " = " + target);
//   }
// }
//   else if (nums[i] + nums[j] !== target) {
//     for (var i = 1, j = 0; i < nums.length, j < nums.length; i++, j++) {
//       if (nums[i] + nums[j] == target) {
//         console.log(nums[i] + " + " + nums[j] + " = " + target);
//       }
//     }
// }
// }
//       else {
//         console.log("No matches");
//       }
//     }
//   } 
//   else {
//     console.log("No matches");
//   }

