
let menu = document.querySelector('#hamburger');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    console.log("PP");
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}