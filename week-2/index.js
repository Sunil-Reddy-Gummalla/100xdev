const express = require('express');
const bodyParser = require('body-parser');

app = express();

app.use(bodyParser.json());

const users = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]
}]

app.get('/', (req, res) => {
    const johnKidneys = users[0].kidneys;
    const noofKidneys = johnKidneys.length;
    const noofHealthyKidneys = johnKidneys.filter((kidney) => kidney.healthy).length;
    
    res.json({johnKidneys, noofHealthyKidneys, noofKidneys});
});

app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Data is Updated"
    });
});

app.put('/', (req, res) => {
    users[0].kidneys.map((kid) => kid.healthy = true);
    res.send("Updated");
});

app.listen('5000', () => {
    console.log('listening on port 5000');
})