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
    
    // Convert to integers and check for negatives
    let result = 0
    let negatives = []
    
    for (let num of numList) {
        if (num.trim()) { // Ignore empty strings from split
            let n = parseInt(num, 10);
            if (n < 0) {
                negatives.push(n);
            }
            result += n;
        }
    }
    
    // Handle negative numbers
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }
    
    return result;
}

// Test cases
console.log(add("")); // 0
console.log(add("1")); // 1
console.log(add("1,5")); // 6
console.log(add("1\n2,3")); // 6
console.log(add("//;\n1;2")); // 3

try {
    console.log(add("1,-2,3,-4"));
} catch (e) {
    console.error(e.message); // negative numbers not allowed -2, -4
}
