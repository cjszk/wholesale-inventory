import React from 'react';
import styled from 'styled-components';
import { Navigation } from './Navigation';
import { Content } from './Content';

export function Layout(props) {
    return (
        <LayoutWrapper style={{ width: "100vw", height: "100vh" }}>
            <Navigation />
            <Content tableName={props.navSelection} />
        </LayoutWrapper>
    );
}

const LayoutWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`;