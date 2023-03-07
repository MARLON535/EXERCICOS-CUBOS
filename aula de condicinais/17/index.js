//valor do produto comprado.
const valorDoProduto = (1000.00).toFixed(2);

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

if ((valorDoProduto) && (quantidadeDoParcelamento)) {
    const valordasparcelas = (valorDoProduto / quantidadeDoParcelamento).toFixed(2)
    const parcelaspagas = (valorPago / valordasparcelas)

    if ((parcelaspagas) && (valordasparcelas)) {
        const restante = valorDoProduto - (valordasparcelas * parcelaspagas)
        const parcelasrestantes = quantidadeDoParcelamento - parcelaspagas
        console.log(`ainda falta pagar R$${restante},um total de ${parcelasrestantes} parcelas`)
    }
} 
