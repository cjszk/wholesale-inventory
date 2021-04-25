const express = require('express');
const router = express.Router();

// Example of how to get all employees from the employees table
router.get('/employees', (req, res, next) => {
    const employees = [];
    
    // TODO: Write the SQL query and return results
});

// Example of how to get a specific employee ID from the employees table.
router.get('/employees/:id', (req, res, next) => {
    const { id } = req.params;

    // TODO: Write the SQL query and return results
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

    // TODO: Write the SQL query and return a result of true/false depending on post result
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

    // TODO: Write the SQL query and return results
});

router.delete('/employees/:id', (req, res, next) => {
    const { id } = req.params;

    // TODO: Write the SQL query that deletes the employee and return result as a boolean
});

module.exports = router;