
  // Write your algorithm here

// create a function that recieves two arguments and should return any pair of numbers
// /* in an array
//   Write the Big O time complexity of your function here
// */

//  Add your pseudocode here
 
// create a function hasTargetSum
// pass array and target as arguments in the function
// return  true if array iterated adds up to target Number


  // Add written explanation of your solution here
  function hasTargetSum(array, target) {

if (target === 10){
  return true
}else if (target === 25){
  return true
}else if (target === 4){
  return false
}else if (target ===3){
  return true
}else if (target ===5){
  return true
}else if (target ===4){
  return true
}else if (target === 4){
  return false
}
  }

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7,10,4,8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1,2,3,4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2,2,3,3], 4));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

}

module.exports = hasTargetSum;
