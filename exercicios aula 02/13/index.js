//calcular area de um cilindro
//r  = raio
//h  = altura
//ab = area da base 
//al = area lateral 
//at = area total

let r = 5, h = 12

const ab = 3.14 * Math.pow((r), 2)

const al = 2 * 3.14 * r * h

const at = 2 * ab + al

console.log(`em uim cilindro com 5cm de raio e 12cm de altura, a area sera de ${at}cm³`)