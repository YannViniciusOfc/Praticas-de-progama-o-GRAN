function alterarQtd(produto, acao){
    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)

    if(acao == '-' && qtd.innerHTML == 0){
        alert('Atenção, o valor não pode ser menor que 0.')
    } else {
        acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
        total.innerHTML = qtd.innerHTML * valor.innerHTML
    }
}

function soma(){
    let soma = 0
    soma += document.getElementById('Total_1')    
    soma = soma + document.getElementById('Total_2')
    soma = soma + document.getElementById('Total_3')
}