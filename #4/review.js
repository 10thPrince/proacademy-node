const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Please enter your name: ", (name) => {
    console.log("Your name is " + name);
    rl.close();
})

rl.on('close', ()=>{
    console.log('Goodbye!');
})