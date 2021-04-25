import React from 'react';
import styled from 'styled-components';
import { CustomersForm } from './forms/CustomersForm';
import { Table } from './Table';

export class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleAdd: false
        }
    }
    
    toggleAdd = () => {
        this.setState({
            toggleAdd: !this.state.toggleAdd
        });
        console.log(this.state);
    }

    renderFormSwitch() {

    }

    renderForm() {
        if (!this.state.toggleAdd) return (
            <button onClick={this.toggleAdd}>
                Add New {this.props.tableName}
            </button>
        );

        const { tableName } = this.props;

        if (tableName === "Customers") return <CustomersForm />;
        return <></>;
    }

    render() {
        const { tableName } = this.props;
        return (
            <ContentWrapper>
                <h1>{tableName}</h1>
                <Table tableName={tableName}></Table>
                {this.renderForm()}
            </ContentWrapper>
        );
    }
}

const ContentWrapper = styled.div`
    padding: 0px 20px;
`;