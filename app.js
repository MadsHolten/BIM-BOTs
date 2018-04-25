const express = require('express');
const bodyParser = require('body-parser');     // To parse HTTP body element
const sh = require('./helpers/async-cmd');             // To execute a shell command
const app = express();

// MIDDLEWARE
app.use(bodyParser.json()); // Parse JSON

// ROUTES

// This listens for GET requests on '/data'
app.get('/data', (req, res) => {

    res.send('Here is some data');

});

// This listens for POST requests on '/square'
app.post('/square', async (req, res) => {
    
    // Save body element to variable data
    const data = req.body.number;
    console.log(res.body);

    // The command to run
    const cmd = `python program.py -s ${data}`;

    // Execute command 
    try{
        let { stdout, stderr } = await sh(cmd);

        // Send result
        res.send(stdout);
    }
    catch(err){

        // Send error if something fails
        res.status(400).send(err);
    }
    
});

// LISTEN ON PORT
app.listen(3000, () => console.log('Example app listening on port 3000!'));

