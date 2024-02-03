const valorDoProduto = 100;
const numeroDeParcelas = 21;
if (numeroDeParcelas === 1) {
    const valorDoDesconto = valorDoProduto * 10 / 100;
    const valorDaParcela = valorDoProduto - valorDoDesconto;
    console.log(`voce devera pagar R$${valorDoProduto} para obter 10% de desconto.`);
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    const valorDaParcela = (valorDoProduto / numeroDeParcelas).toFixed(2);
    console.log(`voce devera pagar em ${numeroDeParcelas}x sem juros em parcelas de ${valorDaParcela}reais.`);

} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12); {
    const valorAPagarComJuros = (valorDoProduto * (1 + 1 / 100) ** numeroDeParcelas).toFixed(2);
    const valorDaParcela = (valorAPagarComJuros / numeroDeParcelas).toFixed(2);
    console.log(`voce devera pagar em ${numeroDeParcelas}x de R$ ${valorDaParcela} totalizando ${valorAPagarComJuros} devido aos juros`);

}






