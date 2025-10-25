console.log("Будуэмо розмітку");

//! Рішення з new URL(...)(динамічний шлях без явного import ):
const imgUrl = (relPath) => new URL(relPath, import.meta.url).href;

//! Дані для списку з масиву об'єктів:
const dataDevelopersList = [
    {
        name: "Ігор Дем'яненко",
        position: "Product Designer",
        images: {
            desktop: [
                imgUrl("../images/igor-desktop-1x.jpg"),
                imgUrl("../images/igor-desktop-2x.jpg"),
                imgUrl("../images/igor-desktop-3x.jpg")
            ],
            tablet: [
                imgUrl("../images/igor-tablet-1x.jpg"),
                imgUrl("../images/igor-tablet-2x.jpg"),
                imgUrl("../images/igor-tablet-3x.jpg")
            ],
            mobile: [
                imgUrl("../images/igor-mobile-1x.jpg"),
                imgUrl("../images/igor-mobile-2x.jpg"),
                imgUrl("../images/igor-mobile-3x.jpg")
            ],
            default: imgUrl("./images/igor-mobile-1x.jpg")
            ,
        },
        icons: [
            "./images/symboldefs.svg#instagram",
            "./images/symboldefs.svg#twitter",
            "./images/symboldefs.svg#facebook",
            "./images/symboldefs.svg#linkedin"
        ]
    },
    {
        name: "Ольга Рєпіна",
        position: "Frontend Developer",
        images: {
            desktop: [
                "./images/olga-desktop-1x.jpg",
                "./images/olga-desktop-2x.jpg",
                "./images/olga-desktop-3x.jpg"
            ],
            tablet: [
                "./images/olga-tablet-1x.jpg",
                "./images/olga-tablet-2x.jpg",
                "./images/olga-tablet-3x.jpg"
            ],
            mobile: [
                "./images/olga-mobile-1x.jpg",
                "./images/olga-mobile-2x.jpg",
                "./images/olga-mobile-3x.jpg"
            ],
            default: "./images/olga-mobile-1x.jpg"
        },
        icons: [
            "./images/symboldefs.svg#instagram",
            "./images/symboldefs.svg#twitter",
            "./images/symboldefs.svg#facebook",
            "./images/symboldefs.svg#linkedin"
        ]
    },
    {
        name: "Микола Тарасов",
        position: "Marketing",
        images: {
            desktop: [
                "./images/mykola-desktop-1x.jpg",
                "./images/mykola-desktop-2x.jpg",
                "./images/mykola-desktop-3x.jpg"
            ],
            tablet: [
                "./images/mykola-tablet-1x.jpg",
                "./images/mykola-tablet-2x.jpg",
                "./images/mykola-tablet-3x.jpg"
            ],
            mobile: [
                "./images/mykola-mobile-1x.jpg",
                "./images/mykola-mobile-2x.jpg",
                "./images/mykola-mobile-3x.jpg",
            ],
            default: "./images/mykola-mobile-1x.jpg"
        },
        icons: [
            "./images/symboldefs.svg#instagram",
            "./images/symboldefs.svg#twitter",
            "./images/symboldefs.svg#facebook",
            "./images/symboldefs.svg#linkedin"
        ]
    },
    {
        name: "Михайло Єрмаков",
        position: "UI Designer",
        images: {
            desktop: [
                "./images/muhailo-desktop-1x.jpg",
                "./images/muhailo-desktop-2x.jpg",
                "./images/muhailo-desktop-3x.jpg"
            ],
            tablet: [
                "./images/muhailo-tablet-1x.jpg",
                "./images/muhailo-tablet-2x.jpg",
                "./images/muhailo-tablet-3x.jpg"
            ],
            mobile: [
                "./images/muhailo-mobile-1x.jpg",
                "./images/muhailo-mobile-2x.jpg",
                "./images/muhailo-mobile-3x.jpg"
            ],
            default: "./images/muhailo-mobile-1x.jpg"
        },
        icons: [
            "./images/symboldefs.svg#instagram",
            "./images/symboldefs.svg#twitter",
            "./images/symboldefs.svg#facebook",
            "./images/symboldefs.svg#linkedin"
        ]
    },
];

const JSONDevelopersList = JSON.stringify(dataDevelopersList);
console.log("JSONDevelopersList:", JSONDevelopersList); //!

//! Дані для списку із JSON:
// import dataDevelopersList from "../json/developers-list.json";
// console.log("dataDevelopersList:", dataDevelopersList); //!

const developersList = document.querySelector(".our-developers-list");

//todo: Розмітка
// const markup = dataDevelopersList
//     .map(item =>
//         `
//             <li class="our-developers-list__item">
//                 <picture>
//                     <source
//                         srcset="
//                             ${item.images.desktop[0]} 1x,
//                             ${item.images.desktop[1]} 2x,
//                             ${item.images.desktop[2]} 3x
//                         "
//                         media="(min-width: 1200px)"
//                     />
//                     <source
//                         srcset="
//                             ${item.images.tablet[0]} 1x,
//                             ${item.images.tablet[1]} 2x,
//                             ${item.images.tablet[2]} 3x
//                         "
//                         media="(min-width: 768px)"
//                     />
//                     <source
//                         srcset="
//                             ${item.images.mobile[0]} 1x,
//                             ${item.images.mobile[1]} 2x,
//                             ${item.images.mobile[2]} 3x
//                         "
//                         media="(min-width: 480px)"
//                     />
//                     <img
//                         class="our-developers-list__img"
//                         src="${item.images.default}"
//                         alt="${item.name}"
//                     />
//                 </picture>

//                 <p class="our-developers-list__text">${item.name}</p>
//                 <h4 class="our-developers-list__title">${item.position}</h4>
//                 <ul class="our-developers-svg-list">
//                     <li class="our-developers-svg-list__item">
//                         <a class="our-developers-svg-list__link" href="#">
//                             <svg width="20" height="20">
//                                 <use href="${item.icons[0]}"></use>
//                             </svg>
//                         </a>
//                     </li>
//                     <li class="our-developers-svg-list__item">
//                         <a class="our-developers-svg-list__link" href="#">
//                             <svg width="20" height="20">
//                                 <use href="${item.icons[1]}"></use>
//                             </svg>
//                         </a>
//                     </li>
//                     <li class="our-developers-svg-list__item">
//                         <a class="our-developers-svg-list__link" href="#">
//                             <svg width="20" height="20">
//                                 <use href="${item.icons[2]}"></use>
//                             </svg>
//                         </a>
//                     </li>
//                     <li class="our-developers-svg-list__item">
//                         <a class="our-developers-svg-list__link" href="#">
//                             <svg width="20" height="20">
//                                 <use href=".${item.icons[3]}"></use>
//                             </svg>
//                         </a>
//                     </li>
//                 </ul>
//             </li>
//         `
//     )
//     .join("");
// // developersList.innerHTML = ""; //todo: var.1
// // developersList.insertAdjacentHTML("beforeend", markup); //todo: var.1
// developersList.innerHTML = markup; //todo: var.2
// console.log("markup:", markup); //!


//todo: ++++++++++++++++++++++++ Handlebars +++++++++++++++++++++++++++++
import Handlebars from "handlebars";
// import developersData from "../data/developers.json";
import developerTemplate from "../templates/developer.hbs?raw";

const template = Handlebars.compile(developerTemplate);

//! Генеруємо HTML для всіх розробників
const html = dataDevelopersList.map(dev => template(dev)).join("");

//! Вставляємо у DOM
developersList.innerHTML = html;
