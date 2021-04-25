const express = require('express');
const router = express.Router();

// Example of how to get all products from the products table
router.get('/products', (req, res, next) => {
    const products = [];
    
    // TODO: Write the SQL query and return results
});

// Example of how to get a specific product ID from the products table.
router.get('/products/:id', (req, res, next) => {
    const { id } = req.params;

    // TODO: Write the SQL query and return results
});

// Example of how to add a product to the products table.
router.post('/products', (req, res, next) => {
    const {
        productName,
        productDescription,
        productDepartment,
        mdPrice,
        retailerPrice,
        suggestedRetailPrice
    } = req.body;

    // TODO: Write the SQL query and return a result of true/false depending on post result
});

router.patch('/products/:id', (req, res, next) => {
    const {
        productName,
        productDescription,
        productDepartment,
        mdPrice,
        retailerPrice,
        suggestedRetailPrice
    } = req.body;

    // TODO: Write the SQL query and return results
});

router.delete('/products/:id', (req, res, next) => {
    const { id } = req.params;

    // TODO: Write the SQL query that deletes the product and return result as a boolean
});

module.exports = router;