const express = require('express'); // import express library
const bodyParser = require('body-parser'); // import body parser
const port = 3000; // define port const variable
const app = express(); // use express library
const md5 = require('md5'); // import md5
const redis = require('redis');

const redisClient = redis.createClient();

/*
x Create a redis hashmap in the redis-cli
x hash your password md5.online.com
x install the node-redis library (npm install node-redis)
x require the node-redis library
look up the password in redis when someone calls the ./login endpoint
*/

app.use(bodyParser.json()); // Use body parser

app.listen(port, ()=>{
    console.log('listening on port: ' + port);
}) // listen

app.post('/login',(request, response) =>{
    const requestHashedPassword = md5(request.body.password)
    const redisHashedPassword=redisClient.hget('passwords', request.body.userName)
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


