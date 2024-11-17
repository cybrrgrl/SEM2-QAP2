function snake(value) {
  return value
    .trim()                    // Step 1: Remove leading/trailing whitespace
    .replace(/[\s.]+/g, '_')   // Step 2: Replace spaces, tabs, and dots with '_'
    .toLowerCase();            // Step 3: Convert the string to lowercase
}

// Test cases
console.log(snake('abc'));            // 'abc'
console.log(snake(' ABC '));          // 'abc'
console.log(snake('ABC'));            // 'abc'
console.log(snake('A BC'));           // 'a_bc'
console.log(snake(' A bC  '));        // 'a_bc'
console.log(snake('A   BC'));         // 'a_bc'
console.log(snake('A.BC'));           // 'a_bc'
console.log(snake(' A..  B   C '));   // 'a_b_c'
