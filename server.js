const express = require('express'); // import library
const bodyParser = require('body-parser'); // import body parser
const port = 3000;
const app = express(); // use library
const md5 = required('md5');

app.use(bodyParser.json()); // Use body parser

app.listen(port, ()=>{
    console.log('listening on port: ' + port);
}) // listen

app.post('/login',(request, response) =>{

    const loginRequest = request.body;
    console.log("Request Body", JSON.stringify(request.body));
    if (loginRequest.userName == "vredenburgben@gmail.com" && loginRequest.password =="N7T5PpQz!") {
        response.status(200);
        response.send('Welcome');
    } else {
        response.status(401);
        response.send('Unauthorized');
    }
});

app.get('/',(request,response)=>{
    response.send('Hello, welcome to localhost')
}); // response

