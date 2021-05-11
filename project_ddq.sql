SELECT CURRENT_DATE;

-- Drop all tables
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS Customers;
DROP TABLE IF EXISTS Products;
DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Employees;
DROP TABLE IF EXISTS Warehouses;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE Customers (
    Customer_ID serial PRIMARY KEY,
    Business_Name varchar(255) NOT NULL,
    First_Name varchar(255) NOT NULL,
    Last_Name varchar(255) NOT NULL,
    Email varchar(255) NOT NULL,
    Phone_Number varchar(255),
    Balance float NOT NULL,
    Billing_Street_Line_1 varchar(255) NOT NULL,
    Billing_Street_Line_2 varchar(255),
    Billing_City varchar(255) NOT NULL,
    Billing_State varchar(255) NOT NULL,
    Billing_Zip varchar(255) NOT NULL,
    Card_Number int NOT NULL,
    Card_Exp_Month int NOT NULL,
    Card_Exp_Year int NOT NULL,
    Business_License_Number varchar(255) NOT NULL
);

CREATE TABLE Employees (
    Employee_ID int unique auto-increment not NULL PK,
    First_Name varchar(255) not NULL,
    Last_Name varchar(255) not NULL,
    Type int not NULL,
    Warehouse_ID int not NULL,
    Email varchar(255)
    Phone_Number varchar(255)
);

CREATE TABLE Orders (
    Order_Number int unique auto-increment not NULL PK,
    Order_Date date not NULL,
    Employee_ID int not NULL,
    Customer_ID int not NULL,
    Subtotal float not NULL,
    Taxes float not NULL,
    Total float not NULL,
);

CREATE TABLE Products (
    Product_ID int unique auto-increment not NULL PK,
    Product_Name varchar(255) not NULL,
    Product_Description varchar(255)
    Product_Department varchar(255)
    MD_Price float not NULL,
    Retailer_Price float not NULL,
    Suggested_Retail_Price float not NULL,
);

CREATE TABLE Warehouses (
    Warehouse_ID int unique auto-increment not NULL PK,
    Warehouse_Name varchar(255) not NULL,
    Street_Line_1 varchar(255) not NULL,
    Street_Line_2 varchar(255)
    City int not NULL,
    State int not NULL,
    Zip int not NULL,
);

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
    Business_License_Number) VALUES
("Super Farmer's Market", "Sandy", "Gilford", "sandysand@fake.com", 100000, "12th Street Nowhere", "Seattle", "Washington", 1243434304042312, 11, 2023, 3423494),
("Apples and More", "Kevin", "Spat", "ilikeapples@fake.com", 100000, "24th Street Nowhere", "Sacramento", "California", 5453243421349876, 8, 2021, 6754215890),
("John's Local Market", "John", "Smith", "johnsmith@fake.com", 100000, "120th Street Nowhere", "Portland", "Oregon", 1234567812345678, 1, 2021, 1234567890);

-- Only one warehouse for now
INSERT INTO Warehouses (
    Warehouse_Name,
    Street_Line_1,
    City,
    State,
    Zip) VALUES
("First", "1st Street", "Phoenix", "Arizona", 12345);

-- All employees will be assigned to the only warehouse for now
INSERT INTO Employees (
    First_Name,
    Last_Name,
    Type,
    Warehouse_ID) VALUES
("Sally", "Kat", 1, 1),
("Daveed", "Stix", 1, 1),
("Katie", "Woods", 1, 1),
("Alex", "Anderson", 1, 1);

INSERT INTO Products (
    Product_name,
    MD_Price,
    Retailer_Price,
    Suggested_Retail_Price) VALUES
('Twix', 0.69, 0.99, 1.49),
('Kit Kat', 0.69, 0.99, 1.49),
('Monster Energy Drink', 1.29, 1.79, 1.99),
('Snapple Black Tea', 1.00, 1.59, 1.79),
('Pocket Lighter', 0.49, 0.79, 0.99);


-- Considerations, maybe we want to start orders at 1000 instead of 1
-- ALTER SEQUENCE Orders RESTART WITH 1000;

INSERT INTO Orders (
    Order_Date, 
    Employee_ID, 
    Customer_ID, 
    Subtotal, 
    Taxes,
    Total) VALUES
("2020-12-20", 1, 1, 0.69, 0.12, 0.81),
("2021-3-21", 2, 2, 2.08, 0.34, 2.42);
