/*hamburger toggle*/

const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
const navLinks = document.getElementsByClassName('nav-container')[0];
const sideNav = document.getElementsByClassName('sidenavContainer')[0];
const article = document.getElementsByClassName('article')[0];
const navToggle = document.querySelectorAll('.toggle-icon');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    sideNav.classList.toggle('active')
    article.classList.toggle('active')
    navToggle.forEach(_icon => {
        _icon.classList.toggle('hidden')
    })
})




