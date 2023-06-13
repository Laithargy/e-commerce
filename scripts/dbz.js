// DISPLAY THE WATCH

// VARIABLE CONTAINING IMAGES FOR THE DISPLAY OF 6 IMAGES
let displayIMG = [
    "../img/dbz_M.png",
    "../img/freezer_montre.png",
    "../img/sangoku.png",
    "../img/dbz_watch.png",
    "../img/tortuegeniale_montre.png",
    "../img/shenlong_watch.png"
];

// FUNCTION THAT PUT THE WATCH DISPLAY
// (watch) is an INTEGER, position in my variable displayIMG
function displayDBZ(watch) {
    // GET THE ELEMENT IMG TO REPLACE THE SRC
    let selectDiv = document.getElementById('displayDBZ');
    // <img src=" displayIMG[watch]"> REPLACE BY THE POSITION IN MY VARIABLE"
    selectDiv.src = displayIMG[watch];
}

// GET THE ELEMENT CLICKED ON TO DISPLAY THE CORRESPONDING WATCH
document.getElementById('boo').addEventListener("click", function() {displayDBZ(0);});
document.getElementById('freezer').addEventListener("click", function() {displayDBZ(1);});
document.getElementById('sangoku').addEventListener("click", function() {displayDBZ(2);});
document.getElementById('sangokuKid').addEventListener("click", function() {displayDBZ(3);});
document.getElementById('tortuegeniale').addEventListener("click", function() {displayDBZ(4);});
document.getElementById('shenlong').addEventListener("click", function() {displayDBZ(5);});

// DISPLAY A WATCH BY DEFAULT
displayDBZ(0);

// MODAL PART / POP UP "ADDED TO CART"
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlayDBZ');

openModalButtons.forEach(button => {
    button.addEventListener("click", () =>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openPopup(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener("click", () =>{
        modal = button.closest('.popup');
        closePopup(modal);
    })
})

overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll('.popup.active');
    modals.forEach(modals =>{
        closePopup(modals);
    })
})

function openPopup(modal) {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closePopup(modal) {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}