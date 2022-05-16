const express = require('express'); // import express library
const bodyParser = require('body-parser'); // import body parser
const md5 = require('md5'); // import md5
const {createClient} = require('redis');
createClient.connect;
const app = express(); // use express library
app.use(bodyParser.json()); // Use body parser
const port = 3000; // define port const variable

app.listen(port, ()=>{
    console.log('listening on port: ' + port);
}) // listen

const validatePassword = async(request, response) => {
    const requestHashedPassword = md5(request.body.password);
    const redisHashedPassword = await redisClient.hget('passwords', request.body.userName);

    const password = await redisClient.hget(request.body.userName);

    if (request.body.userName == 'vredenburgben@gmail.com' && requestHashedPassword == redisHashedPassword) {
        response.status(200);
        response.send('Welcome');
    } else {
        response.status(401);
        response.send('Unauthorized');
    }
}

app.get('/',(request,response)=>{
    response.send('Hello, welcome to localhost')
}); // response