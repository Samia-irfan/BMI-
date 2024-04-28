#! /usr/bin/env node 
import inquirer from "inquirer";
const BMi = await inquirer.prompt([
    {
        message: "Enter your height in cm:",
        type: "number",
        name: "height"
    },
    {
        message: "Enter your weight in Kg:",
        type: "number",
        name: "weight"
    }
]);
let height = BMi.weight / (BMi.height / 100) ** 2;
console.log(`your BMI is ${height}`);
if (BMi.height <= 0) {
    console.log("Please enter a valid number.");
}
if (BMi.height <= 0) {
    console.log("Please enter a valid number.");
}
