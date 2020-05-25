const express = require('express');
const router = express.Router();

const mysqlConnection = require('../bd');

// Empleados
router.get('/empleados', (req, res) => {
    mysqlConnection.query('SELECT * FROM employee', (err, rows) => {
        if (!err) {
            res.json(rows).status(200);
        } else {
            console.log(err);
        }
    });
});

//Solo un empleado
router.get('/empleados/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM employee WHERE id = ?', [id], (err, rows) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//Eliminar un empleado
router.delete('/eliminarEmpleado/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM employee WHERE id = ?', [id], (err) => {
        if (!err) {
            res.json({ codigo: '0', mensaje: 'Empleado Eliminado' }).status(200);
        } else {
            console.log(err);
        }
    });
});

// Agregar empleado
router.post('/agregaEmpleado/', (req, res) => {
    const { id, nombre, salario } = req.body;
    const query = 'CALL employeeAdd(?,?,?)';
    mysqlConnection.query(query, [id, nombre, salario], (err) => {
        if (!err) {
            res.json({ codigo: '0', mensaje: 'Empleado Creado' }).status(201);
        } else {
            res.json({ codigo: '1', mensaje: 'Empleado no creado' }).status(400);
            console.log(err);
        }
    });

});

// Actualizar Empleado
router.put('/actualizarEmpleado/:id', (req, res) => {
    const { nombre, salario } = req.body;
    const { id } = req.params;
    const query = 'CALL employeeEdit(?,?,?)';
    mysqlConnection.query(query, [id, nombre, salario], (err) => {
        if (!err) {
            res.json({ codigo: '0', mensaje: 'Empleado Actualizado' }).status(200);
        } else {
            res.json({ codigo: '1', mensaje: 'No se ha actualizado el Empleado' }).status(400);
            console.log(err);
        }
    });
});

module.exports = router;