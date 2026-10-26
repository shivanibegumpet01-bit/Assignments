//standard function with default parameters
function calculateArea(length =5, width = 4){
    return length * width;
}

console.log("Standard function Area (Default 5x4):", calculateArea());

//Arrow Function

const calculateAreaArrow = (length =5, width = 4) =>{
     return length * width;
}
console.log("Arrow function Area  (Default 5x4):", calculateAreaArrow());

//Demonstrating block scope 
try{
    if(true){
        let blockVar = "I am inside the block";
    }
    console.log(blockVar);
}catch(error){
    console.log("Scope Test Error:",error.toString());
}