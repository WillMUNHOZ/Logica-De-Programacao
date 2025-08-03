function isPalindrome(string) {
    const splitString = string.toLowerCase().split("");
    const reverseString = [...splitString].reverse();

    for (const i in splitString) {
        if (splitString[i] !== reverseString[i]) return false
    };
    return true;
};

console.log(isPalindrome("RadAr"));