const express = require('express');
const router = express.Router();
const db = require('../db_connector');

// Example of how to get all warehouses from the warehouses table
router.get('/warehouses', (req, res, next) => {
    const query = `SELECT * FROM Warehouses;`;

    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });

    // return res.send(
    //     [
    //         {
    //             warehouseID: 1,
    //             warehouseName: "Factory",
    //             streetLineOne: "200th street",
    //             streetLineTwo: "some place",
    //             city: "Nowhere",
    //             state: "Dunno",
    //             zip: "12434-43",
    //         }
    //     ]
    // );
});

// Example of how to get a specific warehouse ID from the warehouses table.
router.get('/warehouses/:id', (req, res, next) => {
    const { id } = req.params;
    const query = `SELECT * FROM Warehouses
        WHERE Warehouse_ID = ${id};`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
    
});

// Example of how to add a warehouse to the warehouses table.
router.post('/warehouses', (req, res, next) => {
    const {
        warehouseName,
        streetLineOne,
        streetLineTwo,
        city,
        state,
        zip
    } = req.body;
    const query = `INSERT INTO Warehouses (
        Warehouse_Name,
        Street_Line_1,
        City,
        State,
        Zip) VALUES
    (
        ${warehouseName},
        ${streetLineOne},
        ${city},
        ${state},
        ${zip},
    );`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
});

router.patch('/warehouses/:id', (req, res, next) => {
    const {
        warehouseName,
        streetLineOne,
        streetLineTwo,
        city,
        state,
        zip
    } = req.body;
    const { id } = req.params;
    const query = `UPDATE Warehouses
        SET
            Warehouse_Name = ${warehouseName},
            Street_Line_1 = ${streetLineOne},
            City = ${city},
            State = ${state},
            Zip = ${zip},
        WHERE Warehouse_ID = ${id};`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
});

router.delete('/warehouses/:id', (req, res, next) => {
    const { id } = req.params;
    const query = `DELETE FROM Warehouses
        WHERE Warehouse_ID = $warehouseID;`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
});

module.exports = router;