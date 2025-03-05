function add(numbers) {
    if (!numbers) return 0;
    
    // Split numbers by the delimiter
    const numList = numbers.split(",");
    let result = 0
    
    for (let num of numList) {
        let n = parseInt(num, 10);
        result += n;
    }
    
    return result;
}

// Test cases
console.log(add("")); // 0
console.log(add("1")); // 1
console.log(add("1,5")); // 6

