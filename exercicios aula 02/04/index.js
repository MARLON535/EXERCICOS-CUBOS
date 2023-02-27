//calc. de juros composto
//m = montante 
//c = capital 
//i = taxa de juros em porcentagem 
//t = tempo da aplicacao em meses
//l = lucro 
let c = 15_000, i = 5, t = 8

let m = c * Math.pow((i / 100 + 1), 2)

let l = m - c

console.log(`Ao investir R$${c} a uma taxa de ${i}%, durante ${t} seu montante total sera de ${m}, tendo um lucro de ${l}`)