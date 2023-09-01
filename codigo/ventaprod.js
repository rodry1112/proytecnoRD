const express = require ("express");
const router = express.Router();
const con = require("../config/conexion");
const conexion=con.conexionf();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

        //get//

        router.get("/",(req,res)=>{
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
        
        router.post('/', (req, res) => {
            data = {
                id_venta:0,
                id_usuario: req.body.id_usuario,
                comprobante_venta: req.body.comprobante_venta,
                fecha_hora_venta: req.body.fecha_hora_venta
        
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
        router.put('/:cod',(req,res)=>{
            
            let id_venta= req.params.cod;
            let id_persona= req.body.id_persona;
            let comprobante_venta= req.body.comprobante_venta;
            let fecha_hora_venta= req.body.fecha_hora_venta;
        
            let sql= "Update venta set id_persona=?,comprobante_venta=?,fecha_hora_venta=? where id_venta=?";
            
            conexion.query(sql, [id_persona,comprobante_venta,fecha_hora_venta,id_venta], (err,resul)=>{
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
        
module.exports= router;