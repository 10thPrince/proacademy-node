const http = require('http');
const fs = require('fs');
//#10

const html = fs.readFileSync('./Template/index.html', 'utf-8');
//create a server

const server = http.createServer((request, response)=>{
    response.end(html);
    console.log('A new request received');
    //console.log(response);
    
    
})

// start the server

server.listen(8000, '127.0.0.1', () => {
    console.log('Server has started!');
    
})