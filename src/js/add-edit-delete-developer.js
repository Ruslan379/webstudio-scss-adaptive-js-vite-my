console.error('Додаємо/Редагуємо/Видаляємо розробників в секції "Наша команда"');

//! Зчитуємо дані з Локального сховища (localStorage) та Парсимо (конвертуємо) їх в Масив Об'єктів: dataDevelopersList
const dataDevelopersList = JSON.parse(localStorage.getItem("data")); //todo: var. 2
console.log("dataDevelopersList (після парсингу з localStorage):", dataDevelopersList); //!

//! Знаходимо необхідні елементи
const addDeveloperButton = document.querySelector(".our-developers__add-button");
const developersList = document.querySelector(".our-developers-list");
//todo: Модальне вікно та Форма: form-add-edit-developer
const modalAddEditDeveloper = document.querySelector("[data-modal-add-edit-developer]");
const formAddEditDeveloper = document.querySelector(".form-add-edit-developer");
const formTitle = document.querySelector(".form-add-edit-developer__title");
const imageDeveloper = document.querySelector(".form-add-edit-developer__image-developer");
//todo: Кнопки модальних вікон
const btnAddEditDeveloper = document.querySelector(".form-add-edit-developer__btn-add-edit-developer");
const btnDeleteDeveloper = document.querySelector("[data-btn-delete-developer]");
const btnCancelDeveloper = document.querySelector("[data-btn-cancel-developer]");

//! Початкові дані 
let editableCard = {}; //todo-new: Какртка розробника, що редагується


//! ++++++++++++=+++++++++++ Додаємо слухачів до знайдених елементів ++++++++++++++=+++++++++
addDeveloperButton.addEventListener("click", addDeveloper);
developersList.addEventListener("click", editDeleteDeveloper);
btnCancelDeveloper.addEventListener("click", closeModalAddEditDeveloper);
//todo: Підтвердження форм
formAddEditDeveloper.addEventListener("submit", editModalAddEditDeveloper);
//! =========================================================================================


//! Функція ВІДКРИТТЯ/ЗАКРИТТЯ модального вікна з формою для ДОДАВАННЯ/РЕДАГУВАННЯ/+ВИДАЛЕННЯ
function toggleModalAddEditDeveloper() {
    console.log("ВІДКРИТТЯ/ЗАКРИТТЯ модального вікна з формою для ДОДАВАННЯ/РЕДАГУВАННЯ/ВИДАЛЕННЯ");
    modalAddEditDeveloper.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
};


//! Функція реагує на кнопку <Скасувати> - очищує поля форми та закривє модальне вікно з формою для ДОДАВАННЯ/РЕДАГУВАННЯ/+ВИДАЛЕННЯ
function closeModalAddEditDeveloper() {
    imageDeveloper.src = "";
    imageDeveloper.alt = "";
    formAddEditDeveloper.reset();
    toggleModalAddEditDeveloper();
};


//! Функція ДОДАЄ нову картку розробника
function addDeveloper() {
    console.log("ДОДАЄМО нового розробника");
    
    //todo: Зміна контенту заголовка модального вікна
    formTitle.textContent = "Додати розробника";

    //todo: ОЧИЩАЄМО дані зображення розробника
    imageDeveloper.src = "";
    imageDeveloper.alt = "";

    //todo: Зміна контенту кнопки "submit"
    btnAddEditDeveloper.textContent = "Додати";

    //todo: Приховуємо непотрібні елементи
    btnDeleteDeveloper.style.display = "none";

    ///todo: ВІДКРИИВАЄМО модальне вікно з формою для ДОДАВАННЯ/РЕДАГУВАННЯ/+ВИДАЛЕННЯ
    toggleModalAddEditDeveloper();
};


//! Функція РЕДАГУЄ/+ВИДАЛЯЄ картку розробника
function editDeleteDeveloper(event) {
    if (event.target.nodeName !== "IMG") {
        return;
    };
    console.log("РЕДАГУЄМО/ВИДАЛЯЄМО розробників");
    // console.log("event.target", event.target);
    // console.log("event.currentTarget:", event.currentTarget);
    // console.log("event.target.nodeName", event.target.nodeName);

    //todo: Зміна контенту заголовка модального вікна
    formTitle.textContent = "Редагувати дані розробника"

    //todo: Зміна контенту кнопки "submit"
    btnAddEditDeveloper.textContent = "Редагувати";

    //todo: Повертаємо елементи:
    btnDeleteDeveloper.style.display = "block";

    //todo: Пошук картки розробника, що редагується в Масиві Об'єктів всіх розробників
    console.log("event.target.alt", event.target.alt); //!
    for (let i = 0; i < dataDevelopersList.length; i++) {
        if (dataDevelopersList[i].nameId === event.target.alt) {
            editableCard = dataDevelopersList[i];
            console.log("editableCard:", editableCard);  //todo-new: Какртка розробника, що редагується
        };
    };

    //todo: Підставляємо ПОПЕРЕДНІ дані картки розробника editableCard у форму для РЕДАГУВАННЯ
    formAddEditDeveloper.developerName.value = editableCard.name;
    formAddEditDeveloper.position.value = editableCard.position;
    imageDeveloper.src = editableCard.images.default;
    imageDeveloper.alt = editableCard.nameId;

    //todo: ВІДКРИВАЄМО модальне вікно з формою для РЕДАГУВАННЯ/ВИДАЛЕННЯ
    toggleModalAddEditDeveloper();
};


//! Функція реагує на кнопку <ДОДАТИ> або <Редагувати>- змінює/додає картку розробника в формі для ДОДАВАННЯ/РЕДАГУВАННЯ/+ВИДАЛЕННЯ
function editModalAddEditDeveloper(event) {
    event.preventDefault();
    console.log("Створюємо новий об'єкт КАРТКИ РОЗРОБНИКА");
    // //todo: var.1 Створюємо новий об'єкт КАРТКИ РОЗРОБНИКА
    // // const newComment = {
    // //     timeId: Date.now(),
    // //     name: postFormInputComment.name.value.trim(),
    // //     comment: postFormInputComment.comment.value.trim(),
    // //     date: localeUkDate,
    // // };

    // //todo: var.2 Створюємо новий об'єкт КАРТКИ РОЗРОБНИКА
    // const formData = new FormData(postFormInputComment);
    // const createNewComment = Object.fromEntries(formData.entries());
    // // console.log("createNewComment:", createNewComment); //!
    // const newComment = { timeId, ...createNewComment, date: localeUkDate };

    //todo: ОЧИЩАЄМО поля форми для РЕДАГУВАННЯ/ВИДАЛЕННЯ
    formAddEditDeveloper.reset();
    //todo: ЗАКРИВАЄМО модальне вікно з формою для РЕДАГУВАННЯ/ВИДАЛЕННЯ
    toggleModalAddEditDeveloper();
};
