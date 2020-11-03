'use strict';
////*****1 */
/*
const name = 'Генератор защитного поля';
let price = 1000;
let message = `Выбран ${name}, цена за штуку ${price} кредитов`;
console.log(message);
/////****2 
const total = 100;
let ordered = 130;

if (total > ordered) { 
    message = "Заказ оформлен,  с Вами свяжется менеджер";    
} else{message = "На складе недостаточно товаров";
    };
console.log(message);    
////****3 
const ADMIN_PASSWORD = 'jqueryismyjam';
let input = prompt("Введите пароль!");
switch (input) {
    case ADMIN_PASSWORD:
        message = "Добро пожаловать!";
        alert(message);
        break;
    case null:
        message = "Отменено пользователем!";   
        alert(message);
        break;
    default:
        message = "Доступ запрещен, неверный пароль!";   
        alert(message);
        break;
};
/////****4 
const credits = 23580;
const pricePerDroid = 3000;
input = prompt('Введите количество дроидов');
let totalPrice = Number(input) * pricePerDroid;
if (input === null) {
    console.log('Отменено пользователем!');
} else if (totalPrice < credits) {
    let currentBalance = credits - totalPrice;
    console.log(`Вы купили ${input} дроидов, на счету осталось ${currentBalance}  кредитов`);
} else{ console.log('Недостаточно средств на счету!');} 
/////*** 5 


let userInput = prompt('Введите страну доставки');
let userInputTLC = userInput.toLowerCase()
let userInputTUC = userInputTLC[0].toUpperCase();
let userInputSTR = userInputTUC + userInputTLC.slice(1);
let deliveryPrice;
switch(userInputSTR){
    case 'Китай':
        deliveryPrice = 100;
     alert(`Доствку в ${userInputSTR} будет стоить ${deliveryPrice}  кредитов`);
     break;
     case 'Чили':
        deliveryPrice = 250;
     alert(`Доствку в ${userInputSTR} будет стоить ${deliveryPrice}  кредитов`);
     break;
     case 'Австралия':
        deliveryPrice = 170;
     alert(`Доствку в ${userInputSTR} будет стоить ${deliveryPrice}  кредитов`);
     break;
     case 'Индия':
        deliveryPrice = 80;
     alert(`Доствку в ${userInputSTR} будет стоить ${deliveryPrice}  кредитов`);
     break;
     case 'Ямайка':
        deliveryPrice = 120;
     alert(`Доствку в ${userInputSTR} будет стоить ${deliveryPrice}  кредитов`);
     break;
     default:
     alert('В Вашей стране доставка недоступна');

}
//////***** 6    */

let input;
let total = 0;
//console.log(input);
let inputNumber;
//console.log(inputNumber);
while(input !== null){
    input = prompt("Введите число:");
    inputNumber = Number(input);
    total = total + inputNumber;
    console.log(total);
}
alert (`Общая сумма равна ${total}`)