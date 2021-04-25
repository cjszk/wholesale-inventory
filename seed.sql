SELECT CURRENT_DATE;

-- Drop all tables
DROP TABLE IF EXISTS Customers;
DROP TABLE IF EXISTS Products;
DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Employees;
DROP TABLE IF EXISTS Warehouses;

CREATE TABLE Customers (
    Customer_ID serial PRIMARY KEY,
    Business_name varchar(255) NOT NULL,
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
    Business_License_number varchar(255) NOT NULL
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

ALTER SEQUENCE Orders RESTART WITH 1000;

INSERT INTO Customers (
    Business_name,
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
    Business_License_number) VALUES
(
    "Chocolatey",
    "Willy",
    "Wonka",
    "willyWonka@oompa.com",
    100000,
    "120th Street Nowhere",
    "Somewhere",
    "New York",
    1234567812345678,
    1,
    2021,
    1234567890
);

INSERT INTO Warehouses (
    Warehouse_Name,
    Street_Line_1,
    City,
    State,
    Zip) VALUES
(
    "First",
    "1st Street",
    "Phoenix",
    "Arizona",
    12345
);

INSERT INTO Employees (
    First_Name,
    Last_Name,
    Type,
    Warehouse_ID) VALUES
(
    "Oompa",
    "Loompa",
    1,
    1
);

INSERT INTO Orders (
    Order_Date,
    Employee_ID,
    Customer_ID,
    Subtotal,
    Taxes,
    Total) VALUES
(
    "2020-12-20",
    1,
    1,
    1.20,
    0.12,
    1.32
);

INSERT INTO Products (Product_name,
    MD_Price,
    Retailer_Price,
    Suggested_Retail_Price) VALUES
(
    'Chocolate',
    1.00,
    1.50,
    2.00
);
