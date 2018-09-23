import './resources/css/index.sass'
import 'normalize.css'

const Parallax = require('parallax-js')

var scene = document.getElementById('parallax')
var parallax = new Parallax(scene)

var scroll_down = document.getElementById('scroll-down')
document.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        scroll_down.classList.remove('jumbotron__scroll-down--active')
    } else {
        scroll_down.classList.add('jumbotron__scroll-down--active')
    }
})
