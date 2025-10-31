console.error('Додаємо/Редагуємо/Видаляємо розробників в секції "Наша команда"');

//! Знаходимо необхідні елементи
const addDeveloperButton = document.querySelector(".our-developers__add-button");
const developersList = document.querySelector(".our-developers-list");

//! Додаємо слухачів до знайдених елементів
addDeveloperButton.addEventListener("click", addDeveloper);
developersList.addEventListener("click", editDeleteDeveloper);

//! Функція ДОДАЄ нових розробників
function addDeveloper() {
    console.log("ДОДАЄМО нового розробника");
};

//! Функція РЕДАГУЄ/ВИДАЛЯЄ розробників
function editDeleteDeveloper(event) {
    console.log("РЕДАГУЄМО/ВИДАЛЯЄМО розробників");
    console.log("event.target", event.target);
};