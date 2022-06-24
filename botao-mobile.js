const botao = document.querySelector('.cabecalho__titulo')

function toggleMenu() {
    const nav = document.querySelector('.cabecalho__lista')
    nav.classList.toggle('active')
}

botao.addEventListener('click', toggleMenu);
