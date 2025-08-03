function ehPalindromo(palavra) {
    const limpa = palavra.toLowerCase();
    const invertida = limpa.split("").reverse().join("");
    return limpa === invertida;
}

console.log(ehPalindromo("ArAra")); // true
