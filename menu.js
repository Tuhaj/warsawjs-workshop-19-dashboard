const menuIcon = document.querySelector('#menu-icon')
const aside = document.querySelector('aside')

menuIcon.addEventListener('click', function(event) {
    aside.classList.toggle('toggle')
})