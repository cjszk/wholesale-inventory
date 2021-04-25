const express = require('express');
const router = express.Router();

// Example of how to get all warehouses from the warehouses table
router.get('/warehouses', (req, res, next) => {
    // TODO: Write the SQL query and return results
    return res.send(
        [
            {
                warehouseID: 1,
                warehouseName: "Factory",
                streetLineOne: "200th street",
                streetLineTwo: "some place",
                city: "Nowhere",
                state: "Dunno",
                zip: "12434-43",
            }
        ]
    );
});

// Example of how to get a specific warehouse ID from the warehouses table.
router.get('/warehouses/:id', (req, res, next) => {
    const { id } = req.params;

    // TODO: Write the SQL query and return results
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

    // TODO: Write the SQL query and return a result of true/false depending on post result
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

    // TODO: Write the SQL query and return results
});

router.delete('/warehouses/:id', (req, res, next) => {
    const { id } = req.params;

    // TODO: Write the SQL query that deletes the warehouse and return result as a boolean
});

module.exports = router;