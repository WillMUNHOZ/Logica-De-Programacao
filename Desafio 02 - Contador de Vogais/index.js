function vowelCounter(string) {
    const vowels = ["a", "e", "i", "o", "u"];

    let count = 0

    const lowerCaseString = string.toLowerCase();

    const split = lowerCaseString.split("");

    for (let i = 0; i < split.length; i++) {
        vowels.forEach(vowel => {
            if (vowel === split[i]) {
                count++
            }
        });
    };

    return count;
};

console.log(vowelCounter("WILLIAM"));