// string
let productName = "Tshirt";

// number
let price = 60;
let quantity = 2;

// boolean
let isAvailable = true;

// undefined
let discountCode;

// null
let expiredOffer = null;

// bigint
const stockId = 12345678912345678912345n;

// symbol
const productSymbol = Symbol("product");

// totalPrice
let totalPrice = price * quantity;

// console.log
console.log(productName, price, quantity, isAvailable);
console.log(totalPrice);
console.log(typeof discountCode);
console.log(expiredOffer, typeof expiredOffer);
console.log(typeof stockId);
console.log(typeof productSymbol);

console.log(
  `პროდუქტის სახელი: ${productName} , რაოდენობა: ${quantity} , ჯამური ფასი: ${totalPrice} ევრო. ხელმისაწვდომია: ${isAvailable}.`,
);

console.log(
  "პროდუქტის სახელი: " +
    productName +
    " , რაოდენობა: " +
    quantity +
    " , ჯამური ფასი: " +
    totalPrice +
    " ევრო. ხელმისაწვდომია: " +
    isAvailable +
    ".",
);
