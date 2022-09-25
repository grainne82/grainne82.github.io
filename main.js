
const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
const navLinks = document.getElementsByClassName('nav-container')[0];
const sideNav = document.getElementsByClassName('sidenavContainer')[0];
const article = document.getElementsByClassName('article')[0];
const navToggle = document.getElementsByClassName('hamburger-menu')[0];

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    sideNav.classList.toggle('active')
    article.classList.toggle('active')
    navToggle.classList.toggle('active')
    })


window.addEventListener("resize", () => {
    if(document.body.clientWidth > 769) {
       navLinks.classList.remove('active')
       sideNav.classList.remove('active') 
       article.classList.remove('active')
       navToggle.classList.remove('active')
    }    
})

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

var subdropdown = document.getElementsByClassName("sub-dropdown-btn");
var i;

for (i = 0; i < subdropdown.length; i++) {
  subdropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var subdropdownContent = this.nextElementSibling;
    if (subdropdownContent.style.display === "block") {
      subdropdownContent.style.display = "none";
    } else {
      subdropdownContent.style.display = "block";
    }
  });
}
   