// Variáveis globais
let items = [];
let total = 0;

// Função para adicionar um item ao orçamento
function adicionarItem() {
    const itemInput = document.getElementById('item');
    const quantidadeInput = document.getElementById('quantidade');
    const precoInput = document.getElementById('preco');

    // Validar se os campos estão preenchidos
    if (itemInput.value === '' || quantidadeInput.value === '' || precoInput.value === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Criar objeto representando o item
    const newItem = {
        item: itemInput.value,
        quantidade: parseInt(quantidadeInput.value),
        preco: parseFloat(precoInput.value),
    };

    // Adicionar o item à lista
    items.push(newItem);

    // Atualizar a lista de itens no DOM
    atualizarListaItens();

    // Calcular e atualizar o total do orçamento
    calcularTotal();

    // Limpar os campos de entrada
    itemInput.value = '';
    quantidadeInput.value = '';
    precoInput.value = '';
}

// Função para atualizar a lista de itens no DOM
function atualizarListaItens() {
    const listaItens = document.getElementById('lista-itens');
    listaItens.innerHTML = '';

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.quantidade}x ${item.item} - R$ ${item.preco.toFixed(2)}`;
        listaItens.appendChild(li);
    });
}

// Função para calcular e atualizar o total do orçamento
function calcularTotal() {
    total = items.reduce((acc, item) => acc + item.quantidade * item.preco, 0);

    // Atualizar o total no DOM
    const totalSpan = document.getElementById('total');
    totalSpan.textContent = total.toFixed(2);
}
