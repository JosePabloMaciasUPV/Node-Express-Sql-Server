const express=require('express');
const morganLogger=require('morgan');
const routes=require('../routes/rutasExpress');
module.exports= app =>{

    //Configuraciones
    app.use(morganLogger('dev'));
    app.set('port', process.env.PORT || 3000);
    app.use(express.urlencoded({extended:false}));
    app.use(express.json());
    //routes
    routes(app);

    
    return app;
};