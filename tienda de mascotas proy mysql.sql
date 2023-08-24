create schema tiendademascotassinsajoazul;

use tiendademascotassinsajoazul;
create table rol(
id_rol int  primary key not null,/*id auto*/
nombre_rol varchar(30) not null,
descripcion_rol varchar(100) null
);
create table usuario(
id_usuario int  primary key not null,
id_rol int,
 foreign key (id_rol) references rol(id_rol),
 nombres_usuario varchar(30) not null,
 apellidos_usuario varchar(60) null,
 ci_usuario int null,
 direccion_usuario varchar(70) null,
 celular_usuario int null,
 email_usuario varchar(70) null,
 contrsela_usuario varchar(70)null
);
create table ingreso(
id_ingreso int primary key not null,
id_usuario int,
foreign key(id_usuario) references usuario(id_usuario),
comprobante_ingreso varchar(50)  null,
fecha_de_ingreso datetime not null,
total_ingreso decimal(11,2) not null,
estado_ingreso varchar(20) not null
);
create table venta(
id_venta int primary key not null,/*id auto*/
id_usuario int,
foreign key (id_usuario) references usuario(id_usuario),
comprobante_venta varchar(50) not null,
fecha_hora_venta datetime not null,
total_venta decimal(11,2) not null
);

create table categoria(
id_categoria int primary key not null,/*id auto*/
nombre_categoria varchar(50) not null,
descripcion_categoria varchar(50) null,
estado_categoria tinyint(1)/*nuevo 1, de segunda mano 2, donaciones 3, de uso continuo 4*/ 
);
create table articulo(
id_articulo int primary key not null,/*id auto*/
id_categoria int,
foreign key (id_categoria) references categoria(id_categoria),
codigo_articulo varchar(50) null,
nombre_articulo varchar(100) not null,
precio_venta_articulo decimal(11,2)not null,
stock_articulo int not null,
descripcion_articulo varchar(256) null,
estado_articulo tinyint(1) not null/*nuevo 1, de segunda mano 2, donaciones 3*/ 
);
create table detalle_ingreso(
id_detalle_ingreso int primary key not null,
id_ingreso int,
foreign key (id_ingreso) references ingreso(id_ingreso),
id_articulo int,
foreign key (id_articulo) references articulo(id_articulo),
cantidad_detalle_ingreso int not null,
precio_detalle_ingreso decimal (11,2) not null
);
create table detalle_venta(
id_detalle_venta int primary key not null,
id_venta int,
foreign key(id_venta) references venta(id_venta),
id_articulo int,
foreign key (id_articulo) references articulo(id_articulo),
cantidad_detalle_venta int not null,
precio_detalle_venta decimal(11,2)not null
)