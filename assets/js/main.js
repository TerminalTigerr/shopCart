const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const navMenu = document.getElementById('nav-menu')

const showMenu = () => {
    navMenu.classList.add('show-menu')
}
navToggle.addEventListener('click', showMenu)

const closeMenu = () => {
    navMenu.classList.remove('show-menu')
}
navClose.addEventListener('click', closeMenu)

/*============ Link Action ========*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    navMenu.classList.remove('show-menu')
}
navLink.forEach(link => {
    link.addEventListener('click', linkAction)
});


const search = document.querySelector(".search-widget")
const btn = document.querySelector(".search-button")
const input = document.querySelector(".search-input")

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()

})