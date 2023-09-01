const express = require ("express");
const router = express.Router();
const con = require("../config/conexion");
const conexion=con.conexionf();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//*get//*
router.get("/",(req,res)=>{
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

router.post('/', (req, res) => {
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
router.put('/:cod',(req,res)=>{
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
router.delete('/:id', (req,res)=>{
    let sql='DELETE FROM persona where id_persona=?';
    let sql2='delete from venta where id_persona=?';
    conexion.query(sql2, req.params.id,(err,resul)=>{
        if(err){
            console.log(err.message);
            res.json({mensaje:'error inesperado'});
        }else{
            res.json(resul);
        }
    });
    conexion.query(sql, req.params.id,(err,resul)=>{
        if(err){
            console.log(err.message);
            res.json({mensaje:'error inesperado'});
        }else{
            res.json(resul);
        }
    });
});

module.exports=router;
