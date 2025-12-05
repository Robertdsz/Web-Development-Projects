import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const password = 'iLoveProgramming';

app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req, res, next) {
    req.passwordStatus = (req.body.password === password);
    next();
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/check', checkPassword, (req, res) => {
    if (req.passwordStatus) {
        res.sendFile(__dirname + '/public/secret.html');
    } else {
        res.sendFile(__dirname + '/public/index.html');
    }
});

app.listen(port, () => {
    console.log("Port 3000")
})