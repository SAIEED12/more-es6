const numbers = [1,2,3,4,5]
// const doubled = [];
// for(const num of numbers){
//     doubled.push(num*2);
// }
// console.log(doubled);

const doubleIt = num => num * 2; //doubleIt is a function
// double = numbers.map(doubleIt); //numbers.map দিয়ে number এর প্রতিটা element কে ধরা হয় 
const doubled = numbers.map(num => num * 2)
console.log(doubled);

const products = [
    {name: 'laptop', price: 90000},
    {name: 'phone', price: 30000},
    {name: 'tablet', price: 50000},
];

const prices = products.map(pd=>pd.price)
console.log(prices);

const names = products.map((pd,index,productsArray) => {
    const upperCaseNames = pd.name.toUpperCase();
    console.log(index,upperCaseNames,productsArray)
    return upperCaseNames;
})

console.log(names);