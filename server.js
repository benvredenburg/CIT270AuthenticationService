const express = require('express'); // import library

const app = express(); // use library

app.listen(3000, ()=>{console.log("listening...")}); // listen

app.get('/',(request,response)=>{response.send('This is a test')}); // respond