const scrollDown = (hash) => {
    location.replace("#" + hash)
}

const navLinks = document.getElementById('nav-links');
const menu = document.getElementById('menu');

const toggleNav = () => {
    navLinks.classList.toggle('open');
    console.log("hello");
}

menu.addEventListener('click', toggleNav);


