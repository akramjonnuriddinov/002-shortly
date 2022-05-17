const elFormBtn = document.querySelector('.form__btn');
const elUrlShorterItem = document.querySelector('.url-shorter__item');
const elUrlFirst = elUrlShorterItem.querySelector('.url__first');
const elUrlShort = elUrlShorterItem.querySelector('.url__short');

// elFormBtn.addEventListener('submit', function () {
//     const temp = document.querySelector('.template');
//     const clon = temp.content.cloneNode(true);
//     const elUrlShorter = document.querySelector('.url-shorter');
//     elUrlShort.appendChild(clone);

//     elUrlShorter.appendChild(clone);
// });

const elForm = document.querySelector('.form')
elFormBtn.addEventListener('submit', function (evn) {
    evn.preventDefault();
    console.log('Test');
});