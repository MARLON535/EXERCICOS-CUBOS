const caractere = "y";

if ((caractere === "a") ||
    (caractere === "e") ||
    (caractere === "i") ||
    (caractere === "o") ||
    (caractere === "u") ||
    (caractere === "A") ||
    (caractere === "E") ||
    (caractere === "I") ||
    (caractere === "O") ||
    (caractere === "U")) {
    console.log("vogal")
} else if (caractere >= 0) {
    console.log("numero")
} else {
    console.log("consoante")
}
