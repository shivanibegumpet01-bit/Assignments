const prompt = require("prompt-sync")();

//Interactive Product Inventory &Analytics
//1.Initializing the inventory
console.log("--Initializing Inventory System--");
const inventory = [
    {name:"Laptop",price: 800},
    {name:"Keyboard",price: 45},
    {name:"Mouse",price: 25},
];

//2. Get product details from the user
let productName = prompt("Enter the new product name:");
let productPrice = Number(prompt("Enter the product price:"));

//3. Validate User Input
if(productName !== null && productName.trim() !=="" && 
        Number.isFinite(productPrice) && productPrice >=0){
            //Add the new product to inventory
            inventory.push({
                name : productName.trim(),
                price : productPrice
            });

            console.log(`[Prompt Executed: User adds "${productName.trim()}" at "${productPrice}"]`);

}else{
    console.log("Invalid product name or price. Product not added.");
}

//4. Function to determine product category
function getCategory(price){
    if(price < 100){
        return "Budget";
    } else if(price < 500){
        return "Standard";
    }else{
        return "Premium";
    }
}

//5.Process the inventory using forEach()
console.log("\n--Processing Inventory Roster (forEach)--");

inventory.forEach(function(product){
    product.category = getCategory(product.price);
    console.log(`* Item: ${product.name} ($${product.price}) -> Category: ${product.category}`);
});
//6. Calculate total Inventory value
const calTotalValue = (items) =>{
    let total = 0;
    for (let i = 0;i< items.length;i++){
        total += items[i].price;
    }
    return total;
}

//7. Calculate Tax using an arrow function
const calculateTax =(amount,taxRate = 0.10) =>{
    return amount* taxRate;
}
//8. Display financial analystics
console.log("\n-- Financial Analystics--");
const totalValue = calTotalValue(inventory);
console.log(`Total Inventory Value: $${totalValue}`);

const tax =calculateTax(totalValue);
console.log(`Estimated Tax(10%): $${tax}`);

//9. Filter affordable products
const affordableItems = inventory.filter(function(product){
    return product.price < 200;
});
const affordableNames = affordableItems.map(function(product){
    return product.name;
});

console.log("Filtered Affordable Items(Under $200):", JSON.stringify(affordableNames));

//10. Generating a formatted report
const formattedReport = inventory.map(function(product){
    return `${product.name.toUpperCase()}: $${product.price}`;
});
console.log("Formatted Report List:", JSON.stringify(formattedReport));






