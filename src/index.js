import './resources/css/index.sass'
import 'normalize.css'

const Parallax = require('parallax-js')

var scene = document.getElementById('parallax')
var parallax = new Parallax(scene)

new Parallax(document.getElementById('moon-parallax'))
new Parallax(document.getElementById('iss-parallax'))

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
    $("#lightgallery").lightGallery({
        selector: '.gallery__item-picture'
    }); 
    $('.slider__container').slick({
        slidesToShow: 4
    })
})

ScrollReveal().reveal('.scroll-reveal--default', { delay: 150 })

ScrollReveal().reveal('.scroll-reveal', {
    opacity: 0,
    scale: 0.9,
    reset: true,
    beforeReveal: e => {
        e.classList.add('scroll-reveal--active')
    },
    beforeReset: e => {
        e.classList.remove('scroll-reveal--active')
    }
})

var humans_counter = new CountUp('humans-counter', 0, 92, 0, 3, { useGrouping: false, suffix: '%' })
var ie_counter = new CountUp('ie-counter', 0, 8, 0, 3, { useGrouping: false, suffix: '%' })

ScrollReveal().reveal('.stats', {
    afterReveal: e => {
        humans_counter.start()
        ie_counter.start()
    }
})