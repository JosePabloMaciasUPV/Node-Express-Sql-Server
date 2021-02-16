var express = require('express');
const config= require('./server/configExpress');
var app = config(express());


app.listen(
    app.get('port'),()=>{
        console.log('server on port',app.get('port'));

    });
