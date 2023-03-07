const jogada1 = "papel"
const jogada2 = "papel"

if (jogada1 === jogada2) {
    console.log("EMPATE")
} else if (jogada1 === "papel", jogada2 === "tesoura") {
    console.log(`jogada ${jogada2} ganhou`)
} else if (jogada1 === "pedra", jogada2 === "tesoura") {
    console.log(`jogada ${jogada1} ganhou`)
} else if (jogada1 === "papel", jogada2 === "pedra") {
    console.log(`jopgada ${jogada1} ganhou`)
}