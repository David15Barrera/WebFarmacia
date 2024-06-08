/*

Base de datos para pagina Web

*/

CREATE SCHEMA IF NOT EXISTS FARMACIAEPIWEB;

USE FARMACIAEPIWEB;

CREATE TABLE IF NOT EXISTS CLIENTE (
    idclient INT AUTO_INCREMENT,
    dpi VARCHAR(100),
    nit VARCHAR(100),
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    direccion VARCHAR(75),
    municipio VARCHAR(50),
    departamento VARCHAR(50),
    PRIMARY KEY(idclient)
);

CREATE TABLE IF NOT EXISTS USUARIOS (
    idUserLog INT AUTO_INCREMENT PRIMARY KEY,
    nombreUserL VARCHAR(225) NOT NULL,
    contraUserL VARCHAR(225) NOT NULL
);

CREATE TABLE IF NOT EXISTS USUARIOSDATOS (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    dpiUser VARCHAR(225) UNIQUE NOT NULL,
    nitUserDatos VARCHAR(100) NOT NULL,
    nombreUser VARCHAR(225) NOT NULL,
    apellidoUser VARCHAR(225) NOT NULL,
    direccionUser VARCHAR(150),
    telefonoUser VARCHAR(8) NOT NULL,
    genero VARCHAR(15),
    cargoUser VARCHAR(100),
    FOREIGN KEY (idUsuario) REFERENCES USUARIOS(idUserLog)
);

CREATE TABLE IF NOT EXISTS TIENDAS (
    idTiendas INT AUTO_INCREMENT,
    nombreTienda VARCHAR(225),
    telefonoTienda VARCHAR(255),
    ubicacion VARCHAR(225),
    descripcionShop VARCHAR(250),
    PRIMARY KEY (idTiendas)
);

CREATE TABLE IF NOT EXISTS DATOSTIENDA (
    idDatos INT AUTO_INCREMENT,
    titulo VARCHAR(225),
    subtitulo VARCHAR(225),
    descripcionT VARCHAR(225),
    horaInicio VARCHAR(10),
    horaFinal VARCHAR(5),
    redes VARCHAR(225),
    direccion VARCHAR(225),
    PRIMARY KEY (idDatos)
);

CREATE TABLE IF NOT EXISTS PRODUCTOS (
    idProducto INT AUTO_INCREMENT,
    codProd VARCHAR(225) NOT NULL,
    nameProd VARCHAR(225) NOT NULL,
    categoria VARCHAR(225),
    descripcion VARCHAR(225),
    provedor VARCHAR(225),
    marca VARCHAR(225),
    componente VARCHAR(225),
    fechaVen DATE,
    PRIMARY KEY (idProducto)
);

CREATE TABLE IF NOT EXISTS INVENTARIO (
    idInventario INT AUTO_INCREMENT,
    idTienda INT NOT NULL,
    idProducto INT NOT NULL,
    fechaIngreso DATE,
    cantidadExistencia INT,
    precioUnitario DOUBLE,
    PRIMARY KEY (idInventario),
    FOREIGN KEY (idTienda) REFERENCES TIENDAS(idTiendas),
    FOREIGN KEY (idProducto) REFERENCES PRODUCTOS(idProducto),
    UNIQUE (idTienda, idProducto)
);

CREATE TABLE IF NOT EXISTS VENTAS (
    codigoVentas INT AUTO_INCREMENT,
    idUsuario INT,
    idCliente INT,
    fechaVentas DATE,
    hora TIME,
    total DOUBLE,
    estado VARCHAR(225),
    PRIMARY KEY (codigoVentas),
    FOREIGN KEY (idCliente) REFERENCES CLIENTE(idclient),
    FOREIGN KEY (idUsuario) REFERENCES USUARIOS(idUserLog)
);

CREATE TABLE IF NOT EXISTS DETALLEVENTAS (
    codigoDetVen INT AUTO_INCREMENT,
    codVentaDet INT,
    idProd INT NOT NULL,
    cantidad INT,
    precioProd DOUBLE,
    PRIMARY KEY (codigoDetVen),
    FOREIGN KEY (idProd) REFERENCES PRODUCTOS(idProducto),
    FOREIGN KEY (codVentaDet) REFERENCES VENTAS(codigoVentas)
);

CREATE TABLE IF NOT EXISTS FACTURAS (
    idFacturas INT AUTO_INCREMENT,
    idVentasFac INT,
    idProdFac INT NOT NULL,
    idClienteFac INT,
    idUsuarioFac INT,
    totalFac DECIMAL,
    fechaFac DATE,
    horaFac TIME,
    cantidadFac INT,
    PRIMARY KEY (idFacturas),
    FOREIGN KEY (idVentasFac) REFERENCES VENTAS(codigoVentas),
    FOREIGN KEY (idProdFac) REFERENCES PRODUCTOS(idProducto),
    FOREIGN KEY (idClienteFac) REFERENCES CLIENTE(idclient),
    FOREIGN KEY (idUsuarioFac) REFERENCES USUARIOSDATOS(idUsuario)
);

CREATE TABLE IF NOT EXISTS DEVOLUCIONES (
    idDevoluciones INT AUTO_INCREMENT,
    codVentasDev INT,
    idProdDev INT NOT NULL,
    idUsuarioDev INT,
    idClienteDev INT,
    cantidadDev INT,
    fechaDev DATE,
    horaDev TIME,
    PRIMARY KEY (idDevoluciones),
    FOREIGN KEY (codVentasDev) REFERENCES VENTAS(codigoVentas),
    FOREIGN KEY (idProdDev) REFERENCES PRODUCTOS(idProducto),
    FOREIGN KEY (idClienteDev) REFERENCES CLIENTE(idclient),
    FOREIGN KEY (idUsuarioDev) REFERENCES USUARIOS(idUserLog)
);
