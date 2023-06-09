let imgGallery = [
    "../img/slider0.png",
    "../img/slider1.png",
    "../img/slider2.png"
];

let prevImg = imgGallery.length - 1;
let mainImg = 0;
let nextImg = 1;

function loadGallery () {
    let mainView = document.getElementById('slideShow');
    mainView.style.background = "url(" +  imgGallery[mainImg] + ")";

    let leftView = document.getElementById('slideLeft');
    leftView.style.background = "url(" +  imgGallery[prevImg] + ")";

    let rightView = document.getElementById('slideRight');
    rightView.style.background = "url(" +  imgGallery[nextImg] + ")";

    let linkSlide = document.getElementById('linkSlide');
    linkSlide.href = imgGallery[mainImg];
};


function scrollRight() {
    // CLICK ON RIGHT ARROW
    // CHANGE THE MAIN IMG BY THE NEXTIMG
    prevImg = mainImg;
    mainImg = nextImg;

    // CONDITION IN CASE WE ARE AT THE END OF OUR CAROUSEL OF IMG
    if (nextImg >= (imgGallery.length -1)) {
        nextImg = 0;
      } else {
        nextImg++;
      }; 
      loadGallery();
};

function scrollLeft() {
    // CLICK ON LEFT ARROW
    // CHANGE THE MAIN IMG BY THE PREVIMG
    nextImg = mainImg;
    mainImg = prevImg;

    // CONDITION IN CASE WE ARE AT THE BEGINNING OF OUR CAROUSEL OF IMG
    if (prevImg === 0) {
        prevImg = imgGallery.length - 1;
    }
    else {
        prevImg--;
    };
    loadGallery();
};

document.getElementById("arrowRight").addEventListener("click", scrollRight);
document.getElementById("arrowLeft").addEventListener("click", scrollLeft);
document.getElementById("slideRight").addEventListener("click", scrollRight);
document.getElementById("slideLeft").addEventListener("click", scrollLeft);

loadGallery();