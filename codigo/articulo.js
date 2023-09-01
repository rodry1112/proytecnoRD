const express = require ("express");
const router = express.Router();
const con = require("../config/conexion");
const conexion=con.conexionf();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', (req, res) => {
    
    data={ id_articulo:0,
        id_categoria: req.body.id_categoria,
     codigo_articulo: req.body.codigo_articulo,
     nombre_articulo: req.body.nombre_articulo,
    precio_venta_articulo: req.body.precio_venta_articulo,
     stock_articulo: req.body.estado_articulo,
     descripcion_artuculo:req.body.descripcion_artuculo,
     estado_articulo:req.body.estado_articulo,
    }
    generarnuevoidar((err,newId)=>{
        if(err){
            res.json({mensaje:'error inesperado'});
        } else {
        data.id_articulo=newId;
let sql = "INSERT INTO articulo SET ?";
        conexion.query(sql, data, (err, result) => {
            if (err) {
                console.log(err.message);
                res.json({ mensaje: 'Error inesperado' });
            } else {
                    res.json(result);
                }
        });
    }
});
    });

    function generarnuevoidar(callback) {
        // Consulta a la base de datos para obtener el último ID (esto es un ejemplo simplificado)
        let getLastIdQuery = "SELECT MAX(id_articulo) AS lastId FROM articulo";
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
let sql = 'SELECT * FROM articulo';
conexion.query(sql, (err, resul) => {
    if(err){
        console.log(err.message);
        res.json({mensaje: 'Error i ndesperado'});
    }else{
        res.json(resul);
    }
});
});

router.delete('/:artcod',(req,res)=>{
    // eliminacion cascada    
    let sql2='delete from detalle_venta where id_articulo=?';
    let sql3='delete from detalle_ingreso where id_articulo=?'; 
    let sql ='delete from articulo where id_articulo=?';
    conexion.query(sql2, req.params.artcod,(err,resul)=>{
if(err){
    console.log(err.message);
    res.json({mensaje: 'dependencia en la tabla detalle_venta no encontrada'});
}else{
    res.json(resul);
    }
        });
    conexion.query(sql3,req.params.artcod,(err,resul)=>{
        if(err){
            console.log(err.message);
            res.json({mensaje: 'dependencia en la tabla detalle ingreso no encontrada'});
        }else{
            res.json(resul);
            }
    });
    // 
    conexion.query(sql, req.params.artcod, (err,resul)=>{
    if(err){
        console.log(err.message);
        res.json({message:'error inesperado'});
    }else{
        res.json(resul);
    }    
    });
    });

    /*----- */
    router.put('/:artcod',(req,res)=>{
    let id_articulo=req.params.artcod;
    let id_categoria=req.body.id_categoria;
    let codigo_articulo=req.body.codigo_articulo;
    let nombre_articulo=req.body.nombre_articulo;
    let precio_venta_articulo= req.body.precio_venta_articulo;
    let stock_articulo=req.body.stock_articulo;
    let descripcion_artuculo=req.body.descripcion_artuculo;
    let estado_articulo=req.body.estado_articulo;
    let sql='update articulo set id_categoria=?, codigo_articulo=?,nombre_articulo=?,precio_venta_articulo=?,stock_articulo=?,descripcion_artuculo=?,estado_articulo=? where id_articulo=?';
    conexion.query(sql,[id_categoria,codigo_articulo,nombre_articulo,precio_venta_articulo,stock_articulo,descripcion_artuculo,estado_articulo,id_articulo],(err,resul)=>{
    if (err){
        console.log(err.message);
        res.json({message: 'error inesperado'});
    }else{
        res.json(resul);
    }
    });
    });

module.exports = router;