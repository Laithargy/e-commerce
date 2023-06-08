let imgGallery = [
    '../img/slider0',
    '../img/slider1',
    '../img/slider2'
]

let prevImg = imgGallery.length - 1;
let mainImg = 0;
let nextImg = 1;

function loadGallery () {
    let mainView = document.getElementById('slideShow');
    mainView.style.background = imgGallery[mainImg];

    let leftView = document.getElementById('slideLeft');
    leftView.style.background = imgGallery[prevImg];

    let rightView