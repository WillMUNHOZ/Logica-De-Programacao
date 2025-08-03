function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false
    }
    return true;
};

console.log(isPrime(25));
console.log(Math.sqrt(9));