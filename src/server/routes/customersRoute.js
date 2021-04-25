const express = require('express');
const router = express.Router();

// Example of how to get all customers from the customers table
router.get('/customers', (req, res, next) => {
    // TEMP
    return res.send(
        [
            {
                customerId: 1,
                businessName: "Willy Wonka",
                firstName: "Willy",
                lastName: "Wonka",
                email: "willyWonka@wonka.com",
                phoneNumber: "342-324-3244",
                balance: 150.00,
                billingStreetLineOne: "12222 Street",
                billingStreetLineTwo: "",
                billingCity: "Phoenix",
                billingState: "New York",
                billingZip: "34244",
                cardNumber: 1234123412341234,
                cardExpMonth: 12,
                cardExpYear: 2020,
                businessLicenseNumber: 12345
            },
            {
                customerId: 1,
                businessName: "Willy Wonka",
                firstName: "Willy",
                lastName: "Wonka",
                email: "willyWonka@wonka.com",
                phoneNumber: "342-324-3244",
                balance: 150.00,
                billingStreetLineOne: "12222 Street",
                billingStreetLineTwo: "",
                billingCity: "Phoenix",
                billingState: "New York",
                billingZip: "34244",
                cardNumber: 1234123412341234,
                cardExpMonth: 12,
                cardExpYear: 2020,
                businessLicenseNumber: 12345
            }
        ]
    );
});

// Example of how to get a specific customer ID from the customers table.
router.get('/customers/:id', (req, res, next) => {
    const { id } = req.params;

    // TODO: Write the SQL query and return results
});

// Example of how to add a customer to the customers table.
router.post('/customers', (req, res, next) => {
    // const {
    //     businessName, 
    //     firstName, 
    //     lastName, 
    //     email,
    //     phoneNumber,
    //     balance,
    //     billingStreetLineOne,
    //     billingStreetLineTwo,
    //     billingCity,
    //     billingState,
    //     billingZip,
    //     cardNumber,
    //     cardExpMonth,
    //     cardExpYear,
    //     businessLicenseNumber
    // } = req.body;

    // TODO: Write the SQL query and return a result of true/false depending on post result
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

    // TODO: Write the SQL query and return results
});

router.delete('/customers/:id', (req, res, next) => {
    const { id } = req.params;

    // TODO: Write the SQL query that deletes the customer and return result as a boolean
});

module.exports = router;