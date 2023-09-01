const express = require ("express");
const router = express.Router();
const con = require("../config/conexion");
const conexion=con.conexionf();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.get('/',(req,res)=>{
sql='select nombres,apellidoPaterno,apellidoMaterno, sum(precio_detalle_venta) as total_rentable from persona as p inner join venta as v on p.id_persona=v.id_persona inner join detalle_venta as dv on v.id_venta=dv.id_venta group by p.id_persona order by total_rentable desc limit 10';
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