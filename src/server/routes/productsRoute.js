const express = require('express');
const router = express.Router();
const db = require('../db_connector');

// Example of how to get all products from the products table
router.get('/products', (req, res, next) => {
    const query = `SELECT * FROM Products;`;

    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });

    // return res.send(
    //     [
    //         {
    //             productID: 1,
    //             productName: "Chocolate",
    //             productDescription: "Choco choco",
    //             productDepartment: "Dunno",
    //             mdPrice: 125.00,
    //             retailerPrice: 150.00,
    //             suggestedRetailPrice: 200.00,
    //         },
    //         {
    //             productID: 2,
    //             productName: "Chocolate",
    //             productDescription: "Choco choco",
    //             productDepartment: "Dunno",
    //             mdPrice: 125.00,
    //             retailerPrice: 150.00,
    //             suggestedRetailPrice: 200.00,
    //         },
    //         {
    //             productID: 3,
    //             productName: "Chocolate",
    //             productDescription: "Choco choco",
    //             productDepartment: "Dunno",
    //             mdPrice: 125.00,
    //             retailerPrice: 150.00,
    //             suggestedRetailPrice: 200.00,
    //         },
    //     ]
    // );
});

// Example of how to get a specific product ID from the products table.
router.get('/products/:id', (req, res, next) => {
    const { id } = req.params;
    const query = `SELECT * FROM Products 
        WHERE product_id = ${id};`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
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

    const query = `INSERT INTO Products (
            Product_name,
            MD_Price,
            Retailer_Price,
            Suggested_Retail_Price) VALUES
        (
            ${productName},
            ${mdPrice},
            ${retailerPrice},
            ${suggestedRetailPrice},
        )`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
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
    const { id } = req.params;

    const query = `UPDATE Products
        SET
            Product_name = ${productName},
            MD_Price = ${mdPrice},
            Retailer_Price = ${retailerPrice},
            Suggested_Retail_Price = ${suggestedRetailPrice},
        WHERE Product_ID = ${id};`;

    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
});

router.delete('/products/:id', (req, res, next) => {
    const { id } = req.params;
    const query = `DELETE FROM Products
        WHERE Product_ID = ${id};`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
});

module.exports = router;