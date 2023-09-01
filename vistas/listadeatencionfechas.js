const express = require ("express");
const router = express.Router();
const con = require("../config/conexion");
const conexion=con.conexionf();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/',(req,res)=>{
    sql='SELECT nombres,apellidoMaterno,apellidoPaterno,fecha_hora_venta from persona as p inner join venta as v on p.id_persona=v.id_persona order by fecha_hora_venta asc';
    conexion.query(sql,(err,resul)=>{
        if(err){
           console.log(err.message);
           res.json({mensaje:'Error insperado'});
        }else{
            res.json(resul);
        }
        });


});
module.exports=router;