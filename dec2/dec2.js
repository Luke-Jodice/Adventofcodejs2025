// Using fs (File System) module to read a text file
const fs = require('fs');

// Read the file synchronously (blocks until file is read)
const data = fs.readFileSync('dec2.txt', 'utf8');

// Split into lines (if needed)
const idrange = data.split(',').filter(line => line.trim() !== '');


  function hasSameConsecutiveCharsout(str) {
    const valuestr = str.toString();
    const left = valuestr.slice(0,valuestr.length/2);
    const right = valuestr.slice(valuestr.length/2);
    // console.log(left===right)

    return left === right;
  }

let idxtoadd = []
//loop through all of the combinations
for(var i = 0; i<idrange.length; i++)
{
//Split the start and the end combination up
let start = parseInt(idrange[i].slice(0,idrange[i].indexOf('-')));
let end = parseInt(idrange[i].slice(idrange[i].indexOf('-')+1));


    //this will loop over all values in between start and end
    for(var j=start; j<=end; j++){
      // console.log(j)
      if(hasSameConsecutiveCharsout(j.toString())){
        idxtoadd.push(j);
      }
    }
    //     //j is the actual number
    //     let char = j.toString().charAt(0);
    //     console.log(char)
    //     let seq = []
    //     for(var k=1; k<j.length; k++){
    //         //meaning that the character is found in the number add it to the list to be added
    //         if(char==j.charAt(k)){
    //             idxtoadd.push(j)
    //         }
    //     }
}
// console.log(idxtoadd)
let sum = 0;

for(var x of idxtoadd){
    sum=sum+x;
}
console.log(sum)