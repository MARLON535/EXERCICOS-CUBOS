const idade = 11;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = null;

if (possuiPatologia !== false) {
    console.log("entrada proibida,possui patologia cardiaca")
} else if (idade >= 12 <= 65) {
    console.log("sua idade não condis com a faixa de 12 a 65 anos")
} else if (altura <= 150) {
    console.log("voce nao tem altura minima para a entrada")
} else if (ehEstudante === false) {
    console.log("pessoa nao e estudante,pagara entrada completa valor R$20,00")
} else {
    console.log("poessoa pagara meia entrada pois e estudante, valor R$10,00")
}

