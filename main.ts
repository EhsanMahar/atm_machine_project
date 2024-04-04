#!/usr/bin/env node
import inquirer from "inquirer";

let myBalance=5000;
let myPIN=12345;

//PRINT WELLCOME MESSAGE
console.log("Well-come to you, for coding with Ehsan Mahar-ATM_machine project");

let pinAnswer=await inquirer.prompt([
{
name:"pin",
type:"number",
message:"Enter you pin code?"
}

])
if(pinAnswer.pin===myPIN){
    console.log("Your pin code is correct, login succesfully");
    // console.log(`Your current Balance is: ${myBalance}`);
    let operationAns=await inquirer.prompt([
{
    name:"operation",
    type:"list",
    message:"select an operation",
    choices:["Withdraw","CheckBalance"]
}

    ]);
    if(operationAns.operation==="Withdraw"){
        let amountAns=await inquirer.prompt([
     {
        name:"amount",
        type:"number",
        message:"Enter the amount to withdraw",
     }

        ]);
        if(amountAns.amount>myBalance){
            console.log("Insufficient Balance");
            
        }
        else{
            myBalance-=amountAns.amount;
            console.log(`${amountAns.amount}withdraw Succesfully`);
            console.log(`Your remaining Account Balance is:${myBalance}`);
            
            
        }
    }
    else if(operationAns.operation==="CheckBalance"){
        console.log(`Your Account Balance is :${myBalance}`);
        
    }
}
else{
    console.log("Your pin code is Incorrect!");
    
}