let tecnoDual={};
const sql = require('mssql');


var config = {
    user: 'sa',
    password: 'josepablo',
    server: 'localhost', 
    database: 'tecnoDual' ,
    port:1434
};

tecnoDual.registrarUsuario=async (req,res)=>{
    const {nombre,apellido,fecha,correo,contraseña,ciudad,colonia,calle,cp,numInt,numExt}=req.body;
    try{
        let conexion =await sql.connect(config);
        let resultados=await conexion.request()
        .input('nom',sql.VarChar(10),nombre)
        .input('ap',sql.VarChar(10),apellido)
        .input('fecNac',sql.VarChar(10),fecha)
        .input('email',sql.VarChar(30),correo)
        .input('pass',sql.VarChar(10),contraseña)
        .input('city',sql.VarChar(15),ciudad)
        .input('street',sql.VarChar(25),colonia)
        .input('col',sql.VarChar(5),calle)
        .input('codPos',sql.VarChar(10),cp)
        .input('numExterior',sql.VarChar(4),numInt)
        .input('numInterior',sql.VarChar(4),numExt)
        .execute('newClient_proc');
        res.send(res.send({respuesta:"Correcto se logro registrar, Inicie sesión para continuar"}));
        console.log(resultados);
        conexion.close();
    }catch(err){
        console.log(err);
        res.send({ respuesta:err});
    }
}
tecnoDual.comprobarLogin=async (req,res)=>{
    const {username,password}=req.body;
    try{
        let conexion =await sql.connect(config);
        let resultados=await conexion.request()
        .input('email',sql.VarChar(30),username)
        .input('pass',sql.VarChar(10),password)
        .execute('confirmLogin_proc');
        if(resultados.recordset.length>0){
            
            res.send({...resultados.recordset[0],respuesta:"Se encontro un usuario"});
        }
        else{
            
            res.send({respuesta:"No se encontro un usuario"});
         
        }
        
        conexion.close();
    }catch(err){
        console.log(err);
        res.send({ respuesta:err});
    }
}
tecnoDual.enviarCategoras=async(req,res)=>{
    try{
        let conexion=await sql.connect(config);
        let resultados=await conexion.request()
        .execute('obtenerCategorias_proc');

        if(resultados.recordsets.length>0){
            console.log(resultados.recordset);
            res.send(resultados.recordset);
        }
        else{
            res.send([]);
        }
        
        conexion.close();
    }catch(err){
        console.log(err);
        res.send({ respuesta:err});
    }
}
tecnoDual.consultarCategoria=async (req,res)=>{
    const {categoria}=req.body;
    try{
        let conexion =await sql.connect(config);
        let resultados=await conexion.request()
        .input('category',sql.VarChar(100),categoria)
        .execute('showProductsByCategory_proc');
        if(resultados.recordsets.length>0){
            res.send(resultados.recordset);
            console.log(resultados.recordset);

        }
        else{
            console.log("La categoria a la que deseo consultar no cuenta con productos");
            res.send([]);
        }
        
        
        conexion.close();
    }catch(err){
        console.log(err);
        res.send({ respuesta:err});
    }
}
module.exports= tecnoDual;