/*

Base de datos para pagina Web

*/

CREATE SCHEMA IF NOT EXISTS FARMACIAEPIWEB;
USE FARMACIAEPIWEB;

-- Tabla de Clientes
CREATE TABLE IF NOT EXISTS CLIENTE (
    idCliente INT AUTO_INCREMENT PRIMARY KEY,
    dpi VARCHAR(100),
    nit VARCHAR(100),
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    direccion VARCHAR(75),
    municipio VARCHAR(50),
    departamento VARCHAR(50)
);

-- Tabla de Usuarios para Login
CREATE TABLE IF NOT EXISTS USUARIOS (
    idUserLog INT AUTO_INCREMENT PRIMARY KEY,
    nombreUsuario VARCHAR(225) NOT NULL,
    contrasenaUsuario VARCHAR(225) NOT NULL
);

-- Tabla de Datos de Usuarios
CREATE TABLE IF NOT EXISTS USUARIOSDATOS (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    dpiUser VARCHAR(225) UNIQUE NOT NULL,
    nitUserDatos VARCHAR(100) NOT NULL,
    nombre VARCHAR(225) NOT NULL,
    apellido VARCHAR(225) NOT NULL,
    direccion VARCHAR(150),
    telefono VARCHAR(15),
    genero ENUM('MASCULINO', 'FEMENINO', 'OTRO') DEFAULT NULL,
    cargo VARCHAR(100),
    idUserLog INT,
    FOREIGN KEY (idUserLog) REFERENCES USUARIOS(idUserLog) ON DELETE SET NULL
);

-- Tabla de Tiendas
CREATE TABLE IF NOT EXISTS TIENDAS (
    idTienda INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(225),
    telefono VARCHAR(15),
    ubicacion VARCHAR(225),
    descripcion VARCHAR(250)
);

-- Tabla de Datos de la Tienda
CREATE TABLE IF NOT EXISTS DATOSTIENDA (
    idDatos INT AUTO_INCREMENT PRIMARY KEY,
    idTienda INT,
    titulo VARCHAR(225),
    subtitulo VARCHAR(225),
    descripcion VARCHAR(225),
    horaInicio TIME,
    horaFinal TIME,
    redesSociales VARCHAR(225),
    direccion VARCHAR(225),
    FOREIGN KEY (idTienda) REFERENCES TIENDAS(idTienda) ON DELETE CASCADE
);

-- Tabla de Productos
CREATE TABLE IF NOT EXISTS PRODUCTOS (
    idProducto INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(225) NOT NULL,
    nombre VARCHAR(225) NOT NULL,
    categoria VARCHAR(225),
    descripcion VARCHAR(225),
    proveedor VARCHAR(225),
    marca VARCHAR(225),
    componente VARCHAR(225),
    fechaVencimiento DATE
);

-- Tabla de Inventario
CREATE TABLE IF NOT EXISTS INVENTARIO (
    idInventario INT AUTO_INCREMENT PRIMARY KEY,
    idTienda INT NOT NULL,
    idProducto INT NOT NULL,
    fechaIngreso DATE,
    cantidad INT,
    precioUnitario DECIMAL(10,2),
    FOREIGN KEY (idTienda) REFERENCES TIENDAS(idTienda) ON DELETE CASCADE,
    FOREIGN KEY (idProducto) REFERENCES PRODUCTOS(idProducto) ON DELETE CASCADE,
    UNIQUE (idTienda, idProducto)
);

-- Tabla de Ventas
CREATE TABLE IF NOT EXISTS VENTAS (
    idVenta INT AUTO_INCREMENT PRIMARY KEY,
    idUsuario INT,
    idCliente INT,
    fecha DATE,
    hora TIME,
    total DECIMAL(10,2),
    estado ENUM('COMPLETADA', 'CANCELADA', 'PENDIENTE') DEFAULT 'PENDIENTE',
    FOREIGN KEY (idCliente) REFERENCES CLIENTE(idCliente) ON DELETE SET NULL,
    FOREIGN KEY (idUsuario) REFERENCES USUARIOS(idUserLog) ON DELETE SET NULL
);

-- Tabla de Detalle de Ventas
CREATE TABLE IF NOT EXISTS DETALLEVENTAS (
    idDetalle INT AUTO_INCREMENT PRIMARY KEY,
    idVenta INT,
    idProducto INT NOT NULL,
    cantidad INT,
    precio DECIMAL(10,2),
    FOREIGN KEY (idProducto) REFERENCES PRODUCTOS(idProducto) ON DELETE CASCADE,
    FOREIGN KEY (idVenta) REFERENCES VENTAS(idVenta) ON DELETE CASCADE
);

-- Tabla de Facturas
CREATE TABLE IF NOT EXISTS FACTURAS (
    idFactura INT AUTO_INCREMENT PRIMARY KEY,
    idVenta INT,
    idProducto INT NOT NULL,
    idCliente INT,
    idUsuario INT,
    total DECIMAL(10,2),
    fecha DATE,
    hora TIME,
    cantidad INT,
    FOREIGN KEY (idVenta) REFERENCES VENTAS(idVenta) ON DELETE CASCADE,
    FOREIGN KEY (idProducto) REFERENCES PRODUCTOS(idProducto) ON DELETE CASCADE,
    FOREIGN KEY (idCliente) REFERENCES CLIENTE(idCliente) ON DELETE SET NULL,
    FOREIGN KEY (idUsuario) REFERENCES USUARIOSDATOS(idUsuario) ON DELETE SET NULL
);

-- Tabla de Devoluciones
CREATE TABLE IF NOT EXISTS DEVOLUCIONES (
    idDevolucion INT AUTO_INCREMENT PRIMARY KEY,
    idVenta INT,
    idProducto INT NOT NULL,
    idUsuario INT,
    idCliente INT,
    cantidad INT,
    fecha DATE,
    hora TIME,
    FOREIGN KEY (idVenta) REFERENCES VENTAS(idVenta) ON DELETE SET NULL,
    FOREIGN KEY (idProducto) REFERENCES PRODUCTOS(idProducto) ON DELETE CASCADE,
    FOREIGN KEY (idCliente) REFERENCES CLIENTE(idCliente) ON DELETE SET NULL,
    FOREIGN KEY (idUsuario) REFERENCES USUARIOS(idUserLog) ON DELETE SET NULL
);


--Datos para probar:
-- Insertar en la tabla USUARIOS
INSERT INTO USUARIOS (nombreUsuario, contrasenaUsuario) VALUES
('admin', 'admin123'),
('user', 'user456');

-- Insertar en la tabla USUARIOSDATOS
INSERT INTO USUARIOSDATOS (dpiUser, nitUserDatos, nombre, apellido, direccion, telefono, genero, cargo, idUserLog) VALUES
('1234567890101', '1234567-8', 'admin', 'admin', 'Zona 1, Ciudad', '55551234', 'MASCULINO', 'Administrador', 1),
('9876543210012', '7654321-9', 'user', 'admin', 'Zona 10, Ciudad', '55556789', 'FEMENINO', 'Secretaria', 2);
