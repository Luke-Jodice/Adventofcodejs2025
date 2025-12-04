// Using fs (File System) module to read a text file
const fs = require("fs");

// Read the file synchronously (blocks until file is read)
const data = fs.readFileSync("dec3.txt", "utf8");

// Split into lines (if needed)
const battery = data.split("\n").filter((line) => line.trim() !== "");



function partone(lines) {
let nums = [];
  //loops over the lines
  for (var i = 0; i < lines.length; i++) {
    let highest = Number.MIN_SAFE_INTEGER;
    let largestnumber = Number.MIN_SAFE_INTEGER;
    let idxoffirst = -1;
    //Itterate over the selected line
    for (var j = 0; j < lines[i].length; j++) {
      // find the highest number
      // enter the index of this number
      if (highest < parseInt(lines[i].charAt(j))) {
        highest = parseInt(lines[i].charAt(j));
        idxoffirst = j;
      }
    }
    // //iterate over the selected line once more
    // for (var k = 0; k < lines[i].length; k++) {
    //   //if it is not the highest number index and it is still higher than the value, set it as that value
    //   // find the highest number
    //   // enter the index of this number
    //   if (secondhighest < parseInt(lines[i].charAt(k)) && k !== idxoffirst) {
    //     secondhighest = parseInt(lines[i].charAt(k));
    //     idxofsecond = k;
    //   }
    // }

    //finding the largest number that can be made using the first large number
    for (var k = lines[i].length; k >= 0; k--) {
       if(k>idxoffirst && k!==idxoffirst){
        largestnumber = Math.max(largestnumber,parseInt(lines[i].charAt(idxoffirst)+""+lines[i].charAt(k)))
       }
       else if(k<idxoffirst && k!==idxoffirst){
        largestnumber = Math.max(largestnumber,parseInt(lines[i].charAt(k)+""+lines[i].charAt(idxoffirst)))
       }
    }

    nums.push(largestnumber);
    //push the volatage as one number to an array
    //num+""+num2
    //idx that is less would need to be pushed to be first
   
    // if(idxofsecond<idxoffirst){ //this means the number would be num @ k+""+ num @ idxoffirst
    //     nums.push(parseInt(lines[i].charAt(idxofsecond)+""+lines[i].charAt(idxoffirst)))
    // }
    // else{
    //     nums.push(parseInt(lines[i].charAt(idxoffirst)+""+lines[i].charAt(idxofsecond)))
    // }
   

  }
  console.log(nums)
let sum = 0;
  for(var m=0; m<nums.length; m++){
    sum = sum + nums[m];
  }
  console.log(sum)
}

partone(battery);
