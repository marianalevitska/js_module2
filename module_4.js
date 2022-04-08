// // Колбек-функція
// function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
// }

// registerGuest("Манго", greet);

// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром(параметр callback) колбек - функцію і повертала її виклик.Функція deliverPizza або makePizza буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }


function registerGuest(name, callback) {
    console.log(`Реєструємо гостя ${name}.`);
    callback(name);
}

// Передаємо інлайн функцію greet у якості колбека
registerGuest("Манго", function greet(name) {
    console.log(`Ласкаво просимо ${name}.`);
});

// Передаємо інлайн функцію notify у якості колбека
registerGuest("Полі", function notify(name) {
    console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
});