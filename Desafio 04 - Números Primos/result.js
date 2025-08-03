function isPrime(number) {
    if (!Number.isInteger(number)) {
        return "O número precisa ser inteiro!";
    }

    if (number <= 1) return false;
    if (number === 2) return true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }

    return true;
}
