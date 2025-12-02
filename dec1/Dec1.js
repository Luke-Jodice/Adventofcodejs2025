// Using fs (File System) module to read a text file
const fs = require('fs');

// Read the file synchronously (blocks until file is read)
const data = fs.readFileSync('dec1.txt', 'utf8');

// Split into lines (if needed)
const lines = data.split('\n').filter(line => line.trim() !== '');

let loc = 50; //starts at 50
let numnotches = 0; //will increase when loc is zero

console.log('Total lines:', lines.length);

for(var i=0; i<lines.length; i++){
    const direction = lines[i].charAt(0);
    let amount = parseInt(lines[i].slice(1)); // Convert string to number

    if(direction=='L'){
        amount = amount*-1;
    }
    else if(direction=='R'){
        amount = Math.abs(amount);
    }
    
    loc = (loc + amount) % 100;
    
    // Handle negative modulo (JavaScript % can return negative)
    if(loc < 0){
        loc = loc + 100;
    }
    
    // Check if loc is 0 AFTER updating it
    if(loc==0){
        numnotches++;
    }

}
console.log("It clicked this many times:")
console.log(numnotches)

