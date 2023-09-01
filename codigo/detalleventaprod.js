const express = require ("express");
const router = express.Router();
const con = require("../config/conexion");
const conexion=con.conexionf();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));


//*get//*

router.get("/",(req,res)=>{
    let sql= 'Select * FROM detalle_venta';
    conexion.query(sql,(err,resul)=>{
        if(err){
           console.log(err.message);
           res.json({mensaje:'Error insperado'});
        }else{
            res.json(resul);
        }
        });
    });
    router.post("/",(req,res)=>{
        data={
            id_detalle_venta:0,
            id_venta:req.body.id_venta,
            id_articulo:req.body.id_articulo,
            cantidad_detalle_venta:req.body.cantidad_detalle_venta,
            precio_detalle_venta:req.body.precio_detalle_venta
        }
        generarnuevoiddetv((err,newId)=>{
            if(err){
                res.json({mensaje:'error inesperado'});
            } else {
            data.id_detalle_venta=newId;
            let sql = "insert into detalle_venta set ?";
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
    function generarnuevoiddetv(  callback) {
        let getLastIdQuery = "SELECT MAX(id_detalle_venta) AS lastId FROM detalle_venta";
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
    
    let id_detalle_venta= req.params.cod;
    let id_venta= req.body.id_venta;
    let id_articulo= req.body.id_articulo;
    let cantidad_detalle_venta= req.body.cantidad_detalle_venta;
    let precio_detalle_venta= req.body.precio_detalle_venta

    let sql= "Update detalle_venta set id_venta=?,id_articulo=?,cantidad_detalle_venta=?,precio_detalle_venta=? where id_detalle_venta=?";
    
    conexion.query(sql, [id_venta,id_articulo,cantidad_detalle_venta,precio_detalle_venta,id_detalle_venta], (err,resul)=>{
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
    let sql='DELETE FROM detalle_venta where id_detalle_venta=?';
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