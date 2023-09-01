const express = require ("express");
const router = express.Router();
const con = require("../config/conexion");
const conexion=con.conexionf();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/',(req,res)=>{
sql='select nombre_articulo, sum(cantidad_detalle_venta) as total_venta from articulo as a inner join detalle_venta as dv on a.id_articulo=dv.id_articulo group by dv.id_articulo order by total_venta desc';
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