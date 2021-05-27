const express = require('express');
const router = express.Router();
const db = require('../db_connector');

// Example of how to get all orders from the orders table
router.get('/orders', (req, res, next) => {
    const query = `SELECT * FROM Orders;`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
    // return res.send(
    //     [
    //         {
    //             orderNumber: 123,
    //             orderDate: "2020-12-20",
    //             employeeID: 123,
    //             customerID: 123,
    //             subTotal: 123.00,
    //             taxes: 2.00,
    //             total: 125.00,
    //         },
    //         {
    //             orderNumber: 123,
    //             orderDate: "2020-12-20",
    //             employeeID: 123,
    //             customerID: 123,
    //             subTotal: 123.00,
    //             taxes: 2.00,
    //             total: 125.00,
    //         },
    //         {
    //             orderNumber: 123,
    //             orderDate: "2020-12-20",
    //             employeeID: 123,
    //             customerID: 123,
    //             subTotal: 123.00,
    //             taxes: 2.00,
    //             total: 125.00,
    //         },
    //         {
    //             orderNumber: 123,
    //             orderDate: "2020-12-20",
    //             employeeID: 123,
    //             customerID: 123,
    //             subTotal: 123.00,
    //             taxes: 2.00,
    //             total: 125.00,
    //         },
    //         {
    //             orderNumber: 123,
    //             orderDate: "2020-12-20",
    //             employeeID: 123,
    //             customerID: 123,
    //             subTotal: 123.00,
    //             taxes: 2.00,
    //             total: 125.00,
    //         },
    //         {
    //             orderNumber: 123,
    //             orderDate: "2020-12-20",
    //             employeeID: 123,
    //             customerID: 123,
    //             subTotal: 123.00,
    //             taxes: 2.00,
    //             total: 125.00,
    //         },
    //         {
    //             orderNumber: 123,
    //             orderDate: "2020-12-20",
    //             employeeID: 123,
    //             customerID: 123,
    //             subTotal: 123.00,
    //             taxes: 2.00,
    //             total: 125.00,
    //         },
    //     ]
    // );
});

// Example of how to get a specific order ID from the orders table.
router.get('/orders/:id', (req, res, next) => {
    const { id } = req.params;
    const query = `SELECT * FROM Orders
    WHERE Order_ID = ${id};`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
});

// Example of how to add a order to the orders table.
router.post('/orders', (req, res, next) => {
    const {
        orderDate,
        employeeID,
        customerID,
        subtotal,
        taxes,
        total
    } = req.body;
    const query = `INSERT INTO Orders (
        Order_Date, 
        Employee_ID, 
        Customer_ID, 
        Subtotal, 
        Taxes,
        Total) VALUES
    (
        ${orderDate},
        ${employeeID},
        ${customerID},
        ${subtotal},
        ${taxes},
        ${total},
    );`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
});

router.patch('/orders', (req, res, next) => {
    const {
        orderDate,
        employeeID,
        customerID,
        subtotal,
        taxes,
        total
    } = req.body;
    const { id } = req.params;
    const query = `UPDATE Orders
        SET
            Order_Date = ${orderDate},
            Employee_ID = ${employeeID},
            Customer_ID = ${customerID},
            Subtotal = ${subtotal},
            Taxes = ${taxes},
            Total = ${total},
        WHERE Order_ID = ${id};`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
});

router.delete('/orders/:id', (req, res, next) => {
    const { id } = req.params;
    const query = `DELETE FROM Orders
        WHERE Order_ID = ${id};`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
});

module.exports = router;