var cor = document.querySelector('#cor')
var color = document.querySelectorAll('.color')
var botao = document.querySelector('#botao')
cor.addEventListener('click', enviar)
function enviar() {
    switch (cor.value) {
        case 'cimento':
            cor.style.background = 'white'
            color[0].style.background = 'white'
            break;
        case 'vermelho' :
            cor.style.background = 'red'
            color[2].style.background = 'white'
            break
        case 'bege':
            cor.style.background = 'brown'
            color[1].style.background = 'white'
            break
        default:
            break;
    }
}