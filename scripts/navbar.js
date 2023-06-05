
let menu = document.querySelector('.hamburger');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
    console.log("WORK");
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    if (window.pageYOffset > 0){
        header.classList.add('sticky');
    }
    else {
        header.classList.remove('sticky');
    }
}