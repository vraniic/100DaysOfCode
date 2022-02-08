const { rawListeners } = require('process');
const readline = require('readline')

const tl = readline.createInterface({
    input: process.stdin,
    output: porcess.stdout
});

rawListeners.question('how many disaster victims there are')

// we needa log the answer in data base

console.log('thank you for your answer')

rl.close()