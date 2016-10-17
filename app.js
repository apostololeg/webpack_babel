'use strict';

const logger = require('morgan');
const express = require('express');
const app = express();
const router = express.Router();

const config = require('./.config.json');
const PORT = process.env.PORT || config.server.port;
const staticOptions = {
    root: __dirname + '/views/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};


app
    .set('port', PORT)
    .set('views', 'view/');

router
    .use(express.static(__dirname + '/public'))
    .use(logger());

router.get('/', (req, res) => {
    res.sendFile('/main.html', staticOptions);
});

// router.get('/block:', (req, res) => {
//     res.sendFile('bundle/' + req.query)
// });

app.use(router);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})
