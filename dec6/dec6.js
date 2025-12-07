const fs = require("fs");

// Read the file synchronously (blocks until file is read)
// const data = fs.readFileSync("dec6.txt", "utf8");
const data = fs.readFileSync("dec6.txt", "utf8");

// Split into lines (if needed)
const lines = data.split("\n").filter((line) => line.trim() !== "");

//seperating them from the input
const line1 = lines[0];
const line2 = lines[1];
const line3 = lines[2];
const line4 = lines[3]; // added for final as there are four lines
const computationline = lines[4];

// This now splits these valus into individual values
const line1new = line1.split(" ").filter((number) => number.trim() !=="");
const line2new = line2.split(" ").filter((number) => number.trim() !=="");
const line3new = line3.split(" ").filter((number) => number.trim() !=="");
const line4new = line4.split(" ").filter((number) => number.trim() !=="");
const computationnew = computationline.split(" ").filter((number) => number.trim() !=="");

function partone(data) {
  let total = 0;

  for (var i = 0; i < line1new.length; i++) {

    let num1 = parseInt(line1new[i]);
    let num2 = parseInt(line2new[i]);
    let num3 = parseInt(line3new[i]);
    let num4 = parseInt(line4new[i]);
    // console.log(num1,num2,num3,num4,computationnew,total)
    
    if (computationnew[i] == '+') {//This is the addition
        console.log(total);
        total = total + (num1+num2+num3+num4)
    }
    else if(computationnew[i] == '*'){
        let multvalue = num1*num2*num3*num4;
        total = total + multvalue;
  }
}

console.log(total)
}

partone(lines);

