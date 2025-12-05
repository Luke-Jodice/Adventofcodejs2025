// Using fs (File System) module to read a text file
const fs = require("fs");

// Read the file synchronously (blocks until file is read)
const data = fs.readFileSync("dec4.txt", "utf8");

// Split into lines (if needed)
const paper = data.split("\n").filter((line) => line.trim() !== "");

let numpapercollected = 0;

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
  }
}
console.log(numpapercollected);

