const { add, subtract, multiply, divide } = require('./calculator');

console.log('Testing add:', add(2, 3) === 5 ? 'PASS' : 'FAIL');
console.log('Testing subtract:', subtract(5, 3) === 2 ? 'PASS' : 'FAIL');
console.log('Testing multiply:', multiply(4, 3) === 12 ? 'PASS' : 'FAIL');
console.log('Testing divide:', divide(10, 2) === 5 ? 'PASS' : 'FAIL');

// Test divide by zero
try {
    divide(10, 0);
    console.log('Testing divide by zero: FAIL (no error thrown)');
} catch (e) {
    console.log('Testing divide by zero:', e.message === 'Cannot divide by zero' ? 'PASS' : 'FAIL');
}
