let discount: number;
let itemCount = 11;

if (itemCount > 20 ) {
    discount = 5;  // 5% discount
} else if(itemCount > 50){
    discount = 10; // 10% discount 
} else if (itemCount > 10) {
    discount = 15; // 15%
} 
else {
    throw new Error('The number of items cannot be negative!');
}

console.log(`You got ${discount}% discount. `)