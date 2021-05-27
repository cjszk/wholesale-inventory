import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function Navigation() {
    const tabs = [
        { name: "Products", path: "/products" },
        { name: "Warehouses", path: "/warehouses" },
        { name: "Orders", path: "/orders" },
        { name: "Customers", path: "/customers" },
        { name: "Employees", path: "/employees" },
        { name: "Product Orders", path: "/product_orders" },
        { name: "Warehouse Inventory", path: "/warehouse_inventory" }
    ];

    return (
        <Wrapper>
            <NavList>
                {tabs.map((t) => <NavItem key={t.name} to={t.path}>{t.name}</NavItem>)}
            </NavList>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 8vw;
    height: 100vh;
`;

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0;
`;

const NavItem = styled(Link)`
    font-size: 16px;
    padding: 5px 20px;

    &:hover {
        cursor: pointer;
        background-color: #ccc;
    }
`;