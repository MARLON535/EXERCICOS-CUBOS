const primeiroNome = "";
const sobrenome = "";
const apelido = "";

if ((primeiroNome) && (sobrenome)) {
    const x = primeiroNome + " " + sobrenome
    console.log(x)
} else if (primeiroNome) {
    console.log(primeiroNome)
} else {
    console.log(apelido)
}