-- Crear Base de Datos
CREATE DATABASE IF NOT EXISTS company;

USE company;

-- Crear Tabla Employee
CREATE TABLE employee (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(11) DEFAULT NULL, 
  PRIMARY KEY(id)
);

-- Insertar datos de prueba
INSERT INTO employee values 
  (1, 'Ryan Ray', 20000),
  (2, 'Joe McMillan', 40000);

-- Ver los datos insertados
SELECT * FROM employee;