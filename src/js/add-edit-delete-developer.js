console.error('Додаємо/Редагуємо/Видаляємо розробників в секції "Наша команда"');

//! Зчитуємо дані з Локального сховища (localStorage)
//! Парсимо (конвертуємо) дані отримані з Локального сховища (localStorage) в масив об'єктів dataDevelopersList
const dataDevelopersList = JSON.parse(localStorage.getItem("data")); //todo: var. 2
console.log("dataDevelopersList (після парсингу з localStorage):", dataDevelopersList); //!

//! Знаходимо необхідні елементи
const addDeveloperButton = document.querySelector(".our-developers__add-button");
const developersList = document.querySelector(".our-developers-list");
//todo: form-add-edit-developer
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


//! ======================= Додаємо слухачів до знайдених елементів =======================
addDeveloperButton.addEventListener("click", addDeveloper);
developersList.addEventListener("click", editDeleteDeveloper);
btnCancelDeveloper.addEventListener("click", closeModalAddEditDeveloper);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
    //! ВІДКРИИВАЄМО модальне вікно з формою для ДОДАВАННЯ/РЕДАГУВАННЯ/+ВИДАЛЕННЯ
    toggleModalAddEditDeveloper();

    //todo: Зміна контенту заголовка модального вікна
    formTitle.textContent = "Додати розробника"
    //todo: Зміна контенту кнопки "submit"
    btnAddEditDeveloper.textContent = "Додати"
    //todo: Приховуємо елементи:
    btnDeleteDeveloper.style.display = "none";
    
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

    //! ВІДКРИВАЄМО модальне вікно з формою для РЕДАГУВАННЯ/ВИДАЛЕННЯ
    toggleModalAddEditDeveloper();

    // //todo: var.1 Створюємо об'єкт КОМЕНТАРЯ
    // // const newComment = {
    // //     timeId: Date.now(),
    // //     name: postFormInputComment.name.value.trim(),
    // //     comment: postFormInputComment.comment.value.trim(),
    // //     date: localeUkDate,
    // // };

    // //todo: var.2 Створюємо об'єкт КОМЕНТАРЯ
    // const formData = new FormData(postFormInputComment);
    // const createNewComment = Object.fromEntries(formData.entries());
    // // console.log("createNewComment:", createNewComment); //!
    // const newComment = { timeId, ...createNewComment, date: localeUkDate };
};