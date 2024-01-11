// ДЗ 1 Без Аа

// Напишіть регулярний вираз, який допоможе знайти принаймні шість символів і не містити літери А (великої або малої)

// Умови виконання ДЗ

// Не використовувати функції або інші матеріали які ми не вивчали
// Намагайтесь робити ДЗ самостійно та не дивитися будь-які підказки
// Будь ласка, надайте наступні дані для перевірки вашої роботи:

// Створіть гілку js_homework7.
// Додати туди ваше домашнє завдання
// Вислати вашу гілку

let str = "nhfja ktauiKy sd2";
let re = /[^Aa]{6,}/g;
console.log(re.test(str));
console.log(str.search(re));
console.log(str.match(re));



// В нас є масив об'єктів в яких міститься email.
// У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.

// За допомогою регулярного виразу створіть масив з адресами, гідними довіри. 
// Постарайтеся також зробити просту валідацію до @

// - одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.


var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
function checkValidEmail(array){
        let arrResult= [];
        let reg = /^(\w+\.?\w+)(@(gmail|yahoo)\.com)$/;
    for(let i = 0; i < array.length ; i++){
        
        if(reg.test(array[i].email)){

            arrResult.push(array[i]);

        }
        }
        return arrResult;

};
console.log(checkValidEmail(arr));

