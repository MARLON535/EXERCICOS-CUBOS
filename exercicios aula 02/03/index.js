//calculo de desconto
//p = preco
//vd = valor do desconto
//pc = desconto em porcentagem
{
    let p = 150.30, pc = 5

    let vd = ((p) * pc / 100)

    console.log(`seu desconto de ${pc}% sobre R$${p} sera de ${vd} `)
}

{
    let p = 180.5, vd = 18.05

    let pc = ((vd * 100) / p)

    console.log(`sendo R$${p} e vc recebe um desconto de R$${vd}, vc estara recebendo ${pc} % de desconto`)
}

{
    let vd = 13, pc = 10

    let p = ((vd * 100) / pc)

    console.log(`tendo R$${vd} de desconto,sendo o mesmo que ${pc}%, o valor total do produto e de R$${p}`)
}