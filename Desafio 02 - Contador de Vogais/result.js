function contarVogais(str) {
    const vogais = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (const letra of str.toLowerCase()) {
        if (vogais.includes(letra)) {
            count++;
        }
    }

    return count;
};


function contarVogais(str) {
    return str
        .toLowerCase()
        .split("")
        .filter(letra => "aeiou".includes(letra))
        .length;
};

