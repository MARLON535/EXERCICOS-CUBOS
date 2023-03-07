//renda mensal do aluno, em centavos.
const rendaMensalEmReais = 3000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 10000;

if (rendaMensalEmReais >= 2000) {
    if (mesesDecorridos > 60) {
        console.log("voce nao paga mais")
    } else {
        const x = (rendaMensalEmReais / 100 * 18).toFixed(2)
        console.log(`vc deve pagar R$${x} de parcela`)
    }
}