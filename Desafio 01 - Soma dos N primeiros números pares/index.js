function sumOfPairs(n) {
    const pairs = []
    let total = 0
    let count = 0

    for (let i = 0; i < n; i++) {
        count += 2;
        pairs.push(count);
    };

    total = pairs.reduce((acc, n) => acc + n, 0);

    return console.log(total);
};

sumOfPairs(3);