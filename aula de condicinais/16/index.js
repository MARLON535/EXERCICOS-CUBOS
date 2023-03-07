//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 19;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = null;

if (idadeDoAluno <= 18) {
    if (possuiResponsavel === false) {
        console.log("pode realizar a matricula")
    } else {
        console.log("precisa dos pais")
    }
} else {
    console.log("pode realizar a matricula")
}