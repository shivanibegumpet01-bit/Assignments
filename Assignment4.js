const prompt = require('prompt-sync')();

//Multiplication Table upto 5 using for loop
const table = Number(prompt("Enter the multiplication table:"));


console.log("--Multiplication Table upto 5--");
for (let i = 1;i <+ 5; i++){
    console.log(`${table} x ${i} = ${table*i}`);
}

//Find a number greater than 10 and divisible by 6
console.log("\n --First Numbergreater than 10 and divisible by 6 --");
let num = 1;
while (true){
    if(num >10 && num%6 == 0){
        console.log("Found",num);
        break;
    }
    num++;
}

//Do while loop using continue
console.log("\n--Do while Loop using continue--");
let count = 0;

do{
    count++;
    if(count === 3){
        continue;
    }
    console.log("Number:",count);

}while(count < 5);

