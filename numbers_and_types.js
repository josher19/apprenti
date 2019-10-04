console.log(`There are a few gotcha with Numbers in JavaScript
Can you find the bug without a Debugger?
- With a Debugger?
- With Unit Tests?
- With console.log and altering the source code?

`)

const sep = () => console.log('\n--')
sep()
console.log('Test your assumptions')
const x = process.argv[2]
console.log('x =', x)
console.log('What is x + x?')
const xx = x + x

sep()
console.log('When is the following false?')
console.log('x * 1/x === 1')
y  = x * 1/x === 1
yy = 1/x * x === 1 // Hint: test boundary conditions
console.log('Hint: would throw an Error in many other languages, including Python')

sep()
console.log('For what value of x is the following always false:')
console.log('x === x')
z = x === x

sep()
console.log('Can you think of n and u so that:')
console.log('n == u && n !== u');

sep()
console.log(`Homework: convert this file to unit tests
How could we use better names for variables? 
😈`)
