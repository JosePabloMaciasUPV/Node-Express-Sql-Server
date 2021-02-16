//Se inicia el router
const express=require('express');
const router=express.Router();
//Rutas o controladores

const client=require('../controlers/client');
const modelTecnoDual=require('../controlers/especificProyectControler/tecnoDual');
module.exports=app=>{
    
    router.get('/',client.index);
    router.get('/clientBundle.js',client.bundle);
    router.get('/favicon.ico',client.favicon);
    router.post('/clientes',modelTecnoDual.registrarUsuario);
    router.post('/login',modelTecnoDual.comprobarLogin);
    router.get('/obtenerCategorias',modelTecnoDual.enviarCategoras);
    router.post('/categoria',modelTecnoDual.consultarCategoria);
    //router.post('/comprar',modelTecnoDual.clienteCompra);
    //router.post('/pedidos',modelTecnoDual.mostrarPedidos);
    //router.get('*',client.default);
    app.use(router);

}
