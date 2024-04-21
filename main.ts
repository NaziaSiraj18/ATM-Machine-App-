#! /usr/bin/env node

import inquirer from "inquirer";

// Initialize user balance and pin code
let myBalance = 10000; //Dollar
let myPin = 1234;

//Print welcome message
console.log("Welcome to codeWithNazia -ATM Machine")
let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            type: "number",
            message: "Enter your pin"
        }
    ]
);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code !!!");


    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                type: "list",
                message: "Please select option",
                choices: ["withdraw", "checkBalance", "fastCash"]
            }
        ]
    );
    console.log(operationAns);

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: " amount",
                    type: "number",
                    message: "Enter your amount to withdraw"
                }
            ]
        );
        if (amountAns.amount > myBalance) {
            console.log("insufficient Balance")
        } else if (myBalance -= amountAns.amount) {
            console.log("your remaining balance is:" + myBalance);
        }
    };
    if (operationAns.operation === "checkBalance") {
        console.log("your balance is:" + myBalance);
    }
    if (operationAns.operation === "fastCash") {
        let cash = await inquirer.prompt(
            [
                {
                    name: "option",
                    type: "list",
                    message: "select any amount",
                    choices: ["1000", "3000", "6000", "8000"],
                }
            ]
        );
        if (myBalance -= cash.option) {
            console.log("your remaining amount is:" + myBalance);
        }
    }
} else {
            console.log("your pin code is incorrect")
        }