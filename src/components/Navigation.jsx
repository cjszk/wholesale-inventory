import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function Navigation() {
    const tabs = [
        { name: "Products", path: "/products" },
        { name: "Warehouses", path: "/warehouses" },
        { name: "Orders", path: "/orders" },
        { name: "Customers", path: "/customers" },
        { name: "Employees", path: "/employees" }
    ];

    return (
        <Wrapper>
            <NavList>
                {tabs.map((t) => <Link key={t.name} to={t.path}>{t.name}</Link>)}
            </NavList>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 20vw;
    height: 100vh;
`;

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;