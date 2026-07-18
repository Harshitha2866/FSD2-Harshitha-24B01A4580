//1. Traditional Named Function (The "Full Form")
//Full Form: function functionName(parameters): returnType { body }
function calculateFinalPriceTraditional(price: number, discount: number): number {
    return price - (price * discount);
}

//2. Arrow Function (The Concise Form)
//This is the same logic as above but using the => (fat arrow) syntax.
const calculateFinalPriceArrow = (price: number, discount: number): number => {
    return price - (price * discount);
}

//3. Shorthand Arrow Function
//If the function only has one line, we can omit 'return' and the curly braces {}.
const getStoreMessage = (store: string): string => `Welcome to ${store} Shopping Mall!`;

//TESTING PROGRAM
const productPrice: number = 2000; // Price in rupees
const discountRate: number = 0.20; // 20% Discount
console.log(getStoreMessage("City Center"));

//Using the traditional method
const finalPrice1 = calculateFinalPriceTraditional(productPrice, discountRate);
console.log(`Final Price (Traditional): ${finalPrice1} rupees`);

//Using the arrow function method
const finalPrice2 = calculateFinalPriceArrow(productPrice, discountRate);
console.log(`Final Price (Arrow): ${finalPrice2} rupees`);