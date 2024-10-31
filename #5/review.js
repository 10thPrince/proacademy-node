const fs = require('fs');

let textIn =  fs.readFileSync('./Files/input.txt', 'utf-8');
console.log(textIn);

let content = `This is the read text ${textIn} \nDate done ${new Date()}`
fs.writeFileSync('./Files/out.txt', content)