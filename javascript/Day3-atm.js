let choice=2;
let balance= 10000;
let withdraw= 3000;
let deposit =5000;
switch(choice){
    case 1:
        console.log(`The current Balce is ${balance}`);
        break
    case 2:
        console.log("Deposit SUccessful");
        console.log(`New Balance: ${balance+deposit}`);
        break
    case 3:
        if (balance >= withdraw){
            console.log("Withdrawal Successful");
            console.log(`Remaining Balance: ${balance-withdraw}`);
        }else{
            console.log("Insufficient Balance");
        }
        break
    case 4:
        console.log("Thank you for visiting ATM");
        break;
    default:
        console.log("Invalid Choice");
}