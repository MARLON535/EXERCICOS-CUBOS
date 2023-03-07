//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "verificar";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
    const x = (valorDoProduto / 100 * 5).toFixed(2)
    console.log(`valor a pagar sera R$${x}`)
} else if (
    (tipoDePagamento === "debito") ||
    (tipoDePagamento === "dinheiro")
) {
    const x = (valorDoProduto / 100 * 10).toFixed(2)
    console.log(`valor a pagar sera R$${x}`)
} else if (tipoDePagamento === "verificar") {
    const x = (valorDoProduto / 100 * 3).toFixed(2)
    console.log(`valor a pagar sera R$${x}`)
}