// ДЗ 1
//Написати свою реалізацію функції isNaN
function checkIfNumber(value){
    if (typeof value === 'number') {
        return false;
    } else {
        return true
    }
}

checkIfNumber(5);

// ДЗ 2

// Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, 8, true), 
//яка приймає чотири аргументи:

// рядок, до якого буде додаватися символ.
// символ, який буде додаватися.
// Скільки додавати символів
// булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
// Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте значення 6, 
//то додаєте тільки один символ
// Умови виконання ДЗ

// Функція повинна повертати новий рядок
function pad(str, addedSymbol, quantity, position){
    let newString = '';

    if (str.lenght < quantity){
        for (let i = 0; i < quantity; i++ ){
            newString += addedSymbol;
        }
    } else {
        newString += addedSymbol;
    }

    if (position){
        return newString + str;
    } else {
        return str + newString
    }
}
pad('test','=',5,false);


// ДЗ 3

// Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно. 
//Порахувати кількість парних та непарних серед них. 
//Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? 
//Приклад функції checkProbabilityTheory(count). Параметр count буде вказувати скільки разів буде генеруватися випадкове число.

// Умови виконання ДЗ

// Функція виводить інформацію
// Кількість згенерованих чисел: кількість чисел
// Парних чисел: кількість парних чисел
// Не парних чисел: кількість не парних чисел
// Відсоток парних до не парних: 

function checkProbabilityTheory(count){
    let randomNum;
    const min = 100;
    const max = 1000;
    let evenNumber = 0;
    let oddNumber = 0;
    let persentEven;
    let persentOdd;

    for (let i = 0; i < count; i++) {
        randomNum = min + Math.round(Math.random() * (max + 1 - min));

        if (randomNum % 2 == 0){
           evenNumber += 1;
        }
        else {
            oddNumber += 1;
        }
    }
    
    persentEven = Math.round(evenNumber * 100/count);
    persentOdd = 100 - persentEven;


    return ("Кількість згенерованих чисел: кількість чисел :" + count + "\n" + "Парних чисел: " + evenNumber + "\n" + "Не парних чисел: " + oddNumber + "\n" + "Відсоток парних до не парних: " + persentEven + " % " + persentOdd);
}