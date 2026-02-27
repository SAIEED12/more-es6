const numbers = [1,2,3,4,5]
let sum = 0;
for(const num of numbers){
    sum += num;
}
const total = numbers.reduce((acc, num) => acc + num, 0); //0 is the initial value
console.log(total);