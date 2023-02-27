//calculo de juros
//i = taxa de juros
//M = montante
//C = capital inicial
//n = número de meses

let m = 90_000, c = 60_000, n = 24

const i = (Math.pow((m / c), 1 / n) - 1) * 100

console.log(`o valor do juros e de ${i}% ao mes`)