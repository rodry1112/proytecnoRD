const express = require ("express");
const router = express.Router();
const con = require("../config/conexion");
const conexion=con.conexionf();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.get('/:fecha1/:fecha2',(req,res)=>{
    let fecha1=req.params.fecha1; 
    let fecha2=req.params.fecha2;
    let sql='select nombres,apellidoPaterno,apellidoMaterno,fecha_hora_venta from persona as p inner join venta as v on p.id_persona=v.id_persona inner join detalle_venta as dv on v.id_venta=dv.id_venta where fecha_hora_venta between ? and ? ';
    conexion.query(sql, [fecha1,fecha2], (err,resul)=>{
        if(err){
            console.log(err.message);
            res.json({mensaje:'error inesperado'});
        }else{
            res.json(resul);

        }
});
});
module.exports=router;