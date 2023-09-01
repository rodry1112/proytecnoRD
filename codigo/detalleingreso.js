const express = require ("express");
const router = express.Router();
const con = require("../config/conexion");
const conexion=con.conexionf();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', (req, res) => {
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

router.get('/', (req, res) => {
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
router.delete('/:detingcod',(req,res)=>{
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
router.put('/:detingcod',(req,res)=>{
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

module.exports=router;
