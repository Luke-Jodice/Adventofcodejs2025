const fs = require("fs");

// Read the file synchronously (blocks until file is read)
// const data = fs.readFileSync("dec6.txt", "utf8");
const data = fs.readFileSync("dec7.txt", "utf8");

// Split into lines (if needed)
const lines = data.split("\n").filter((line) => line.trim() !== "");

function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

function replaceDotWithPipeAtIndex(lines, lineIndex, charIndex) {
  if (lineIndex >= 0 && lineIndex < lines.length) {
    const line = lines[lineIndex];
    if (charIndex >= 0 && charIndex < line.length) {
      if (line.charAt(charIndex) === ".") {
        lines[lineIndex] = setCharAt(line, charIndex, "|");
      }
    }
  }
}

function cascadeBeams(lines) {
  // Track which ^ positions have been counted as splits (to avoid double counting)
  const countedSplits = new Set();
  let changed = true;
  
  while (changed) {
    changed = false;
    for (var i = 2; i < lines.length; i++) {
      const currentLine = lines[i];
      const prevLine = lines[i - 1];
      
      // Check if current line has only "." characters (and possibly "^")
      const hasOnlyDotsAndCaret = currentLine.split('').every(char => char === '.' || char === '^');
      
      if (hasOnlyDotsAndCaret) {
        // Copy "|" positions from previous line to current line
        for (var j = 0; j < prevLine.length; j++) {
          if (prevLine.charAt(j) === "|" && currentLine.charAt(j) === ".") {
            replaceDotWithPipeAtIndex(lines, i, j);
            changed = true;
          }
        }
        // If we made a change, restart from the beginning
        if (changed) {
          break;
        }
      }
      
      // Original logic: handle "^" characters with "|" above them
      for (var j = 0; j < lines[i].length; j++) {
        // Always read the current state directly from the array
        if (lines[i].charAt(j) == "^" && lines[i - 1].charAt(j) == "|") {
          // Create a unique key for this split position
          const splitKey = `${i},${j}`;
          
          // Count this split once when beam hits the ^ (regardless of whether pipes need placing)
          if (!countedSplits.has(splitKey)) {
            countedSplits.add(splitKey);
          }
          
          // Check positions j-1 and j+1 on current line (read current state)
          const before = lines[i].charAt(j - 1);
          const after = lines[i].charAt(j + 1);
          
          // Place pipes if needed
          if (before === ".") {
            replaceDotWithPipeAtIndex(lines, i, j - 1);
            changed = true;
          }
          if (after === ".") {
            replaceDotWithPipeAtIndex(lines, i, j + 1);
            changed = true;
          }
        }
      }
      // If we made a change, restart from the beginning
      if (changed) {
        break;
      }
    }
  }
  return countedSplits.size;
}

let beams = [];

for (var i = 0; i < lines[0].length; i++) {
  if (lines[0].charAt(i) == "S") {
    replaceDotWithPipeAtIndex(lines, 1, i); //starting off the downwards
  }
}

const splitCount = cascadeBeams(lines);
console.log("Total splits:", splitCount);

// Previous implementation (commented out):
// for (var i = 2; i < lines.length; i++) {
//     for (var j = 0; j < lines[i].length; j++) {
//         if(lines[i].charAt(j)=='^' && lines[i-1].charAt(j)=='|'){
//             replaceDotWithPipeAtIndex(lines, i, j-1)
//             replaceDotWithPipeAtIndex(lines, i, j+1)
//         }
//     }
//     console.log(lines[i])
// }


//   for (var i = 2; i < lines.length; i++) {
//     console.log(lines[i])
//     //for each Line Also Skip first line so that we can look back on it
//     let prevline = lines[i - 1];
//       for (var j = 0; j < lines[i].length; j++) {
//         //each character on the line
//         //What kind of character is this?
//         if(prevline.charAt(j)=='^'){ //if the char in the prev line was a ^ then the char before this and the char after will be replaced
//             replaceDotWithPipeAtIndex(lines,i,j-1);
//             replaceDotWithPipeAtIndex(lines,i,j+1);
//         }

//       }
//   }

console.log(lines);
