//po = população incial
//X = quantidade de transmissoes
//t = tempo percorrido
//y = total de pessoas infectadas

let po = 1_000, x = 4, t = 7

const y = po * Math.pow((x), t / 7)

console.log(`Apos ${t} dias, o total de poessoas infectadas e de ${y} pessoas, uma vez que inicialmente existiam ${po}`)