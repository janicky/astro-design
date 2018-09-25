import './resources/css/index.sass'
import 'normalize.css'

const Parallax = require('parallax-js')

var scene = document.getElementById('parallax')
var parallax = new Parallax(scene)

new Parallax(document.getElementById('moon-parallax'))

var scroll_down = document.getElementById('scroll-down')
var header = document.getElementsByClassName('header')[0]

document.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        scroll_down.classList.remove('jumbotron__scroll-down--active')
        header.classList.add('header--active')
    } else {
        scroll_down.classList.add('jumbotron__scroll-down--active')
        header.classList.remove('header--active')
    }
})


$(function() {
    $('.slider__container').slick({
        slidesToShow: 4
    })
})

ScrollReveal().reveal('.scroll-reveal', {
    opacity: 0,
    scale: 0.9,
    beforeReveal: e => {
        e.classList.add('scroll-reveal--active')
    }
})
