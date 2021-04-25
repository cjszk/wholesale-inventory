const express = require('express');
const router = express.Router();

// Example of how to get all orders from the orders table
router.get('/orders', (req, res, next) => {
    // TODO: Write the SQL query and return results
    return res.send(
        [
            {
                orderNumber: 123,
                orderDate: "2020-12-20",
                employeeID: 123,
                customerID: 123,
                subTotal: 123.00,
                taxes: 2.00,
                total: 125.00,
            }
        ]
    );
});

// Example of how to get a specific order ID from the orders table.
router.get('/orders/:id', (req, res, next) => {
    const { id } = req.params;

    // TODO: Write the SQL query and return results
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

    // TODO: Write the SQL query and return a result of true/false depending on post result
});

router.patch('/orders/:id', (req, res, next) => {
    const {
        orderDate,
        employeeID,
        customerID,
        subtotal,
        taxes,
        total
    } = req.body;

    // TODO: Write the SQL query and return results
});

router.delete('/orders/:id', (req, res, next) => {
    const { id } = req.params;

    // TODO: Write the SQL query that deletes the order and return result as a boolean
});

module.exports = router;