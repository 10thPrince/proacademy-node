const http = require('http');
const fs = require('fs');
const { error } = require('console');
const url = require('url');

    //#13

const html = fs.readFileSync('./Template/index.html', 'utf-8');

let products = JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8'));

let productListHtml = fs.readFileSync('./Template/product-list.html', 'utf-8');

let productsHtmlArray = products.map((prod)=>{
    let output = productListHtml.replace('{{%IMAGE%}}', prod.productImage);
    output = output.replace('{{%NAME%}}', prod.name);
    output = output.replace('{{%MODELNAME%}}', prod.modeName);
    output = output.replace('{{%MODELNO%}}', prod.modelNumber);
    output = output.replace('{{%SIZE%}}', prod.size);
    output = output.replace('{{%CAMERA%}}', prod.camera);
    output = output.replace('{{%PRICE%}}', prod.price);
    output = output.replace('{{%COLOR%}}', prod.color);
    output = output.replace('{{%ID%}}', prod.id);

    return output;
})


function replaceHtml(){
    
}

//create a server

const server = http.createServer((request, response)=>{
  
    let {query, pathname: path} = url.parse(request.url, true);

    // console.log(x);
    
    //let path  = request.url; 
   // response.end(path);
    if(path === '/' || path.toLowerCase() === '/home'){
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'hello world'
        });
        response.end(html.replace('{{%CONTENT%}}', productListHtml));
    }else if(path.toLowerCase() === '/about'){
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'hello world'
        });
        response.end(html.replace('{{%CONTENT%}}', 'Your are in the About page'));
    }else if(path.toLowerCase() === '/contact'){
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'hello world'
        });
        response.end(html.replace('{{%CONTENT%}}', 'Your are in the Contact page'));
    }else if(path.toLowerCase() === '/products'){
        if(!query.id){
            let productResponseHtml = html.replace('{{%CONTENT%}}', productsHtmlArray.join(','));
            response.writeHead(200, {
                'Content-Type': 'text/html'
            })
            response.end(productResponseHtml);
        }else{
            response.end('This is a product with ID =' + query.id)
        }
        
    }else{
        response.writeHead(404, {
            'Content-Type': 'text/html',
            'my-header': 'hello world'
        });
        response.end(html.replace('{{%CONTENT%}}', 'Error 404: Page not found'));
    }

})

// start the server

server.listen(8000, '127.0.0.1', () => {
    console.log('Server has started!');
    
})