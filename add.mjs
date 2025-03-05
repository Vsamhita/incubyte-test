function add(numbers) {
    if (!numbers) return 0;
    
    let delimiter = /,|\n/; // Default delimiters: comma and newline
    
    // Check for custom delimiter
    if (numbers.startsWith("//")) {
        const match = numbers.match(/^\/\/(.+?)\n(.*)/s);
        if (match) {
            delimiter = new RegExp(match[1]);
            numbers = match[2];
        }
    }
    
    // Split numbers by the delimiter
    const numList = numbers.split(delimiter);
    
    let result = 0
    
    for (let num of numList) {
        if (num.trim()) { // Ignore empty strings from split
            let n = parseInt(num, 10);
            result += n;
        }
    }
    
    return result;
}

// Test cases
console.log(add("")); // 0
console.log(add("1")); // 1
console.log(add("1,5")); // 6
console.log(add("1\n2,3")); // 6
console.log(add("//;\n1;2")); // 3

