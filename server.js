const express = require('express'); 
const port = 4043; 
const app = express();
const md5 = require('md5');
const bodyParser = require('body-parser');
const {createClient} = require('redis');
const https = require('https');
const fs = require('fs');
const redisClient = createClient(
{
    url: 'redis://default@10.128.0.2',
    }
);

app.use(bodyParser.json());

https.createServer ({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert'),
    passphrase: 'P@ssw0rd',
}, app).listen(port, async ()=>{
    await redisClient.connect();
    console.log('listening on port: ' + port);
})

const validatePassword = async(request, response) => {
    const requestHashedPassword = md5(request.body.password); 
    const redisHashedPassword = await redisClient.hGet('passwords', request.body.userName); 
    //const loginRequest = request.body; 

    if (requestHashedPassword == redisHashedPassword) {
        response.status(200);
        response.send('Welcome');
    } else {
        response.status(401);
        response.send('Unauthorized');
    }
}
app.get('/',(request, response)=>{
    response.send('Hello')
}); 

app.post('/login', validatePassword);

const registerPassword = async(request, response) => {
    const userPassword = md5(request.body.password);
    await redisClient.hSet('passwords', request.body.userName, userPassword);
    response.status(200);
    response.send("User Created");
}

app.post('/signup', registerPassword);