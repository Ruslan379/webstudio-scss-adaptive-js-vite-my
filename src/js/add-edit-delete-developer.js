console.error('Додаємо/Редагуємо/Видаляємо розробників в секції "Наша команда"');

//! Знаходимо необхідні елементи
const addDeveloperButton = document.querySelector(".our-developers__add-button");
const developersList = document.querySelector(".our-developers-list");
const modalAddEditDeveloper = document.querySelector("[data-modal-add-edit-developer]");
const formTitle = document.querySelector(".form-add-edit-developer__title");

//todo: Кнопки модальних вікон
const btnAddEditDeveloper = document.querySelector(".form-add-edit-developer__btn-add-edit-developer");
const btnDeleteDeveloper = document.querySelector("[data-btn-delete-developer]");
const btnCancelDeveloper = document.querySelector("[data-btn-cancel-developer]");

//! Додаємо слухачів до знайдених елементів
addDeveloperButton.addEventListener("click", addDeveloper);
developersList.addEventListener("click", editDeleteDeveloper);
btnCancelDeveloper.addEventListener("click", toggleModalAddEditDeveloper);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//! Функція ВІДКРИТТЯ/ЗАКРИТТЯ модального вікна з формою для ДОДАВАННЯ/РЕДАГУВАННЯ/+ВИДАЛЕННЯ
function toggleModalAddEditDeveloper() {
    console.log("ВІДКРИТТЯ/ЗАКРИТТЯ модального вікна з формою для ДОДАВАННЯ/РЕДАГУВАННЯ/ВИДАЛЕННЯ");
    modalAddEditDeveloper.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
};

//! Функція ДОДАЄ нових розробників
function addDeveloper() {
    console.log("ДОДАЄМО нового розробника");
    //todo: ВІДКРИИВАЄМО модальне вікно з формою для ДОДАВАННЯ/РЕДАГУВАННЯ/+ВИДАЛЕННЯ
    toggleModalAddEditDeveloper();
    //todo: Зміна контенту заголовка модального вікна
    formTitle.textContent = "Додати розробника"
    //todo: Зміна контенту кнопки "submit"
    btnAddEditDeveloper.textContent = "Додати"
    //todo: Приховуємо елементи:
    btnDeleteDeveloper.style.display = "none";
    
};

//! Функція РЕДАГУЄ/+ВИДАЛЯЄ розробників
function editDeleteDeveloper(event) {
    if (event.target.nodeName !== "IMG") {
        return;
    };
    console.log("РЕДАГУЄМО/ВИДАЛЯЄМО розробників");
    // console.log("event.target", event.target);
    // console.log("event.currentTarget:", event.currentTarget);
    // console.log("event.target.nodeName", event.target.nodeName);

    //! ВІДКРИВАЄМО модальне вікно з формою для РЕДАГУВАННЯ/ВИДАЛЕННЯ
    toggleModalAddEditDeveloper();
    //todo: Зміна контенту заголовка модального вікна
    formTitle.textContent = "Редагувати дані розробника"
    //todo: Зміна контенту кнопки "submit"
    btnAddEditDeveloper.textContent = "Редагувати"
    //! Повертаємо елементи:
    btnDeleteDeveloper.style.display = "block";
};