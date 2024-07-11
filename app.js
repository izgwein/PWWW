const menu = document.querySelector('#menu')
const mlinks = document.querySelector('.navmenu')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    mlinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)