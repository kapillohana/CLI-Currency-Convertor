#!/usr/bin/env ts-node
import inquirer from "inquirer";
const currency = {
    USD: 1, //BASE CURRENCY
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let userAnswer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter Your Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: "Select the currency in which you want to convert",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'Amount',
        message: 'Enter the amount you want to convert',
        type: 'number',
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let Amount = userAnswer.Amount;
let baseAmount = Amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`Converted amount: ${convertedAmount.toFixed(2)}`);
let repeatAnswer = await inquirer.prompt([
    {
        name: "repeat",
        message: "Do you want to convert again?",
        type: "confirm",
    },
]);
if (repeatAnswer.repeat) {
    await userAnswer();
}
