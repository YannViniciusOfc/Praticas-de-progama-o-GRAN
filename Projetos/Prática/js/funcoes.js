function alterarQtd(produto, acao){
    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)

    if(acao == '-' && qtd.innerHTML == 0){
        alert('Atenção, o valor não pode ser menor que 0.')
    } else {
        acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
        total.innerHTML = qtd.innerHTML * valor.innerHTML
        soma()
    }
}

function soma(){
    let soma = 0

    soma += Number(document.getElementById('total_1').innerHTML)    
    soma += Number(document.getElementById('total_2').innerHTML)
    soma += Number(document.getElementById('total_3').innerHTML)

    document.getElementById('subtotal').innerHTML = soma
}