// DISPLAY THE WATCH

let displayIMG = [
    "../img/dbz_M.png",
    "../img/freezer_montre.png",
    "../img/sangoku.png",
    "../img/dbz_watch.png",
    "../img/tortuegeniale_montre.png",
    "../img/shenlong_watch.png"
];

function displayDBZ(watch) {
    console.log("I WOKR");
    let selectDiv = document.getElementById('displayDBZ');
    selectDiv.src = displayIMG[watch];
}

document.getElementById('boo').addEventListener("click", function() {displayDBZ(0);});
document.getElementById('freezer').addEventListener("click", function() {displayDBZ(1);});
document.getElementById('sangoku').addEventListener("click", function() {displayDBZ(2);});
document.getElementById('sangokuKid').addEventListener("click", function() {displayDBZ(3);});
document.getElementById('tortuegeniale').addEventListener("click", function() {displayDBZ(4);});
document.getElementById('shenlong').addEventListener("click", function() {displayDBZ(5);});

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