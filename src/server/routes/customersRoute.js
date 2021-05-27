const express = require('express');
const router = express.Router();
const db = require('../db_connector');

// Example of how to get all customers from the customers table
router.get('/customers', (req, res, next) => {
    const query = `SELECT * FROM Customers`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
    // return res.send(
    //     [
    //         {
    //             customerId: 1,
    //             businessName: "Willy Wonka",
    //             firstName: "Willy",
    //             lastName: "Wonka",
    //             email: "willyWonka@wonka.com",
    //             phoneNumber: "342-324-3244",
    //             balance: 150.00,
    //             billingStreetLineOne: "12222 Street",
    //             billingStreetLineTwo: "",
    //             billingCity: "Phoenix",
    //             billingState: "New York",
    //             billingZip: "34244",
    //             cardNumber: 1234123412341234,
    //             cardExpMonth: 12,
    //             cardExpYear: 2020,
    //             businessLicenseNumber: 12345
    //         },
    //         {
    //             customerId: 1,
    //             businessName: "Willy Wonka",
    //             firstName: "Willy",
    //             lastName: "Wonka",
    //             email: "willyWonka@wonka.com",
    //             phoneNumber: "342-324-3244",
    //             balance: 150.00,
    //             billingStreetLineOne: "12222 Street",
    //             billingStreetLineTwo: "",
    //             billingCity: "Phoenix",
    //             billingState: "New York",
    //             billingZip: "34244",
    //             cardNumber: 1234123412341234,
    //             cardExpMonth: 12,
    //             cardExpYear: 2020,
    //             businessLicenseNumber: 12345
    //         }
    //     ]
    // );
});

// Example of how to get a specific customer ID from the customers table.
router.get('/customers/:id', (req, res, next) => {
    const { id } = req.params;
    const query = `SELECT * FROM Customers
        WHERE Customer_ID = ${id};`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
});

// Example of how to add a customer to the customers table.
router.post('/customers', (req, res, next) => {
    const {
        businessName, 
        firstName, 
        lastName, 
        email,
        phoneNumber,
        balance,
        billingStreetLineOne,
        billingStreetLineTwo,
        billingCity,
        billingState,
        billingZip,
        cardNumber,
        cardExpMonth,
        cardExpYear,
        businessLicenseNumber
    } = req.body;
    const query = `INSERT INTO Customers (
            Business_Name,
            First_Name,
            Last_Name,
            Email,
            Balance,
            Billing_Street_Line_1,
            Billing_City,
            Billing_State,
            Billing_Zip,
            Card_Number,
            Card_Exp_Month,
            Card_Exp_Year,
            Business_License_number
        ) VALUES
        (
            ${businessName},
            ${firstName},
            ${lastName},
            ${email},
            ${balance},
            ${billingStreetLineOne},
            ${billingCity},
            ${billingState},
            ${billingZip},
            ${cardNumber},
            ${cardExpMonth},
            ${cardExpYear},
            ${businessLicenseNumber}
        );`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
});

router.patch('/customers/:id', (req, res, next) => {
    const {
        businessName, 
        firstName, 
        lastName, 
        email,
        phoneNUmber,
        balance,
        billingStreetLineOne,
        billingStreetLineTwo,
        billingCity,
        billingState,
        billingZip,
        cardNumber,
        cardExpMonth,
        cardExpYear,
        businessLicenseNumber
    } = req.body;
    const { id } = req.params;
    const query = `UPDATE Customers
        SET 
            Business_Name = ${businessName},
            First_Name = ${firstName},
            Last_Name = ${lastName},
            Email = ${email},
            Balance = ${balance},
            Billing_Street_Line_1 = ${billingStreetLineOne},
            Billing_City = ${billingCity},
            Billing_State = ${billingState},
            Billing_Zip = ${billingZip},
            Card_Number = ${cardNumber},
            Card_Exp_Month = ${cardExpMonth},
            Card_Exp_Year = ${cardExpYear},
            Business_License_number = ${businessLicenseNumber}
        WHERE Customer_ID = ${id};`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
});

router.delete('/customers/:id', (req, res, next) => {
    const { id } = req.params;
    const query = `DELETE FROM Customers
        WHERE Customer_ID = ${id};`;
    db.query(query, (err, results, fields) => {
        console.log(`err: ${err}`);
        console.log(`results: ${results}`);
        console.log(`fields: ${fields}`);
    });
});

module.exports = router;