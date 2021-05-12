-- Query for add a new character functionality with $ character being used to 
-- denote the variables that will have data from the backend programming language

-- SELECT all Customers
SELECT * FROM Customers;

-- SELECT one Customer by ID
SELECT * FROM Customers
WHERE Customer_ID = $customerID;

-- INSERT a new Customer
INSERT INTO Customers (
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
    $businessName,
    $firstName,
    $lastName,
    $email,
    $balance,
    $billingStreetLine1,
    $billingCity,
    $billingState,
    $billingZip,
    $cardNumber,
    $cardExpMonth,
    $cardExpYear,
    $businessLicenseNumber
);

-- UPDATE a Customer
UPDATE Customers
SET 
    Business_Name = $businessName,
    First_Name = $firstName,
    Last_Name = $lastName,
    Email = $email,
    Balance = $balance,
    Billing_Street_Line_1 = $billingStreetLine1,
    Billing_City = $billingCity,
    Billing_State = $billingState,
    Billing_Zip = $billingZip,
    Card_Number = $cardNumber,
    Card_Exp_Month = $cardExpMonth,
    Card_Exp_Year = $cardExpYear,
    Business_License_number = $businessLicenseNumber
WHERE Customer_ID = $customerID;

-- DELETE a Customer
DELETE FROM Customers
WHERE Customer_ID = $customerID;


-- SELECT all Employees
SELECT * FROM Employees;

-- SELECT one Employee
SELECT * FROM Employees
WHERE Employee_ID = $employeeID;

-- INSERT a new Employee
INSERT INTO Employees (
    First_Name,
    Last_Name,
    Type,
    Warehouse_ID) VALUES
($firstName, $lastName, $type, $warehouseID);

-- UPDATE an Employee
UPDATE Employees
SET
    First_Name = $firstName,
    Last_Name = $lastName,
    Type = $type,
    Warehouse_ID = $warehouseID
WHERE Employee_ID = $employeeID;

-- DELETE an Employee
DELETE FROM Employees
WHERE Employee_ID = $employeeID;

-- SELECT all Orders
SELECT * FROM Orders;

-- SELECT one Order
SELECT * FROM Orders
WHERE Order_ID = $orderID;

-- INSERT a new Order
INSERT INTO Orders (
    Order_Date, 
    Employee_ID, 
    Customer_ID, 
    Subtotal, 
    Taxes,
    Total) VALUES
(
    $orderDate,
    $employeeID,
    $customerID,
    $subtotal,
    $taxes,
    $total,
);

-- UPDATE an Order
UPDATE Orders
SET
    Order_Date = $orderDate,
    Employee_ID = $employeeID,
    Customer_ID = $customerID,
    Subtotal = $subtotal,
    Taxes = $taxes,
    Total = $total,
WHERE Order_ID = $orderID;

-- DELETE an Order
DELETE FROM Orders
WHERE Order_ID = $orderID;

-- SELECT all Products
SELECT * FROM Products;

-- SELECT one Product
SELECT * FROM Products
WHERE Product_ID = $productID;

-- INSERT an new Product
INSERT INTO Products (
    Product_name,
    MD_Price,
    Retailer_Price,
    Suggested_Retail_Price) VALUES
(
    $productName,
    $mdPrice,
    $retailerPrice,
    $suggestedRetailPrice,
);

-- UPDATE an Product
UPDATE Products
SET
    Product_name = $productName,
    MD_Price = $mdPrice,
    Retailer_Price = $retailerPrice,
    Suggested_Retail_Price = $suggestedRetailPrice,
WHERE Product_ID = $productID;

-- DELETE an Product
DELETE FROM Products
WHERE Product_ID = $productID;


-- SELECT all Warehouses
SELECT * FROM Warehouses;

-- SELECT one Warehouse
SELECT * FROM Warehouses
WHERE Warehouse_ID = $warehouseID;

-- INSERT an new Warehouse
INSERT INTO Warehouses (
    Warehouse_Name,
    Street_Line_1,
    City,
    State,
    Zip) VALUES
(
    $Warehouse_Name,
    $Street_Line_1,
    $City,
    $State,
    $Zip,
);

-- UPDATE an Warehouse
UPDATE Warehouses
SET
    Warehouse_Name = $warehouseName,
    Street_Line_1 = $streetLine1,
    City = $city,
    State = $state,
    Zip = $zip,
WHERE Warehouse_ID = $warehouseID;

-- DELETE an Warehouse
DELETE FROM Warehouses
WHERE Warehouse_ID = $warehouseID;