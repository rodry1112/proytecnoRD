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
INSERT INTO persona (id_persona,nombres,apellidoMaterno,apellidoPaterno,ci,direccion,celular,email) 
VALUES (1,'daher basilio','arevalo','quinteros',846780,'domigo savio',7715151,'algo@noseque');
INSERT INTO persona (id_persona,nombres,apellidoMaterno,apellidoPaterno,ci,direccion,celular,email) 
VALUES (2,'rodrigo','barjona','nose',262515,'algun lugar',7715152,'algo2@noseque');
create table ingreso(
id_ingreso int primary key not null,
id_usuario int,
foreign key(id_usuario) references usuario(id_usuario),
comprobante_ingreso varchar(50)  null,
fecha_de_ingreso datetime not null,
total_ingreso decimal(11,2) not null,
estado_ingreso varchar(20) not null
);
use tiendademascotassinsajoazul;
INSERT INTO ingreso (id_ingreso, id_usuario,comprobante_ingreso,fecha_de_ingreso,total_ingreso,estado_ingreso) 
VALUES (1, 2,'asd1','2023-08-23 14:30:00',11,'buen estado');
INSERT INTO ingreso (id_ingreso, id_usuario,comprobante_ingreso,fecha_de_ingreso,total_ingreso,estado_ingreso) 
VALUES (2, 3,'abc123','2023-08-23 14:30:00',11,'buen estado');
INSERT INTO ingreso (id_ingreso, id_usuario,comprobante_ingreso,fecha_de_ingreso,total_ingreso,estado_ingreso) 
VALUES (3, 2,'jhf156','2023-08-23 14:30:00',11,'buen estado');
use tiendademascotassinsajoazul;
create table venta(
id_venta int primary key not null,
id_persona int,
foreign key (id_persona) references persona(id_persona),
comprobante_venta varchar(50) not null,
fecha_hora_venta datetime not null
);
use tiendademascotassinsajoazul;
INSERT INTO venta (id_venta, id_persona,comprobante_venta,fecha_hora_venta) 
VALUES (3, 2,'aiebnwe','2022-03-23 10:30:00');
INSERT INTO venta (id_venta, id_persona,comprobante_venta,fecha_hora_venta) 
VALUES (1, 2,'asd1','2023-08-23 14:30:00');
INSERT INTO venta (id_venta, id_persona,comprobante_venta,fecha_hora_venta) 
VALUES (2, 1,'jkg12','2023-08-23 14:30:00');
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
VALUES (1,1,'alf 323','collar',11,2,'collar para gatos',1);
INSERT INTO articulo (id_articulo, id_categoria,codigo_articulo,nombre_articulo,precio_venta_articulo,stock_articulo,descripcion_artuculo,estado_articulo) 
VALUES (2,2,'alf 324','collar',11,2,'collar para perros',1);
INSERT INTO articulo (id_articulo, id_categoria,codigo_articulo,nombre_articulo,precio_venta_articulo,stock_articulo,descripcion_artuculo,estado_articulo) 
VALUES (3,3,'cas 324','casa fachera',8,0,'casa perro',0);
INSERT INTO articulo (id_articulo, id_categoria,codigo_articulo,nombre_articulo,precio_venta_articulo,stock_articulo,descripcion_artuculo,estado_articulo) 
VALUES (4,3,'cas 325','casita facherita',5,0,'casita perrito',0);

create table detalle_ingreso(
id_detalle_ingreso int primary key not null,
id_ingreso int,
foreign key (id_ingreso) references ingreso(id_ingreso),
id_articulo int,
foreign key (id_articulo) references articulo(id_articulo),
cantidad_detalle_ingreso int not null,
precio_detalle_ingreso decimal (11,2) not null
);
use tiendademascotassinsajoazul;
INSERT INTO detalle_ingreso (id_detalle_ingreso, id_ingreso,id_articulo,cantidad_detalle_ingreso) 
VALUES (1,1,1,3,11);
create table detalle_venta(
id_detalle_venta int primary key not null,
id_venta int,
foreign key(id_venta) references venta(id_venta),
id_articulo int,
foreign key (id_articulo) references articulo(id_articulo),
cantidad_detalle_venta int not null,
precio_detalle_venta decimal(11,2)not null,
id_usuario int,
foreign key(id_usuario) references usuario(id_usuario)
);
use tiendademascotassinsajoazul;
INSERT INTO detalle_venta (id_detalle_venta, id_venta,id_articulo,cantidad_detalle_venta,precio_detalle_venta,id_usuario) 
VALUES (1,1,1,3,11,1);
INSERT INTO detalle_venta (id_detalle_venta, id_venta,id_articulo,cantidad_detalle_venta,precio_detalle_venta,id_usuario) 
VALUES (2,2,1,2,11,2);
INSERT INTO detalle_venta (id_detalle_venta, id_venta,id_articulo,cantidad_detalle_venta,precio_detalle_venta,id_usuario) 
VALUES (3,3,2,3,42,3);
INSERT INTO detalle_venta (id_detalle_venta, id_venta,id_articulo,cantidad_detalle_venta,precio_detalle_venta,id_usuario) 
VALUES (4,3,3,3,42,3);
INSERT INTO detalle_venta (id_detalle_venta, id_venta,id_articulo,cantidad_detalle_venta,precio_detalle_venta,id_usuario) 
VALUES (5,3,4,8,30,1);
select * from venta;
/*-----vistas----*/
select * from articulo;
select * from persona as p inner join venta as v on p.id_persona=v.id_persona order by fecha_hora_venta desc;
SELECT (@row_number:= @row_number + 1) AS ficha,nombres,apellidoMaterno,apellidoPaterno,fecha_hora_venta from persona as p inner join venta as v on p.id_persona=v.id_persona,(select @row_number:=0 ) as dummy order by fecha_hora_venta desc;
select nombre_articulo, sum(cantidad_detalle_venta) as total_venta from articulo as a inner join detalle_venta as dv on a.id_articulo=dv.id_articulo group by dv.id_articulo order by total_venta desc;
/**/
select nombre_categoria, sum(cantidad_detalle_venta) as total_venta from articulo as a inner join detalle_venta as dv on a.id_articulo=dv.id_articulo inner join categoria as c on a.id_categoria=c.id_categoria group by a.id_categoria order by total_venta desc;
/**/
select nombres,apellidoPaterno,apellidoMaterno, sum(precio_detalle_venta) as total_rentable from persona as p inner join venta as v on p.id_persona=v.id_persona inner join detalle_venta as dv on v.id_venta=dv.id_venta group by p.id_persona order by total_rentable desc limit 10;
/**/
select nombres,apellidoPaterno,apellidoMaterno,fecha_hora_venta from persona as p inner join venta as v on p.id_persona=v.id_persona inner join detalle_venta as dv on v.id_venta=dv.id_venta where fecha_hora_venta between '2022-01-03' and'2022-12-03';
/**/