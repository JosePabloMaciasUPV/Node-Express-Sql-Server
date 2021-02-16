const controlerClient={};
const path = require('path');
controlerClient.index=(req,res)=>{
    res.sendFile(path.join(__dirname, '../public', 'indexClient.html'));
    //res.sendFile('index.html', { root: path.join(__dirname, '../public') });
    //res.redirect('/public/index.html');

};
controlerClient.bundle=(req,res)=>{
    res.sendFile(path.join(__dirname, '../public', 'clientBundle.js'));
    //res.sendFile('index.html', { root: path.join(__dirname, '../public') });
    //res.redirect('/public/index.html');
};
controlerClient.favicon=(req,res)=>{
    res.sendFile(path.join(__dirname, '../public', 'logojosepabloma_32.png'));
    //res.sendFile('index.html', { root: path.join(__dirname, '../public') });
    //res.redirect('/public/index.html');
};
/*
controlerClient.default=(req,res)=>{
    res.redirect('/');
};*/

module.exports=controlerClient;