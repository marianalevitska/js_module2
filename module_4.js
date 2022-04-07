// Колбек-функція
function greet(name) {
    console.log(`Ласкаво просимо ${name}.`);
}

// Функція вищого порядку
function registerGuest(name, callback) {
    console.log(`Реєструємо гостя ${name}.`);
    callback(name);
}

registerGuest("Манго", greet);



