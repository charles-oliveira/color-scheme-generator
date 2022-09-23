// Get all of elements
const btn = document.querySelector('button')
const color = document.querySelectorAll('.color')
const hex = document.querySelectorAll('.hex')


// Add a click event on the button 
btn.addEventListener('click', generateColors)

function generateColors() {
    for(let i = 0; i < color.length; i++) {
        // Gera uma cor randomica
        const randomColor = Math.floor(Math.random()*16777215).toString(16)
        // Adiciona a cor ao background
        color[i].style.background = `#${randomColor}`
        // Adiciona a animação
        color[i].classList.add('fade-in')
        setTimeout(() => color[i].classList.remove('fade-in'), 400)
        hex[i].innerHTML = randomColor
    }
}

generateColors()