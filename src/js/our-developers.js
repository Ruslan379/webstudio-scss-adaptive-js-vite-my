console.log("Будуэмо розмітку - список розробників");

//! Знаходимо елемент в якому рендерим список розробників
const developersList = document.querySelector(".our-developers-list");

//! ❌ Рішення-1: --------------------------------------------------------------------------
//!❌ Рішення-1: з створенням функції з new URL(...)(динамічний шлях без явного import):
const imgUrl = (relPath) => new URL(relPath, import.meta.url).href;
// function imgUrl(relPath) {
//     return new URL(relPath, import.meta.url).href;
// };
//!❌ Рішення-1: Один з об'єктів для прикладу синтаксису:
const images = {
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
    default: imgUrl("../images/igor-mobile-1x.jpg")
        
};


//!✅ Рішення-2:
import igorDesktop1x from "../images/igor-desktop-1x.jpg";
import igorDesktop2x from "../images/igor-desktop-2x.jpg";
import igorDesktop3x from "../images/igor-desktop-3x.jpg"

import igorTablet1x from "../images/igor-tablet-1x.jpg";
import igorTablet2x from "../images/igor-tablet-2x.jpg";
import igorTablet3x from "../images/igor-tablet-3x.jpg"

import igorMobile1x from "../images/igor-mobile-1x.jpg";
import igorMobile2x from "../images/igor-mobile-2x.jpg";
import igorMobile3x from "../images/igor-mobile-3x.jpg"


//!✅ Рішення-3: з new URL(...)(динамічний шлях без явного import)
new URL("../images/symboldefs.svg#instagram", import.meta.url).href;


//! Дані для списку з масиву об'єктів:
const dataDevelopersList = [
    {
        x: [1,2,3],
        name: "Ігор Дем'яненко",
        position: "Product Designer",
        images: {
            desktop: [
                igorDesktop1x,
                igorDesktop2x,
                igorDesktop3x
            ],
            tablet: [
                igorTablet1x,
                igorTablet2x,
                igorTablet3x
            ],
            mobile: [
                igorMobile1x,
                igorMobile2x,
                igorMobile3x
            ],
            default: igorMobile1x
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        x: [1, 2, 3],
        name: "Ольга Рєпіна",
        position: "Frontend Developer",
        images: {
            desktop: [
                new URL("../images/olga-desktop-1x.jpg", import.meta.url).href,
                new URL("../images/olga-desktop-2x.jpg", import.meta.url).href,
                new URL("../images/olga-desktop-3x.jpg", import.meta.url).href
            ],
            tablet: [
                new URL("../images/olga-tablet-1x.jpg", import.meta.url).href,
                new URL("../images/olga-tablet-2x.jpg", import.meta.url).href,
                new URL("../images/olga-tablet-3x.jpg", import.meta.url).href
            ],
            mobile: [
                new URL("../images/olga-mobile-1x.jpg", import.meta.url).href,
                new URL("../images/olga-mobile-2x.jpg", import.meta.url).href,
                new URL("../images/olga-mobile-3x.jpg", import.meta.url).href
            ],
            default: new URL("../images/olga-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        x: [1, 2, 3],
        name: "Микола Тарасов",
        position: "Marketing",
        images: {
            desktop: [
                new URL("../images/mykola-desktop-1x.jpg", import.meta.url).href,
                new URL("../images/mykola-desktop-2x.jpg", import.meta.url).href,
                new URL("../images/mykola-desktop-3x.jpg", import.meta.url).href
            ],
            tablet: [
                new URL("../images/mykola-tablet-1x.jpg", import.meta.url).href,
                new URL("../images/mykola-tablet-2x.jpg", import.meta.url).href,
                new URL("../images/mykola-tablet-3x.jpg", import.meta.url).href
            ],
            mobile: [
                new URL("../images/mykola-mobile-1x.jpg", import.meta.url).href,
                new URL("../images/mykola-mobile-2x.jpg", import.meta.url).href,
                new URL("../images/mykola-mobile-3x.jpg", import.meta.url).href
            ],
            default: new URL("../images/mykola-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
    {
        x: [1, 2, 3],
        name: "Михайло Єрмаков",
        position: "UI Designer",
        images: {
            desktop: [
                new URL("../images/muhailo-desktop-1x.jpg", import.meta.url).href,
                new URL("../images/muhailo-desktop-2x.jpg", import.meta.url).href,
                new URL("../images/muhailo-desktop-3x.jpg", import.meta.url).href
            ],
            tablet: [
                new URL("../images/muhailo-tablet-1x.jpg", import.meta.url).href,
                new URL("../images/muhailo-tablet-2x.jpg", import.meta.url).href,
                new URL("../images/muhailo-tablet-3x.jpg", import.meta.url).href
            ],
            mobile: [
                new URL("../images/muhailo-mobile-1x.jpg", import.meta.url).href,
                new URL("../images/muhailo-mobile-2x.jpg", import.meta.url).href,
                new URL("../images/muhailo-mobile-3x.jpg", import.meta.url).href
            ],
            default: new URL("../images/muhailo-mobile-1x.jpg", import.meta.url).href
        },
        icons: [
            new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
            new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
            new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
            new URL("../images/symboldefs.svg#linkedin", import.meta.url).href
        ]
    },
];

const JSONDevelopersList = JSON.stringify(dataDevelopersList);
console.log("JSONDevelopersList:", JSONDevelopersList); //!

//! Дані для списку із JSON (так працює лише в http://localhost/):
// import dataDevelopersList from "../json/developers-list.json";
console.log("dataDevelopersList:", dataDevelopersList); //!


//todo: Розмітка без 
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
console.log("template:", template); //!

//! Генеруємо HTML для всіх розробників
const markup = dataDevelopersList.map(item => template(item)).join("");
console.log("markup:", markup); //!

//! Вставляємо у DOM
developersList.innerHTML = markup;
