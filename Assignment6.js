//Creating an array of product objects
const products = [
    {name:"Laptop",price: 800},
    {name:"Keyboard",price: 45},
    {name:"Mouse",price: 25},
]

//Displaying all products using forEach()
console.log("--All Products--");
products.forEach(function(product){
    console.log(`Item: ${product.name} - Price: $${product.price}`);

});

//Filter products priced below $50
console.log("\n-- Filtered Products (Price < $50) --");

const filetredProducts = products.filter(function(product){
    return product.price < 50;
});
console.log(filetredProducts);

//Create formatted product tags using map()
console.log("\n-- Mapped Product Tags (map)--");

const productTags = products.map(function(product){
    return `${product.name.toUpperCase()} costs $${product.price}`;
});

console.log(productTags);


