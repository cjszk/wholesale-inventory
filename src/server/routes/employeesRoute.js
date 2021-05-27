const express = require('express');
const router = express.Router();
const db = require('../db_connector');

// Example of how to get all employees from the employees table
router.get('/employees', (req, res, next) => {
    const query = `SELECT * FROM EMPLOYEES`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
    // return res.send(
    //     [
    //         {
    //             employeeID: 1,
    //             firstName: "Oompa",
    //             lastName: "Loompa",
    //             type: "dunno",
    //             warehouseID: 2,
    //             email: "someEmail@okay.com",
    //             phoneNumber: "332-342-5342"
    //         },
    //         {
    //             employeeID: 1,
    //             firstName: "Oompa",
    //             lastName: "Loompa",
    //             type: "dunno",
    //             warehouseID: 2,
    //             email: "someEmail@okay.com",
    //             phoneNumber: "332-342-5342"
    //         },
    //         {
    //             employeeID: 1,
    //             firstName: "Oompa",
    //             lastName: "Loompa",
    //             type: "dunno",
    //             warehouseID: 2,
    //             email: "someEmail@okay.com",
    //             phoneNumber: "332-342-5342"
    //         },
    //     ]
    // );
});

// Example of how to get a specific employee ID from the employees table.
router.get('/employees/:id', (req, res, next) => {
    const { id } = req.params;
    const query = `SELECT * FROM Employees
        WHERE Employee_ID = ${id};`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
});

// Example of how to add a employee to the employees table.
router.post('/employees', (req, res, next) => {
    const {
        firstName,
        lastName,
        type,
        warehouseID,
        email,
        phoneNumber
    } = req.body;
    const query = `INSERT INTO Employees (
        First_Name,
        Last_Name,
        Type,
        Warehouse_ID) VALUES
    (${firstName}, ${lastName}, ${type}, ${warehouseID});`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
});

router.patch('/employees/:id', (req, res, next) => {
    const {
        firstName,
        lastName,
        type,
        warehouseID,
        email,
        phoneNumber
    } = req.body;
    const { id } = req.params;
    const query = `UPDATE Employees
        SET
            First_Name = ${firstName},
            Last_Name = ${lastName},
            Type = ${type},
            Warehouse_ID = ${warehouseID}
        WHERE Employee_ID = ${id};
    `;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
});

router.delete('/employees/:id', (req, res, next) => {
    const { id } = req.params;
    const query = `DELETE FROM Employees
        WHERE Employee_ID = ${id};`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
});

module.exports = router;