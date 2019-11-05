const express = require('express');
const app = express();


//route handler
app.get('/',(req, res) => {
    res.send({hi: 'dude'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
