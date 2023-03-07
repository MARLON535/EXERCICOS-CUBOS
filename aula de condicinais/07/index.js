const aposentada = false;
const portadoraDeDoenca = null;
const totalDeRendimentos = 3000000; //emCentavos

if (aposentada !== false || portadoraDeDoenca !== false) {
    console.log("isento")
} else if (aposentada === false || portadoraDeDoenca === false) {
    if (totalDeRendimentos >= 3000000) {
        console.log("vai ter que Pagar")
    } else {
        console.log("voce precisa de um aumento")
    }
}