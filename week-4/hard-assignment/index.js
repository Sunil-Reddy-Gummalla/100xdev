const express = require('express');

app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/interest', function (req, res) {
    const amount = req.query.amount;
    const time =  req.query.time;
    const rate =  req.query.rate;
    const interest = (amount * rate * time) / 100;
    res.send({ interest: interest });
});

app.listen('3000', () => {
    console.log('listening on port 3000');
});


