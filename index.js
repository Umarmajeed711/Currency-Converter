#! /usr/bin/env node
// Currency Converter.
import inquirer from "inquirer";
let currency = {
    USD: 1, // Base Currency
    PKR: 278.3782,
    AED: 3.6725,
    EUR: 0.9214,
    INR: 83.2606,
    GBP: 0.7907,
    SAR: 3.7507,
    QAR: 3.6462,
};
let user_name = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "PKR", "INR", "AED", "GBP", "EUR", "QAR", "SAR",]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "PKR", "INR", "AED", "GBP", "EUR", "QAR", "SAR",]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
]);
let fromAmount = currency[user_name.from];
let toAmount = currency[user_name.to];
let amount = user_name.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount.toFixed(2));
