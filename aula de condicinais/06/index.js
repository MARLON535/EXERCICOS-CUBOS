const alturaEmCm = 1.74;

if (alturaEmCm <= 1.80) {
    console.log("reprovado")
} else if (alturaEmCm > 1.80 <= 1.85) {
    console.log("libero")
} else if (alturaEmCm >= 1.86 <= 1.95) {
    console.log("ponteiro")
} else if (alturaEmCm >= 1.96 <= 2.05) {
    console.log("oposto")
} else if (alturaEmCm >= 2.06) {
    console.log("central")
}