let imgGallery = [
    "../img/slider0.png",
    "../img/slider1.png",
    "../img/slider2.png"
];

let introHeader = [
    "Azure Collection",
    "Verdant Collection",
    "Sunset Collection"
];

let introText = [
    "Immerse yourself in the tranquil serenity of the ocean with our azure-themed timepiece, featuring a deep blue dial reminiscent of calm waves, and a sleek stainless steel bracelet that captures the essence of maritime adventures.",
    "Dive into the lush beauty of nature with our verdant-themed watch, adorned with a vibrant green dial and a leaf-patterned strap, evoking the freshness of a tropical rainforest.",
    "Embrace the warmth and vibrancy of a breathtaking sunset with our sunset-themed watch, showcasing an enchanting orange dial that mirrors the hues of the horizon, complemented by a leather strap that exudes elegance and style."
];

let prevImg = imgGallery.length - 1;
let mainImg = 0;
let nextImg = 1;

let header = document.querySelector(".textIntro h2");
let paragraph = document.querySelector(".textIntro p");

function loadGallery () {

    // SLIDER DESCRIPTION
    header.textContent = introHeader[mainImg];
    paragraph.textContent = introText[mainImg];


    let mainView = document.getElementById('slideShow');
    mainView.style.background = "url(" +  imgGallery[mainImg] + ")";
    mainView.style.backgroundPosition = "center";
    mainView.style.backgroundSize = "cover";

    let leftView = document.getElementById('slideLeft');
    leftView.style.background = "url(" +  imgGallery[prevImg] + ")";
    leftView.style.backgroundPosition = "center";
    leftView.style.backgroundSize = "cover";


    let rightView = document.getElementById('slideRight');
    rightView.style.background = "url(" +  imgGallery[nextImg] + ")";
    rightView.style.backgroundPosition = "center";
    rightView.style.backgroundSize = "cover";


    // LINK THE PRODUCT TO THE PRODUCT PAGE
    // let linkSlide = document.getElementById('linkSlide');
    // linkSlide.href = imgGallery[mainImg];
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