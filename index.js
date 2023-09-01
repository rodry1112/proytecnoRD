const express = require("express");
//const mysql = require('mysql2');
const app = express();
/*exportacion*/
const con = require("./config/conexion");
const conexion=con.conexionf();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//categoria
const categoria=require('./codigo/categoria.js');
app.use('/categoria',categoria);
//articulo
const articulo= require('./codigo/articulo');
app.use('/articulo',articulo);
//detalleingreso
const detalleingreso = require('./codigo/detalleingreso.js');
app.use('/detalleingreso',detalleingreso);

//ingreso
const ingreso = require('./codigo/ingreso.js');
app.use('/ingreso',ingreso);
/*-------------------------------*/
/*----daher */
//usuario
const usuario = require('./codigo/usuario.js');
app.use('/usuarioprod',usuario);
//personaprod
const personaprod =require('./codigo/personaprod.js');
app.use('/personaprod',personaprod);
/*------------- */
//venta
const ventaprod = require('./codigo/ventaprod.js');
app.use('/ventaprod',ventaprod);
//detallle_venta
const detalleventa = require('./codigo/detalleventaprod.js');
app.use('/detalle_ventaprod',detalleventa);
// reportes
//listado de atencion por fechas
const listadeatencion =require('./vistas/listadeatencionfechas.js');
app.use('/listadeatencion',listadeatencion);
//articulos mas vendidos
const articulosmasvend=require('./vistas/listaarticulosmasvendidos.js');
app.use('/articulosmasvend',articulosmasvend);
// categoria mas vendida
const categoriamasvend=require('./vistas/listacategoriamasvendidos.js');
app.use('/categoriamasvend',categoriamasvend);
//top 10 clientes rentables
const top10clientesrent=require('./vistas/top10clientesrentables.js');
app.use('/top10clientes',top10clientesrent);
//ventas por periodo de tiempo
const ventaportiempo=require('./vistas/ventaasporperiododetiempo.js');
app.use('/ventasportiempo',ventaportiempo);

app.listen(3000, () => {
    console.log("servidor Ok en puerto 3000");
});
