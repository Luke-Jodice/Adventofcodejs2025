const fs = require("fs");

// Read the file synchronously (blocks until file is read)
const data = fs.readFileSync("dec5.txt", "utf8");

// Split into lines (if needed)
const lines = data.split("\n").filter((line) => line.trim() !== "");

let numgoodfoods = 0;

const ranges = lines.filter((line) => line.includes("-"));
// console.log(ranges);
const ingredients = lines.filter((line) => !line.includes("-"));
// console.log(ingredients);


for (var i = 0; i < ingredients.length; i++) {
  //looping through all of the ingredients
  let isgood = false;
  let ingredientnum = parseInt(ingredients[i]);
  for (var j = 0; j < ranges.length; j++) {
    let endings = ranges[j].split("-");
    let start = parseInt(endings[0]);
    let end = parseInt(endings[1]);
        // console.log({start,end,ingredientnum})
        if(ingredientnum>=start){
            // console.log("Larger than start")
            if(ingredientnum<=end){
                // console.log("cool")
                isgood = true;
            }
        }
    }
    if(isgood){
        numgoodfoods++;
    }
}

// for(var i = 0; i<lines.length; i++){
//     for(var j = 0; j<ingredients.length; j++){
//         if(lines[i].includes("-")){
//             let endings = lines[i].split('-');
//             let start = parseInt(endings[0]);
//             let end = parseInt(endings[1]);
//             if(ingredients[j]>=start && ingredients<=end){
//                 goodingredient.push(ingredients[j])
//                 break;
//             }
//         }
//     }
// }

// for(var i = 0; i < ranges.length; i++){
//    let endings = ranges[i].split('-');
//    let start = parseInt(endings[0]);
//    let end = parseInt(endings[1]);
// //    console.log(endings)
//    for(var j = start; j<=end; j++){ //loop through ranges to add them to all numbers
//         rangenumbers.push(j);
//    }
// }
console.log(numgoodfoods);

//loop through ingriedients
//if that number is in the range then add one to numgoodfoods
