const express = require ("express");
const router = express.Router();
const con = require("../config/conexion");
const conexion=con.conexionf();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/',(req,res)=>{
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

router.post('/', (req, res) => {
    data = {
        id_usuario: 0,
        nombre_usuario: req.body.nombre_usuario,
        cuenta: req.body.cuenta,
        contrasena:req.body.contrasena
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
router.delete('/:usucod',(req,res)=>{
    let sql ='delete from usuario where id_usuario=?';
    let sql2='delete from ingreso where id_usuario=?';
    let sql3='delete from detalle_venta id_usuario=?';
    conexion.query(sql2, req.params.usucod , (err,resul)=>{
        if(err){
            console.log(err.message);
            res.json({message:'error inesperado'});
        }else{
            res.json(resul);
        }    
        });
        conexion.query(sql3, req.params.usucod , (err,resul)=>{
            if(err){
                console.log(err.message);
                res.json({message:'error inesperado'});
            }else{
                res.json(resul);
            }    
            });
    conexion.query(sql, req.params.usucod , (err,resul)=>{
    if(err){
        console.log(err.message);
        res.json({message:'error inesperado'});
    }else{
        res.json(resul);
    }    
    });
});
/*----- */
router.put('/:usucod',(req,res)=>{
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

module.exports=router;