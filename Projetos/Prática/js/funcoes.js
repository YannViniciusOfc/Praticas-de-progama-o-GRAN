function alterarQtd(produto, acao){
    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)

    acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
    total.innerHTML = qtd.innerHTML * valor.innerHTML
}