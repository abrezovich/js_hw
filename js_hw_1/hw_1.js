'use strict';
////*****1 */
const name = 'Генератор защитного поля';
let price = 1000;
let message = `Выбран ${name}, цена за штуку ${price} кредитов`;
console.log(message);
/////****2 */
const total = 100;
let ordered = 130;

if (total > ordered) { 
    message = "Заказ оформлен,  с Вами свяжется менеджер";    
} else{message = "На складе недостаточно товаров";
    };
console.log(message);    
////****3 */
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
/////****4 */
const credits = 23580;
const pricePerDroid = 3000;
input = prompt('Введите количество дроидов');


