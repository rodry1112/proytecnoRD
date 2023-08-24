const express = require("express");

const mysql = require('mysql2');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '10905460Lp'/*contraseña de my sql */ ,
    database: 'tiendademascotassinsajoazul'
});
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
/*-------------------------------*/
app.post('/articulo', (req, res) => {
    
        data={ id_articulo:0,
            id_categoria: req.body.id_categoria,
         codigo_articulo: req.body.codigo_articulo,
         nombre_articulo: req.body.nombre_articulo,
        precio_venta_articulo: req.body.precio_venta_articulo,
         stock_articulo: req.body.estado_articulo,
         descripcion_articulo:req.body.descripcion_articulo,
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
    let sql = 'SELECT * FROM articulo';
    conexion.query(sql, (err, resul) => {
        if(err){
            console.log(err.message);
            res.json({mensaje: 'Error inesperado'});
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
/*----daher */
app.get("/rolprod",(req,res)=>{
    let sql= 'Select * FROM rol';
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

app.post('/rolprod', (req, res) => {
    data = {
        id_rol: 0,
        nombre_rol: req.body.nombre_rol,
        descripcion_rol: req.body.descripcion_rol
    };
    generarnuevoidar((err,newId)=>{
        if(err){
            res.json({mensaje:'error inesperado'});
        } else {
        data.id_rol=newId;
            let sql = "INSERT INTO rol SET ? ";
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
            let getLastIdQuery = "SELECT MAX(id_rol) AS lastId FROM rol";
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

//*get//*

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
        id_usuario:0,
        id_rol: req.body.id_rol,
        nombres_usuario: req.body.nombres_usuario,
        apellidos_usuario: req.body.apellidos_usuario,
        ci_usuario: req.body.ci_usuario,
        direccion_usuario: req.body.direccion_usuario,
        celular_usuario: req.body.celular_usuario,
        email_usuario: req.body.email_usuario,
        contrsela_usuario: req.body.contrsela_usuario,
    }
    generarnuevoidus((err,newId)=>{
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
        function generarnuevoidus(  callback) {
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


conexion.connect((err) => {
    if (err){
        throw err;
    }else{
        console.log("Connexion exitosa");
    }
});

app.listen(3000, () => {
    console.log("servidor Ok en puerto 3000");
});
