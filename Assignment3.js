const prompt = require('prompt-sync')();
let score = Number(prompt('Enter the score:'))

//if-else
if(score >= 90){
    grade ='A';
}
else if(score >= 80){
     grade ='B';
}
else if(score >= 70){
     grade ='C';
}
else if(score >= 60){
     grade ='D';
}
else if(score >= 50){
     grade ='E';
}
else {
     grade ='F';
}

//switch

switch(grade){
    case "A": console.log("Excellent!");
              break;
    case "B": console.log("Better");
              break;
    case "C": console.log("Good");
              break;
    case "D": console.log("Average");
              break;
    case "E": console.log("Needs Improvement");
              break;
    case "F": console.log("Failed.");
              break;
}

//Ternary Operator
let status = score >=50? "Passed": "Failed";

console.log("Score:", score);
console.log("Grade:", grade);
console.log("Status:", status);

