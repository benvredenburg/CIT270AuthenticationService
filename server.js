const express = require('express'); // import library
const port = 3000;
const app = express(); // use library

app.listen(port, ()=>{
    console.log('listening on port: ' + port);
}) // listen

app.get('/',(request,response)=>{
    response.send('Hello, welcome to localhost')
}); // response