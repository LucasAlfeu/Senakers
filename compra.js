const quantidade = document.querySelector('.quantidade__numero');
const carrinhoNumeroItem = document.querySelector('.perfil__compra');
const finalizar = document.querySelector('.perfil__cart');
const vazio = document.querySelector('.perfil__container');
const comprar = document.querySelector('.perfil__botao');
const valorFinal = document.querySelector('.perfil__preco--final');

const listaPrecos = [];
const valorProduto = 125;

function numeroItem(id) {
    if(id == "mais") {
        listaPrecos.push(125)
        quantidade.innerHTML = listaPrecos.length;
        console.log(listaPrecos);
        return listaPrecos;
    } else {
        listaPrecos.pop()
        quantidade.innerHTML = listaPrecos.length;
        console.log(listaPrecos);
        return listaPrecos;
    }
}
function addCarrinho() {
    carrinhoNumeroItem.classList.add('ativo');
    carrinhoNumeroItem.innerHTML = listaPrecos.length;
}

function mostraCarrinho() {
    finalizar.classList.add('mostrar');
    if(listaPrecos.length === 0) {
        comprar.style.display = 'none';
    } else {
        comprar.style.display = 'block';
        const precoFinal = valorProduto * listaPrecos.length;
        valorFinal.innerHTML = `R$${precoFinal},00`;
    }
}
function escondeCarrinho() {
    finalizar.classList.remove('mostrar');
}

function deletarCarrinho() {
    listaPrecos.splice(0,listaPrecos.length);
    quantidade.innerHTML = 0;
    carrinhoNumeroItem.innerHTML = 0;
    valorFinal.innerHTML = '';
}

function finalizarCompra() {
    alert('Compra efetuada com sucesso, obrigado pela preferência');
    location.reload();
}