#! /usr/bin/env node

//SHABANG
import inquirer from 'inquirer';

const answer = await inquirer.prompt([
    {
        message: "enter first number",
        type: "number", name: "firstNumber"
    },
    {
        message: " enter second number",
        type: "number", name: "secondNumber"
    },
{
        message: " select one of the operator to perform operation",
        type: "list", name: "operator",
        choices: ["addition", "subtraction", "multiplication", "dividion"]
    }
])
//conditional Statement

if (answer.operator === "addition") { console.log(answer.firstNumber + answer.secondNumber); }
else if (answer.operator === "subtraction") { console.log(answer.firstNumber - answer.secondNumber); }
else if (answer.operator === "mutiplication") { console.log(answer.firstNumber * answer.secondNumber); }
else if (answer.operator === "division") { console.log(answer.firstNumber / answer.secondNumber); }
else { console.log("please select valid operator") }