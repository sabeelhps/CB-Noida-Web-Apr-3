

class Bank{
    constructor() {
        this.accounts = [];
    }

    createAccount(name, accType, intialAmount) {
        const randomAccNumber = Math.floor(Math.random() * 10000);
        this.accounts.push({ name, accType, intialAmount, randomAccNumber });
        console.log(`Conrats! ${name}! You account has been created successfully!`)
        console.log(`You account number is : ${randomAccNumber}`);
    }

}

const bank = new Bank();
bank.createAccount('Kartik', 'saving', 100);
bank.createAccount('Vivek', 'current', 200);
bank.createAccount('Garvit', 'saving', 300);
