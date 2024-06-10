const hamburger = document.getElementById('hamburger-menu');
const nav = document.getElementById('navbar-menu');
const ham = document.getElementById('x');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    ham.classList.toggle('fa-xmark');
})