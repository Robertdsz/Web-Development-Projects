import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const password = 'iLoveProgramming';
const passwordStatus = false;

app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req, res, next) {
    if (req.body["password"] === password) {
        passwordStatus = true;
    }
    next();
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(checkPassword);

app.post('/check', (req, res) => {
    if (passwordStatus) {
        res.sendFile(__dirname + '/public/secret.html');
    } else {
        res.sendFile(__dirname + '/public/index.html');
    }
});