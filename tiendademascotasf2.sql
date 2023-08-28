
create database tiendademascotassinsajoazul;

use tiendademascotassinsajoazul;
create table usuario(
id_usuario int primary key not null,
nombre_usuario varchar(30) not null,
cuenta varchar(15) null,
contrasena varchar(15) null
);
use tiendademascotassinsajoazul;
INSERT INTO usuario (id_usuario, nombre_usuario,cuenta,contrasena) VALUES(1, 'daher','empleado 1','asc356');
INSERT INTO usuario (id_usuario, nombre_usuario,cuenta,contrasena) VALUES(2, 'rodri','empleado 2','ascdf123');
INSERT INTO usuario (id_usuario, nombre_usuario,cuenta,contrasena) VALUES(3, 'nose quien','empleado 3','ascd123');

create table persona( 	
id_persona int primary key not null,
 nombres varchar(30) not null,
 apellidoMaterno varchar(60) null,
 apellidoPaterno varchar(60) null,
 ci int null,
 direccion varchar(70) null,
 celular int null,
 email varchar(70) null
);
use tiendademascotassinsajoazul;
INSERT INTO persona (id_persona,nombres,apellidoMaterno,apellidoPaterno,ci,direccion,celular,email) VALUES (1,'daher basilio','arevalo','quinteros',846780,'domigo savio',7715151,'algo@noseque');
INSERT INTO persona (id_persona,nombres,apellidoMaterno,apellidoPaterno,ci,direccion,celular,email) 
VALUES (2,'rodrigo','barjona','nose',262515,'algun lugar',7715152,'algo2@noseque');
create table ingreso(
id_ingreso int primary key not null,
id_persona int,
foreign key(id_persona) references persona(id_persona),
comprobante_ingreso varchar(50)  null,
fecha_de_ingreso datetime not null,
total_ingreso decimal(11,2) not null,
estado_ingreso varchar(20) not null
);
select * from ingreso;
use tiendademascotassinsajoazul;
INSERT INTO ingreso (id_ingreso, id_persona,comprobante_ingreso,fecha_de_ingreso,total_ingreso,estado_ingreso) 
VALUES (1, 2,'asd1','2023-08-23 14:30:00',11,'buen estado');
INSERT INTO ingreso (id_ingreso, id_usuario,comprobante_ingreso,fecha_de_ingreso,total_ingreso,estado_ingreso) 
VALUES (2, 3,'abc123','2023-08-23 14:30:00',11,'buen estado');
INSERT INTO ingreso (id_ingreso, id_usuario,comprobante_ingreso,fecha_de_ingreso,total_ingreso,estado_ingreso) 
VALUES (3, 2,'jhf156','2023-08-23 14:30:00',11,'buen estado');

create table venta(
id_venta int primary key not null,
id_persona int,
foreign key (id_persona) references persona(id_persona),
comprobante_venta varchar(50) not null,
fecha_hora_venta datetime not null,
total_venta decimal(11,2) not null
);
use tiendademascotassinsajoazul;
INSERT INTO venta (id_venta, id_persona,comprobante_venta,fecha_hora_venta,total_venta) 
VALUES (1, 2,'asd1','2023-08-23 14:30:00',11);
INSERT INTO venta (id_venta, id_persona,comprobante_venta,fecha_hora_venta,total_venta) 
VALUES (2, 1,'jkg12','2023-08-23 14:30:00',8);
INSERT INTO venta (id_venta,id_persona,comprobante_venta,fecha_hora_venta,total_venta) VALUES(3,2,'sd11','2023-08-23 14:30:00',11);
create table categoria(
id_categoria int primary key not null,
nombre_categoria varchar(50) not null,
descripcion_categoria varchar(50) null,
estado_categoria tinyint(1) 
);
use tiendademascotassinsajoazul;
INSERT INTO categoria (id_categoria, nombre_categoria,descripcion_categoria,estado_categoria) 
VALUES (1,'jueguete','jueguete de uso interactivo',1);
INSERT INTO categoria (id_categoria, nombre_categoria,descripcion_categoria,estado_categoria) 
VALUES (2,'accesiorio','accesorio de uso fachero',1);
INSERT INTO categoria (id_categoria, nombre_categoria,descripcion_categoria,estado_categoria) 
VALUES (3,'casas','casa fachero',0);
create table articulo(
id_articulo int primary key not null,
id_categoria int,
foreign key (id_categoria) references categoria(id_categoria),
codigo_articulo varchar(50) null,
nombre_articulo varchar(100) not null,
precio_venta_articulo decimal(11,2)not null,
stock_articulo int not null,
descripcion_artuculo varchar(256) null,
estado_articulo tinyint(1) not null
);
use tiendademascotassinsajoazul;
INSERT INTO articulo (id_articulo, id_categoria,codigo_articulo,nombre_articulo,precio_venta_articulo,stock_articulo,descripcion_artuculo,estado_articulo) 
VALUES (1,2,'alf 323','collar',11,2,'collar para gatos',1);
INSERT INTO articulo (id_articulo, id_categoria,codigo_articulo,nombre_articulo,precio_venta_articulo,stock_articulo,descripcion_artuculo,estado_articulo) 
VALUES (2,2,'alf 324','collar',11,2,'collar para perros',1);
use tiendademascotassinsajoazul;
INSERT INTO articulo (id_articulo, id_categoria,codigo_articulo,nombre_articulo,precio_venta_articulo,stock_articulo,descripcion_artuculo,estado_articulo) 
VALUES (3,3,'cas 324','casa fachera',8,0,'casa perro',0);
create table detalle_ingreso(
id_detalle_ingreso int primary key not null,
id_ingreso int,
foreign key (id_ingreso) references ingreso(id_ingreso),
id_articulo int, 
foreign key (id_articulo) references articulo(id_articulo),
cantidad_detalle_ingreso int not null,
precio_detalle_ingreso decimal (11,2) not null
);
select * from articulo;
use tiendademascotassinsajoazul;
INSERT INTO detalle_ingreso (id_detalle_ingreso, id_ingreso,id_articulo,cantidad_detalle_ingreso,precio_detalle_ingreso) 
VALUES (1,1,1,3,11);
create table detalle_venta(
id_detalle_venta int primary key not null,
id_venta int,
foreign key(id_venta) references venta(id_venta),
id_articulo int,
foreign key (id_articulo) references articulo(id_articulo),
cantidad_detalle_venta int not null,
precio_detalle_venta decimal(11,2)not null
);
use tiendademascotassinsajoazul;
INSERT INTO detalle_venta (id_detalle_venta, id_venta,id_articulo,cantidad_detalle_venta,precio_detalle_venta) 
VALUES (1,1,1,3,11);