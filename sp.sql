-- SP Editar Empleado
USE company;

DELIMITER $$
USE company$$

CREATE PROCEDURE employeeEdit(
  IN _id INT,
  IN _name VARCHAR(45),
  IN _salary INT
)
BEGIN
	UPDATE employee
    SET
    nombre = _name,
    salario = _salary
    WHERE id = _id;
END

-- SP Agregar Empleado

DELIMITER $$
USE company$$

CREATE PROCEDURE employeeAdd(
  IN _id INT,
  IN _name VARCHAR(45),
  IN _salary INT
)
BEGIN 
  INSERT INTO employee (nombre, salario) VALUES (_name, _salary);
END