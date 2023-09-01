const express = require ("express");
const router = express.Router();
const con = require("../config/conexion");
const conexion=con.conexionf();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.post('/', (req, res) => {
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
router.get('/', (req, res) => {
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
router.delete('/:catcod',(req,res)=>{
    let sql2= 'delete from articulo where id_categoria=?';
    let sql ='delete from categoria where id_categoria=?';
    conexion.query(sql2, req.params.catcod, (err,resul)=>{
        if(err){
            console.log(err.message);
            res.json({message:'error inesperado'});
        }else{
            res.json(resul);
        }    
        });
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
router.put('/:catcod',(req,res)=>{
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

module.exports = router;