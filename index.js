const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const app = express();



mongoose.connect('mongodb://patel:r12345@ds119323.mlab.com:19323/geeks_database', { useNewUrlParser: true })
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api',routes);

// error handling middleware
app.use(function(err, req, res, next) {
   console.log(err.message);
   res.send(err.message);
});

app.listen(process.env.pipe || 3000, function(){
    console.log('Connected to 3000!');
   
});