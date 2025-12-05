// Using fs (File System) module to read a text file
const fs = require("fs");

// Read the file synchronously (blocks until file is read)
const data = fs.readFileSync("dec4.txt", "utf8");

// Split into lines (if needed)
const paper = data.split("\n").filter((line) => line.trim() !== "");

let numpapercollected = 0;
let numpapercollected2 = 0;

function isThreeAdjacentorless(x, y, maxX,maxY) {
let numpaper = 0 
 if((x!=0 || x!=maxX) && (y!=0 || y!=maxY)){ //Middle of the board
    for(var mx = -1; mx<2; mx++){
        for(var my= -1; my<2; my++){
            // let s = paper[x+mx].toString
            if(String(paper[x+mx]).charAt(y+my)=='@'){
                numpaper++;
            }
        }
    }
 }
else if(x==0 && y==0) {//top corner left
    if(paper[x+1].charAt(y)=='@'){
        numpaper++;
    }
    if(paper[x+1].charAt(y-1)=='@'){
        numpaper++;
    }
    if(paper[x].charAt(y-1)=='@'){
        numpaper++;
    }
}
else if(x==maxX && y==0){//top corner right
    if(paper[x-1].charAt(y)=='@'){
        numpaper++;
    }
    if(paper[x-1].charAt(y-1)=='@'){
        numpaper++;
    }
    if(paper[x].charAt(y-1)=='@'){
        numpaper++;
    }
}
else if (x==0 && y==maxY){//bottom corner left
    if(paper[x+1].charAt(y)=='@'){
        numpaper++;
    }
    if(paper[x+1].charAt(y+1)=='@'){
        numpaper++;
    }
    if(paper[x].charAt(y+1)=='@'){
        numpaper++;
    }
}
else if(x==maxX && y==maxY){//bottom corner right
    if(paper[x].charAt(y+1)=='@'){
        numpaper++;
    }
    if(paper[x-1].charAt(y+1)=='@'){
        numpaper++;
    }
    if(paper[x-1].charAt(y)=='@'){
        numpaper++;
    }
}
else if(x==0 && (y>0 && y<maxY)){//leftside
    if(paper[x].charAt(y+1)=='@'){
        numpaper++;
    }
    if(paper[x+1].charAt(y+1)=='@'){
        numpaper++;
    }
    if(paper[x+1].charAt(y)=='@'){
        numpaper++;
    }
    if(paper[x-1].charAt(y-1)=='@'){
        numpaper++;
    }
    if(paper[x].charAt(y-1)=='@'){
        numpaper++;
    }
}
else if(x==maxX && (y>0 && y<maxY)){//rightside
    if(paper[x].charAt(y+1)=='@'){
        numpaper++;
    }
    if(paper[x-1].charAt(y+1)=='@'){
        numpaper++;
    }
    if(paper[x-1].charAt(y)=='@'){
        numpaper++;
    }
    if(paper[x-1].charAt(y-1)=='@'){
        numpaper++;
    }
    if(paper[x].charAt(y-1)=='@'){
        numpaper++;
    }
}
else if(y==0){//top
    if(paper[x+1].charAt(y)=='@'){
        numpaper++;
    }
    if(paper[x+1].charAt(y-1)=='@'){
        numpaper++;
    }
    if(paper[x].charAt(y-1)=='@'){
        numpaper++;
    }
    if(paper[x-1].charAt(y-1)=='@'){
        numpaper++;
    }
    if(paper[x-1].charAt(y)=='@'){
        numpaper++;
    }
}
else if(y==maxY){//bottom
    if(paper[x-1].charAt(y)=='@'){
        numpaper++;
    }
    if(paper[x-1].charAt(y+1)=='@'){
        numpaper++;
    }
    if(paper[x].charAt(y+1)=='@'){
        numpaper++;
    }
    if(paper[x+1].charAt(y+1)=='@'){
        numpaper++;
    }
    if(paper[x+1].charAt(y)=='@'){
        numpaper++;
    }
}

 if(numpaper>4){
    return false;
 }
 else{
    return true;
 }
}
function isThreeAdjacentorless2(x, y, maxX, maxY) {
    let numpaper = 0;
    
    // All 8 possible neighbor directions: [dx, dy]
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],  // top row
        [0, -1],           [0, 1],   // middle row (skip [0,0] - current cell)
        [1, -1],  [1, 0],  [1, 1]    // bottom row
    ];
    
    // Check each neighbor direction
    for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        
        // Bounds checking: ensure neighbor is within grid
        if (nx >= 0 && nx < maxX && ny >= 0 && ny < maxY) {
            if (paper[nx].charAt(ny) === '@') {
                numpaper++;
            }
        }
    }
    
    // Return true if 3 or fewer adjacent '@' characters
    return numpaper <= 3;
}


//build out array
const arr = [];
for (let i = 0; i < paper.length; i++) {
  arr[i] = []; // Initialize an empty array for each row
  for (let j = 0; j < paper[i].length; j++) {
    arr[i][j] = paper[i][j]; // Fill each column with the specified value
  }
}
//arr[LEFT-Right][UP-Down]


//iterate over each element calling numadjacent
for (let i = 0; i < paper.length; i++) {
  for (let j = 0; j < paper[i].length; j++) {
    if(isThreeAdjacentorless(i,j,paper.length, paper[i].length) && paper[i].charAt(j)=='@'){
        numpapercollected++;
    }
    if(isThreeAdjacentorless2(i,j,paper.length, paper[i].length) && paper[i].charAt(j)=='@'){
        numpapercollected2++;
    }
  }
}
console.log(numpapercollected);
console.log(numpapercollected2);