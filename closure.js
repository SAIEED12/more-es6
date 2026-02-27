function outerfunction(){
    function innerfunction(){
        console.log("inner-function")
    }
    return innerfunction; //return the function, NOT call it
}

const output = outerfunction()
// output();
// console.log('Outside',output);

function counter(owner) {
    let count = 0;
    function increment() {
        count++
        console.log('value of counter',owner, count);
    }
    return increment;
}

// const count1 = counter();
// count1();
// count1();
// count1();

const xCounter = counter('x');
xCounter();
xCounter();
xCounter();
xCounter();

const yCounter = counter('y');
yCounter();
yCounter();
yCounter();



function createBankAccount(initialBalance) {
let balance = initialBalance;

return {
        deposit(amount) {
            balance += amount;  
            console.log(balance);
        },
        withdraw(amount) {
            balance -= amount;
            console.log(balance);
        }
    };
}

const account = createBankAccount(100);

account.deposit(50);// 150
account.withdraw(30);// 120