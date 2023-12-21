// Вам необхідно намалювати в консолі прямокутний трикутник із зірочок (або плюсиків, або якогось іншого символу):
// на першому рядку - одна зірочка, на другій дві, і так далі. 
//Рішення оформіть у вигляді функції, куди передаються два параметри: 
//висота трикутника та символ, яким його потрібно "малювати".

// Якось так:

// drawTriangle(5, *);

// ﻿*

// **

// ***

// ****

// *****
let star = '*';
    for (let j = 0 ; j < 5; j++){
       console.log(star);
       star += "*"; 
    }


function drowTriangle( i , isSymbol){

    let star = isSymbol;
    for (let j = 0 ; j < i; j++){
       console.log(star);
       star += isSymbol; 
    }

}

drowTriangle(5, "*");

//Вивести на екран суму чисел від 1 до 100 включно, які не кратні 3.

let sum = 0;

 for (let i = 1; i <= 100; i++ ){
        if(i % 3 == 0) continue;
        sum += i;
    } 
    console.log("Результат" + sum ); 


    // Написати функцію pow(x,y) яка буде приймати 2 числа, 
    // перше це число яке ми будемо зводити у ступінь, друге у яку ступінь.
    function pow( number, stypin){
        let numb = number;
        for (let i = 0; i <= stypin; i++){
            numb *=numb;
        }
        return numb;
    }
  
    pow(2,3);

