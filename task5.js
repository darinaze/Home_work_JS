// ДЗ1

// Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію). 
//Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
//Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта. 

// Наприклад так:

// obj.getInfo(); // Правильна інформація про об'єкт
// obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
// obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.

let studioGibli = {
    cartoonName : "Мій сусід Тоторо",
    date : "16 квітня 1988 р.",
    genre : "Аніме",

    getInfo(){
        let values = Object.entries(this);
        console.log(values);
        }
}

  studioGibli.ageRestrictions = '12+';
  studioGibli.getInfo();

// ДЗ2 Сума вартості послуг

//  Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:

// var services = {

// 	"стрижка": "60 грн",

// 	"гоління": "80 грн",

// 	"Миття голови": "100 грн"

// };

// "Послуги" можуть додаватися по ходу роботи:

// services['Розбити скло'] = "200 грн";

// Умови виконання ДЗ

// створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
// створити метод minPrice() - який повертає мінімальний price
// створити метод maxPrice() - який повертає максимальний price
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    price(){
    let sum = 0;
    for (let posluga in this){
        if( posluga !== "price" && posluga !== "minPrice" && posluga !== "maxPrice"){
            sum += parseInt(this[posluga]);
        }
    }
    console.log("сума послуг: " + sum);
    },

    minPrice(){
        let min;
        for (let minPrice in this){
            if( minPrice !== "price" && minPrice !== "minPrice" && minPrice !== "maxPrice"){
                if(!min){
                    min = parseInt(this[minPrice]);
                }
                let getMinNumber = Math.min(min,parseInt(this[minPrice]));
                min = getMinNumber;
            }
        }
        console.log("мінімальна вартість послуги: " + min);
    },

    maxPrice(){
        let max;
        for (let maxPrice in this){
            if( maxPrice !== "price" && maxPrice !== "minPrice" && maxPrice !== "maxPrice"){
                if(!max){
                    max = parseInt(this[maxPrice]);
                }
                let getMaxNumber = Math.max(max,parseInt(this[maxPrice]));
                max = getMaxNumber;
            }
        }
        console.log("максимальна вартість послуги: " + max);
    },


}
services["укладка"] = "150 грн";
services.price();
services.minPrice();
services.maxPrice();