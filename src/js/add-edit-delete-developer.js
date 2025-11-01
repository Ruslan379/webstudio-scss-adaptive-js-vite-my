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
let editableCard = {}; //todo: Картка розробника, що редагується


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
            console.log("editableCard:", editableCard);  //todo: Картка розробника, що редагується
        };
    };

    //todo: Підставляємо ПОПЕРЕДНІ дані картки розробника editableCard у форму для РЕДАГУВАННЯ
    formAddEditDeveloper.developerName.value = editableCard.name;
    formAddEditDeveloper.developerPosition.value = editableCard.position;
    imageDeveloper.src = editableCard.images.default;
    imageDeveloper.alt = editableCard.nameId;

    //todo: ВІДКРИВАЄМО модальне вікно з формою для РЕДАГУВАННЯ/ВИДАЛЕННЯ
    toggleModalAddEditDeveloper();
};


//! Функція реагує на кнопку <ДОДАТИ> або <Редагувати>- змінює/додає картку розробника в формі для ДОДАВАННЯ/РЕДАГУВАННЯ/+ВИДАЛЕННЯ
function editModalAddEditDeveloper(event) {
    // event.preventDefault(); //todo: ❗️❗️❗️ Блокуємо перезавантаження сторінки
    console.log("Створюємо новий об'єкт КАРТКИ РОЗРОБНИКА");

    //todo: var.1 Створюємо новий об'єкт КАРТКИ РОЗРОБНИКА
    // const createNewDeveloper = {
    //     developerName: formAddEditDeveloper.developerName.value.trim(),
    //     developerPosition: formAddEditDeveloper.developerPosition.value.trim(),
    // };

    //todo: var.2 Створюємо новий об'єкт КАРТКИ РОЗРОБНИКА
    const formData = new FormData(formAddEditDeveloper);
    const newDeveloperData = Object.fromEntries(formData.entries());

    console.log("newDeveloperData:", newDeveloperData); //!

    //todo: Перевірка на функціонал <ДОДАТИ> або <Редагувати>
    //todo: ДОДАВАННЯ
    if (btnAddEditDeveloper.textContent === "Додати") {
        console.log("Режим ДОДАВАННЯ");

        //todo: Створюємо новий об'єкт КАРТКИ РОЗРОБНИКА
        const newDeveloperCard = {
            name: newDeveloperData.developerName,
            nameId: newDeveloperData.developerName,
            position: newDeveloperData.developerPosition,
            images: {
                desktop: [
                    new URL("../images/sample-desktop-1x.jpg", import.meta.url).href + " 1x,",
                    new URL("../images/sample-desktop-2x.jpg", import.meta.url).href + " 2x,",
                    new URL("../images/sample-desktop-3x.jpg", import.meta.url).href + " 3x"
                ],
                tablet: [
                    new URL("../images/sample-tablet-1x.jpg", import.meta.url).href + " 1x,",
                    new URL("../images/sample-tablet-2x.jpg", import.meta.url).href + " 2x,",
                    new URL("../images/sample-tablet-3x.jpg", import.meta.url).href + " 3x"
                ],
                mobile: [
                    new URL("../images/sample-mobile-1x.jpg", import.meta.url).href + " 1x,",
                    new URL("../images/sample-mobile-2x.jpg", import.meta.url).href + " 2x,",
                    new URL("../images/sample-mobile-3x.jpg", import.meta.url).href + " 3x"
                ],
                default: new URL("../images/sample-mobile-1x.jpg", import.meta.url).href
            },
            icons: [
                new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
                new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
                new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
                new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
            ]
        }

        //todo: Додаємо новий об'єкт КАРТКИ РОЗРОБНИКА в Масив Об'єктів: dataDevelopersList
        dataDevelopersList.push(newDeveloperCard);
        console.log("dataDevelopersList (після ДОДАВАННЯ нової КАРТКИ РОЗРОБНИКА):", dataDevelopersList); //!

        //todo: ПЕРЕЗАПИСУЄМО змінений dataDevelopersList в Локальне сховище (localStorage)
        localStorage.setItem("data", JSON.stringify(dataDevelopersList));
    };

    //todo: РЕДАГУВАННЯ
    if (btnAddEditDeveloper.textContent === "Редагувати") {
        console.log("Режим РЕДАГУВАННЯ");
        //todo: Пошук картки розробника, що редагується та заміна властивостей
        for (let i = 0; i < dataDevelopersList.length; i++) {
            if (editableCard.nameId === dataDevelopersList[i].nameId) {
                // console.log("editableCard_ДО:", dataDevelopersList[i]);  //todo: Картка розробника, що редагується - ДО
                dataDevelopersList[i].name = newDeveloperData.developerName;
                dataDevelopersList[i].position = newDeveloperData.developerPosition;
                // console.log("editableCard_ПІСЛЯ:", dataDevelopersList[i]);  //todo: Картка розробника, що відредагована - ПІСЛЯ
                // console.log("dataDevelopersList (після РЕДАГУВАННЯ):", dataDevelopersList); //!
                //todo: ПЕРЕЗАПИСУЄМО змінений dataDevelopersList в Локальне сховище (localStorage)
                localStorage.setItem("data", JSON.stringify(dataDevelopersList)); 
            };
        };
    };

    //todo: ОЧИЩАЄМО поля форми для РЕДАГУВАННЯ/ВИДАЛЕННЯ
    formAddEditDeveloper.reset();
    //todo: ЗАКРИВАЄМО модальне вікно з формою для РЕДАГУВАННЯ/ВИДАЛЕННЯ
    toggleModalAddEditDeveloper();
};
