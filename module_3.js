// //------------FIRST----------------//

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "john";
// let message;

// for (const client of clients) {
//     // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//     // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//     // про успіх і робимо break, щоб далі не шукати
//     if (client === clientNameToFind) {
//         message = "Клієнт з таким ім'ям є в базі даних!";
//         break;
//     }

//     // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//     message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"


// //---------------SECOND---------------//

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < threshold) {
//         continue;
//     }

//     console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }


//------------THIRD----------------------------//

// // Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//     console.log(`${fruit} is a red fruit!`);
// } else {
//     console.log(`${fruit} is not a red fruit!`);
// }

// ------------------Number four---------------//

// const colors = ["red", "green", "blue"];

// colors.splice(0, 0, "pink");
// console.log(colors); // ["red", "green", "purple", "blue"]

// ------------------Number five---------------//
// (Напиши функцію filterArray(numbers, value), яка приймає масив чисел(параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value(число).)
// function filterArray(numbers, value) {
//     // Change code below this line
//     const filter = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > value) {
//             filter.push(numbers[i]);
//         }

//     }
//     return filter;

//     // Change code above this line
// }

// let filter = filterArray([12, 24, 8, 41, 76], 38);
// console.log(filter);

// //--------------------------NUMBER SIX---------------------------//

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.
// function getCommonElements(array1, array2) {
//     // Change code below this line
//     const result = [];
//     for (let value of array1) {
//         if (array2.includes(value)) {
//             result.push(value);
//         }

//     }
//     return result;

//     // Change code above this line
// }

// //--------------------------NUMBER Seven---------------------------//
// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту.Функція шукає об'єкт продукту з таким ім'ям(властивість name) в масиві products і повертає його ціну(властивість price).Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     // Change code below this line

//     for (const product of products) {
//         if (productName === product.name) {
//             return product.price;
//         }
//     }
//     return null;

//     // Change code above this line
// }


// //--------------------------NUMBER EIGHT---------------------------//
// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line
//     const arrow = [];
//     for (const product of products) {
//         if (Object.keys(product).includes(propName)) {
//             arrow.push(product[propName]);
//         }
//     }
//     return arrow;

//     // Change code above this line
// }


// //--------------------------NUMBER NINE---------------------------//

// Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь - яку кількість аргументів, рахувала і повертала їх суму.
// Change code below this line
// function add(...args) {
//     let total = 0;
//     for (const result of args) {
//         total += result;
//     }
//     return total;
//     // Change code above this line
// }

// //--------------------------NUMBER TEN---------------------------//

// Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName у властивості books.Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.
// у slice() 1-що заміняємо, 2- куди ставимо, 3- на що заміняємо
// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//         // Change code below this line
//         const bookIndex = this.books.indexOf(oldName);
//         this.books.splice(bookIndex, 1, newName);


//         // Change code above this line
//     },
// };


// //--------------------------NUMBER ELEVEN---------------------------//


// Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName в кінець масиву зілля у властивості potions.

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//         // Change code below this line

//         this.potions.push(potionName);

//         // Change code above this line
//     },
// };



// //--------------------------NUMBER TWELVE---------------------------//

// Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//         // Change code below this line
//         const remove = this.potions.indexOf(potionName);
//         this.potions.splice(remove, 1)


//         // Change code above this line
//     },
// };

// -----------------------------NUMBER THIRTEEN---------------------

// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//         // Change code below this line
//         const update = this.potions.indexOf(oldName);
//         this.potions.splice(update, 1, newName);

//         // Change code above this line
//     },
// };

// !!!!!!!!!! -----------------final one----------------!!!!!!!!!!!!!
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.
//
// getPotions() - метод для отримання всього зілля.Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion(вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.

// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         for (const potion of this.potions) {
//             if (newPotion.name === potion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//         this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//         const { potions } = this;
//         for (let i = 0; i < potions.length; i += 1) {
//             const potion = potions[i];
//             if (potionName === potion.name) {
//                 potions.splice(i, 1);
//             }
//         }
//         return `Potion ${potionName} is not in inventory!`;
//     },
//     updatePotionName(oldName, newName) {
//         for (potion of this.potions) {
//             const { name } = potion;
//             if (name === oldName) {
//                 potion.name = newName;
//                 return;
//             }
//         }
//         return `Potion ${oldName} is not in inventory!`;
//     },
//     // Change code above this line
// };
