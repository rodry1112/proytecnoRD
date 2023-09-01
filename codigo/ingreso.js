const express = require ("express");
const router = express.Router();
const con = require("../config/conexion");
const conexion=con.conexionf();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

/*--------------- */
router.post('/', (req, res) => {
    data={
        id_ingreso:0,
     id_usuario: req.body.id_ingreso,
     comprobante_ingreso: req.body.comprobante_ingreso,
     fecha_de_ingreso: req.body.fecha_de_ingreso,
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

router.get('/', (req, res) => {
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
router.delete('/:ingcod',(req,res)=>{
    let sql ='delete from ingreso where id_ingreso=?';
    let sql2 ='delete from detalle_ingreso where id_ingreso=?';
    conexion.query(sql, req.params.ingcod, (err,resul)=>{
    if(err){
        console.log(err.message);
        res.json({message:'error inesperado'});
    }else{
        res.json(resul);
    }    
    });
    conexion.query(sql2, req.params.ingcod, (err,resul)=>{
        if(err){
            console.log(err.message);
            res.json({message:'error inesperado'});
        }else{
            res.json(resul);
        }    
        });
});
/*----- */
router.put('/:ingcod',(req,res)=>{
let id_ingreso=req.params.ingcod;
let id_usuario=req.body.id_persona;
let comprobante_ingreso=req.body.comprobante_ingreso;
let fecha_de_ingreso=req.body.fecha_de_ingreso;
let total_ingreso=req.body.total_ingreso;
let estado_ingreso=req.body.estado_ingreso;
let sql="update ingreso set id_usuario=?,comprobante_ingreso=?,fecha_de_ingreso=?,total_ingreso=?,estado_ingreso=? where id_ingreso=?";
conexion.query(sql,[id_usuario,comprobante_ingreso,fecha_de_ingreso,total_ingreso,estado_ingreso,id_ingreso],(err,resul)=>{
    if (err){
        console.log(err.message);
        res.json({message: 'error inesperado'});
    }else{
        res.json(resul);
    }
});
});
module.exports= router;