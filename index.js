const express = require("express");
//const mysql = require('mysql2');
const app = express();
/*exportacion*/
const con = require("./config/conexion");
const conexion=con.conexionf();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//categoria
/*const categoria=require('./codigo/categoria.js');
app.use('/categoria',categoria);*/

/*-------------------------------*/
app.post('/categoria', (req, res) => {
    data = {  
        id_categoria:0,
        nombre_categoria: req.body.nombre_categoria,
        descripcion_categoria: req.body.descripcion_categoria,
        estado_categoria: req.body.estado_categoria
    };
    generarnuevoid((err,newId)=>{
if(err){
    res.json({mensaje:'error inesperado'});
} else {
data.id_categoria=newId;
let sql = "INSERT INTO categoria SET ? ";
conexion.query(sql, data, (err, result) => {
    if (err) {
        console.log(err.message);
        res.json({ mensaje: 'Error inesperado' });
    } else {
        res.json(result);
    }
});
}
});
 });
 /*-------------*/
 function generarnuevoid(callback) {
    // Consulta a la base de datos para obtener el último ID (esto es un ejemplo simplificado)
    let getLastIdQuery = "SELECT MAX(id_categoria) AS lastId FROM categoria";
    conexion.query(getLastIdQuery, (err, result) => {
        if (err) {
            console.log(err.message);
            callback(err, null);
        } else {
            let lastId = result[0].lastId || 0;
            let newId = lastId + 1;
            callback(null, newId);
        }
    });
}
 /*---- */
app.get('/categoria', (req, res) => {
    let sql = 'SELECT * FROM categoria';
    conexion.query(sql, (err, resul) => {
        if(err){
            console.log(err.message);
            res.json({mensaje: 'Error indesperado'});
        }else{
            res.json(resul);
        }
    });
});
app.delete('/delcategoria/:catcod',(req,res)=>{
    let sql ='delete from categoria where id_categoria=?';
    conexion.query(sql, req.params.catcod, (err,resul)=>{
    if(err){
        console.log(err.message);
        res.json({message:'error inesperado'});
    }else{
        res.json(resul);
    }    
    });
});
/*----- */
app.put('/categoria/:catcod',(req,res)=>{
let codigocat=req.params.catcod;
let nombre_categoria=req.body.nombre_categoria;
let descripcion_categoria=req.body.descripcion_categoria;
let estado_categoria=req.body.estado_categoria;
let sql="Update categoria set nombre_categoria=?, descripcion_categoria=?, estado_categoria=? where id_categoria=?";
conexion.query(sql,[nombre_categoria,descripcion_categoria,estado_categoria,codigocat],(err,resul)=>{
    if (err){
        console.log(err.message);
        res.json({message: 'error inesperado'});
    }else{
        res.json(resul);
    }
});
});
/*-------------------------------*/
app.post('/articulo', (req, res) => {
    
        data={ id_articulo:0,
            id_categoria: req.body.id_categoria,
         codigo_articulo: req.body.codigo_articulo,
         nombre_articulo: req.body.nombre_articulo,
        precio_venta_articulo: req.body.precio_venta_articulo,
         stock_articulo: req.body.estado_articulo,
         descripcion_artuculo:req.body.descripcion_artuculo,
         estado_articulo:req.body.estado_articulo,
        }
        generarnuevoidar((err,newId)=>{
            if(err){
                res.json({mensaje:'error inesperado'});
            } else {
            data.id_articulo=newId;
    let sql = "INSERT INTO articulo SET ?";
            conexion.query(sql, data, (err, result) => {
                if (err) {
                    console.log(err.message);
                    res.json({ mensaje: 'Error inesperado' });
                } else {
                        res.json(result);
                    }
            });
        }
    });
        });

        function generarnuevoidar(callback) {
            // Consulta a la base de datos para obtener el último ID (esto es un ejemplo simplificado)
            let getLastIdQuery = "SELECT MAX(id_articulo) AS lastId FROM articulo";
            conexion.query(getLastIdQuery, (err, result) => {
                if (err) {
                    console.log(err.message);
                    callback(err, null);
                } else {
                    let lastId = result[0].lastId || 0;
                    let newId = lastId + 1;
                    callback(null, newId);
                }
            });
        }
         /*---- */
    
app.get('/articulo', (req, res) => {
    let sql = 'SELECT * FROM articulo';
    conexion.query(sql, (err, resul) => {
        if(err){
            console.log(err.message);
            res.json({mensaje: 'Error i ndesperado'});
        }else{
            res.json(resul);
        }
    });
});

app.delete('/delarticulo/:artcod',(req,res)=>{
    let sql ='delete from articulo where id_articulo=?';
    conexion.query(sql, req.params.artcod, (err,resul)=>{
    if(err){
        console.log(err.message);
        res.json({message:'error inesperado'});
    }else{
        res.json(resul);
    }    
    });
});
/*----- */
app.put('/articulo/:artcod',(req,res)=>{
let id_arti=req.params.artcod;
let id_categoria=req.body.id_categoria;
let codigo_articulo=req.body.codigo_articulo;
let nombre_articulo=req.body.nombre_articulo;
let precio_venta_articulo= req.body.precio_venta_articulo;
let stock_articulo=req.body.stock_articulo;
let descripcion_artuculo=req.body.descripcion_artuculo;
let estado_articulo=req.body.estado_articulo;
let sql='update articulo set id_categoria=?, codigo_articulo=?,nombre_articulo=?,precio_venta_articulo=?,stock_articulo=?,descripcion_artuculo=?,estado_articulo=? where id_articulo=?';
conexion.query(sql,[id_categoria,codigo_articulo,nombre_articulo,precio_venta_articulo,stock_articulo,descripcion_artuculo,estado_articulo,id_arti],(err,resul)=>{
    if (err){
        console.log(err.message);
        res.json({message: 'error inesperado'});
    }else{
        res.json(resul);
    }
});
});

/*-------------------------------*/
app.post('/detalleingreso', (req, res) => {
    data={
        id_detalle_ingreso:0,         
      id_ingreso: req.body.id_ingreso,
        id_articulo: req.body.id_articulo,
        cantidad_detalle_ingreso: req.body.cantidad_detalle_ingreso,
       precio_detalle_ingreso: req.body.precio_detalle_ingreso }
       generarnuevoiddetin((err,newId)=>{
        if(err){
            res.json({mensaje:'error inesperado'});
        } else {
        data.id_detalle_ingreso=newId;
    let sql = "INSERT INTO detalle_ingreso set?";
            conexion.query(sql, data, (err, result) => {
                if (err) {
                    console.log(err.message);
                    res.json({ mensaje: 'Error inesperado' });
                } else {
                    res.json(result);
                }
            });
        }});
});
function generarnuevoiddetin(  callback) {
    let getLastIdQuery = "SELECT MAX(id_detalle_ingreso) AS lastId FROM detalle_ingreso";
    conexion.query(getLastIdQuery, (err, result) => {
        if (err) {
            console.log(err.message);
            callback(err, null);
        } else {
            let lastId = result[0].lastId || 0;
            let newId = lastId + 1;
            callback(null, newId);
        }
    });
}
 /*---- */    

app.get('/detalleingreso', (req, res) => {
    let sql = 'SELECT * FROM detalle_ingreso';
    conexion.query(sql, (err, resul) => {
        if(err){
            console.log(err.message);
            res.json({mensaje: 'Error inesperado'});
        }else{
            res.json(resul);
        }
    });
});
/*---------*/ 
app.delete('/deldetalleingreso/:detingcod',(req,res)=>{
    let sql ='delete from detalle_ingreso where id_detalle_ingreso=?';
    conexion.query(sql, req.params.detingcod, (err,resul)=>{
    if(err){
        console.log(err.message);
        res.json({message:'error inesperado'});
    }else{
        res.json(resul);
    }    
    });
});
/*----- */
app.put('/detalleingreso/:detingcod',(req,res)=>{
let id_det=req.params.detingcod;
let id_ingreso=req.body.id_ingreso;
let id_articulo=req.body.id_articulo;
let cantidad_detalle_ingreso=req.body.cantidad_detalle_ingreso;
let precio_detalle_ingreso= req.body.precio_detalle_ingreso;
let sql="update detalle_ingreso set id_ingreso=?,id_articulo=?,cantidad_detalle_ingreso=?,precio_detalle_ingreso=? where id_detalle_ingreso=?";
conexion.query(sql,[id_ingreso,id_articulo,cantidad_detalle_ingreso,precio_detalle_ingreso,id_det],(err,resul)=>{
    if (err){
        console.log(err.message);
        res.json({message: 'error inesperado'});
    }else{
        res.json(resul);
    }
});
});

/*--------------- */
app.post('/ingreso', (req, res) => {
    data={
        id_ingreso:0,
     id_usuario: req.body.idusu,
     comprobante_ingreso: req.body.comprobante_ingreso,
     fecha_de_ingreso: req.body.fecha_ingreso,
     total_ingreso: req.body.total_ingreso,
     estado_ingreso:req.body.estado_ingreso
    }
    generarnuevoidin((err,newId)=>{
        if(err){
            res.json({mensaje:'error inesperado'});
        } else {
        data.id_ingreso=newId;
let sql = "INSERT INTO ingreso SET ?";
        conexion.query(sql, data, (err, result) => {
            if (err) {
                console.log(err.message);
                res.json({ mensaje: 'Error inesperado' });
            } else {
                res.json(result);
            }
        });
    }});
    });
    function generarnuevoidin(  callback) {
        let getLastIdQuery = "SELECT MAX(id_ingreso) AS lastId FROM ingreso";
        conexion.query(getLastIdQuery, (err, result) => {
            if (err) {
                console.log(err.message);
                callback(err, null);
            } else {
                let lastId = result[0].lastId || 0;
                let newId = lastId + 1;
                callback(null, newId);
            }
        });
    }

app.get('/ingreso', (req, res) => {
let sql = 'SELECT * FROM ingreso';
conexion.query(sql, (err, resul) => {
    if(err){
        console.log(err.message);
        res.json({mensaje: 'Error i ndesperado'});
    }else{
        res.json(resul);
    }
});
});
/*----- */
app.delete('/delingreso/:ingcod',(req,res)=>{
    let sql ='delete from ingreso where id_ingreso=?';
    conexion.query(sql, req.params.ingcod, (err,resul)=>{
    if(err){
        console.log(err.message);
        res.json({message:'error inesperado'});
    }else{
        res.json(resul);
    }    
    });
});
/*----- */
app.put('/ingreso/:ingcod',(req,res)=>{
let id_ingreso=req.params.ingcod;
let id_persona=req.body.id_persona;
let comprobante_ingreso=req.body.comprobante_ingreso;
let fecha_de_ingreso=req.body.fecha_de_ingreso;
let total_ingreso=req.body.total_ingreso;
let estado_ingreso=req.body.estado_ingreso;
let sql="update ingreso set id_persona=?,comprobante_ingreso=?,fecha_de_ingreso=?,total_ingreso=?,estado_ingreso=? where id_ingreso=?";
conexion.query(sql,[id_persona,comprobante_ingreso,fecha_de_ingreso,total_ingreso,estado_ingreso,id_ingreso],(err,resul)=>{
    if (err){
        console.log(err.message);
        res.json({message: 'error inesperado'});
    }else{
        res.json(resul);
    }
});
});
/*----*/
/*----daher */
app.get("/usuarioprod",(req,res)=>{
    let sql= 'Select * FROM usuario';
    conexion.query(sql,(err,resul)=>{
        if(err){
           console.log(err.message);
           res.json({mensaje:'Error insperado'});
        }else{
            res.json(resul);
        }
        });
    });

//*post//*

app.post('/usuarioprod', (req, res) => {
    data = {
        id_usuario: 0,
        nombres_usuario: req.body.nombres_usuario,
        cuenta: req.body.cuenta,
        contrasena:req.body,contrasena
    };
    generarnuevoidar((err,newId)=>{
        if(err){
            res.json({mensaje:'error inesperado'});
        } else {
        data.id_usuario=newId;
            let sql = "INSERT INTO usuario SET ? ";
            conexion.query(sql, data, (err, result) => {
                if (err) {
                    console.log(err.message);
                    res.json({ mensaje: 'Error inesperado' });
                } else {
                    res.json(result);
                }
            });
        }});
        });
        function generarnuevoidar(  callback) {
            let getLastIdQuery = "SELECT MAX(id_usuario) AS lastId FROM usuario";
            conexion.query(getLastIdQuery, (err, result) => {
                if (err) {
                    console.log(err.message);
                    callback(err, null);
                } else {
                    let lastId = result[0].lastId || 0;
                    let newId = lastId + 1;
                    callback(null, newId);
                }
            });
        }
/*----------- */
app.delete('/delusuario/:usucod',(req,res)=>{
    let sql ='delete from usuario where id_usuario=?';
    conexion.query(sql, req.params.catcod, (err,resul)=>{
    if(err){
        console.log(err.message);
        res.json({message:'error inesperado'});
    }else{
        res.json(resul);
    }    
    });
});
/*----- */
app.put('/usuario/:usucod',(req,res)=>{
let id_usuario=req.params.usucod;
let nombre_usuario=req.body.nombre_usuario;
let cuenta=req.body.cuenta;
let contrasena=req.body.contrasena;
let sql="update usuario set nombre_usuario=?,cuenta=?,contrasena=? where id_usuario=?";
conexion.query(sql,[nombre_usuario,cuenta,contrasena,id_usuario],(err,resul)=>{
    if (err){
        console.log(err.message);
        res.json({message: 'error inesperado'});
    }else{
        res.json(resul);
    }
});
});
/*------------- */
//*get//*

app.get("/personaprod",(req,res)=>{
    let sql= 'Select * FROM persona';
    conexion.query(sql,(err,resul)=>{
        if(err){
           console.log(err.message);
           res.json({mensaje:'Error insperado'});
        }else{
            res.json(resul);
        }
        });
    });

//*post//*

app.post('/personaprod', (req, res) => {
    data = {
        id_persona:0,
        nombres: req.body.nombres,
        apellidoMaterno: req.body.apellidoMaterno,
        apellidoPaterno: req.body.apellidoPaterno,
        ci: req.body.ci,
        direccion: req.body.direccion,
        celular: req.body.celular,
        email: req.body.email
        
    }
    generarnuevoidperso((err,newId)=>{
        if(err){
            res.json({mensaje:'error inesperado'});
        } else {
        data.id_persona=newId;
            let sql = "INSERT INTO persona SET ? ";
            conexion.query(sql, data, (err, result) => {
                if (err) {
                    console.log(err.message);
                    res.json({ mensaje: 'Error inesperado' });
                } else {
                    res.json(result);
                }
            });
        }});
        });
        function generarnuevoidperso(  callback) {
            let getLastIdQuery = "SELECT MAX(id_persona) AS lastId FROM persona";
            conexion.query(getLastIdQuery, (err, result) => {
                if (err) {
                    console.log(err.message);
                    callback(err, null);
                } else {
                    let lastId = result[0].lastId || 0;
                    let newId = lastId + 1;
                    callback(null, newId);
                }
            });
        }
        /**put */
app.put('/personaprod/:cod',(req,res)=>{
    
    let id_persona= req.params.cod;
    let nombres= req.body.nombres;
    let apellidoMaterno= req.body.apellidoMaterno;
    let apellidoPaterno= req.body.apellidoPaterno;
    let ci= req.body.ci;
    let direccion=req.body.direccion;
    let celular=req.body.celular; 
    let email=req.body.email; 

    let sql= "Update persona set nombres=?,apellidoMaterno=?,apellidoPaterno=?,ci=?,direccion=?,celular=?,email=? where id_persona=?";
    
    conexion.query(sql, [nombres,apellidoMaterno,apellidoPaterno,ci,direccion,celular,email,id_persona], (err,resul)=>{
            if(err){
                console.log(err.message);
                res.json({mensaje:'error inesperado'});
            }else{
                res.json(resul);

            }
    });

});
/**delet */
app.delete('/personaprod/:id', (req,res)=>{
    let sql='DELETE FROM persona where id_persona=?';
    conexion.query(sql, req.params.id,(err,resul)=>{
        if(err){
            console.log(err.message);
            res.json({mensaje:'error inesperado'});
        }else{
            res.json(resul);
        }
    });
});


        //*get//*

app.get("/ventaprod",(req,res)=>{
    let sql= 'Select * FROM venta';
    conexion.query(sql,(err,resul)=>{
        if(err){
           console.log(err.message);
           res.json({mensaje:'Error insperado'});
        }else{
            res.json(resul);
        }
        });
    });

//*post//*

app.post('/ventaprod', (req, res) => {
    data = {
        id_venta:0,
        id_usuario: req.body.id_usuario,
        comprobante_venta: req.body.comprobante_venta,
        fecha_hora_venta: req.body.fecha_hora_venta,
        total_venta: req.body.total_venta,

    }
    generarnuevoidve((err,newId)=>{
        if(err){
            res.json({mensaje:'error inesperado'});
        } else {
        data.id_venta=newId;
            let sql = "INSERT INTO venta SET ? ";
            conexion.query(sql, data, (err, result) => {
                if (err) {
                    console.log(err.message);
                    res.json({ mensaje: 'Error inesperado' });
                } else {
                    res.json(result);
                }
            });
        }});
        });
        function generarnuevoidve(  callback) {
            let getLastIdQuery = "SELECT MAX(id_venta) AS lastId FROM venta";
            conexion.query(getLastIdQuery, (err, result) => {
                if (err) {
                    console.log(err.message);
                    callback(err, null);
                } else {
                    let lastId = result[0].lastId || 0;
                    let newId = lastId + 1;
                    callback(null, newId);
                }
            });
        }
        /**put */
app.put('/ventaprod/:cod',(req,res)=>{
    
    let id_venta= req.params.cod;
    let id_persona= req.body.id_persona;
    let comprobante_venta= req.body.comprobante_venta;
    let fecha_hora_venta= req.body.fecha_hora_venta;
    let total_venta= req.body.total_venta

    let sql= "Update venta set id_persona=?,comprobante_venta=?,fecha_hora_venta=?,total_venta=? where id_venta=?";
    
    conexion.query(sql, [id_persona,comprobante_venta,fecha_hora_venta,total_venta,id_venta], (err,resul)=>{
            if(err){
                console.log(err.message);
                res.json({mensaje:'error inesperado'});
            }else{
                res.json(resul);

            }
    });

});
/**delet */
app.delete('/ventaprod/:id', (req,res)=>{
    let sql='DELETE FROM venta where id_venta=?';
    conexion.query(sql, req.params.id,(err,resul)=>{
        if(err){
            console.log(err.message);
            res.json({mensaje:'error inesperado'});
        }else{
            res.json(resul);
        }
    });
});


//*get//*

app.get("/detalle_ventaprod",(req,res)=>{
    let sql= 'Select * FROM detalle_venta';
    conexion.query(sql,(err,resul)=>{
        if(err){
           console.log(err.message);
           res.json({mensaje:'Error insperado'});
        }else{
            res.json(resul);
        }
        });
    });
    app.post("/detalle_ventaprod",(req,res)=>{
        data={
            id_detalle_venta:0,
            id_venta:req.body.id_venta,
            id_articulo:req.body.id_articulo,
            cantidad_detalle_venta:req.body.cantidad_detalle_venta,
            precio_detalle_venta:req.body.precio_detalle_venta
        }
        generarnuevoiddetv((err,newId)=>{
            if(err){
                res.json({mensaje:'error inesperado'});
            } else {
            data.id_detalle_venta=newId;
            let sql = "insert into detalle_venta set ?";
            conexion.query(sql, data, (err, result) => {
                if (err) {
                    console.log(err.message);
                    res.json({ mensaje: 'Error inesperado' });
                } else {
                    res.json(result);
                }
            });
            }});
    });
    function generarnuevoiddetv(  callback) {
        let getLastIdQuery = "SELECT MAX(id_detalle_venta) AS lastId FROM detalle_venta";
        conexion.query(getLastIdQuery, (err, result) => {
            if (err) {
                console.log(err.message);
                callback(err, null);
            } else {
                let lastId = result[0].lastId || 0;
                let newId = lastId + 1;
                callback(null, newId);
            }
        });
    }
/**put */
app.put('/detalle_ventaprod/:cod',(req,res)=>{
    
    let id_detalle_venta= req.params.cod;
    let id_venta= req.body.id_venta;
    let id_articulo= req.body.id_articulo;
    let cantidad_detalle_venta= req.body.cantidad_detalle_venta;
    let precio_detalle_venta= req.body.precio_detalle_venta

    let sql= "Update detalle_venta set id_venta=?,id_articulo=?,cantidad_detalle_venta=?,precio_detalle_venta=? where id_detalle_venta=?";
    
    conexion.query(sql, [id_venta,id_articulo,cantidad_detalle_venta,precio_detalle_venta,id_detalle_venta], (err,resul)=>{
            if(err){
                console.log(err.message);
                res.json({mensaje:'error inesperado'});
            }else{
                res.json(resul);

            }
    });

});
/**delet */
app.delete('/detalle_ventaprod/:id', (req,res)=>{
    let sql='DELETE FROM detalle_venta where id_detalle_venta=?';
    conexion.query(sql, req.params.id,(err,resul)=>{
        if(err){
            console.log(err.message);
            res.json({mensaje:'error inesperado'});
        }else{
            res.json(resul);
        }
    });
});
app.listen(3000, () => {
    console.log("servidor Ok en puerto 3000");
});
