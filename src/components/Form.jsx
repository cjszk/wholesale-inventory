import React from 'react';
import styled from 'styled-components';
import { formatText } from 'utils';

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { tableName } = this.props;
        if (tableName === "Customers") this.setCustomers();
        if (tableName === "Employees") this.setEmployees();
        if (tableName === "Orders") this.setOrders();
        if (tableName === "Products") this.setProducts();
        if (tableName === "Warehouses") this.setWarehouses();
    }

    setCustomers() {
        this.setState({
            businessName: "",
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            balance: "",
            billingStreetLineOne: "",
            billingStreetLineTwo: "",
            billingCity: "",
            billingState: "",
            billingZip: "",
            cardNumber: "",
            cardExpMonth: "",
            cardExpYear: "",
            businessLicenseNumber: ""
        });
    }

    setEmployees() {
        this.setState({
            employeeID: "",
            firstName: "",
            lastName: "",
            type: "",
            warehouseID: "",
            email: "",
            phoneNumber: ""
        });
    }

    setOrders() {
        this.setState({
            orderNumber: "",
            orderDate: "",
            employeeID: "",
            customerID: "",
            subTotal: "",
            taxes: "",
            total: ""
        });
    }

    setProducts() {
        this.setState({
            productID: "",
            productName: "",
            productDescription: "",
            productDepartment: "",
            mdPrice: "",
            retailerPrice: "",
            suggestedRetailPrice: ""
        });
    }

    setWarehouses() {
        this.setState({
            warehouseID: "",
            warehouseName: "",
            streetLineOne: "",
            streetLineTwo: "",
            city: "",
            state: "",
            zip: ""
        });
    }

    handleInputChange(key, value) {
        this.setState({ [key]: value });
    }

    submitForm(e) {
        e.preventDefault();
        this.toggleAdd();
    }

    renderFields() {
        return Object.keys(this.state).map((f) => (
            <>
                <label key={f}>{formatText(f)}</label>
                <input />
            </>
        ));
    }

    render() {
        return (
            <StyledForm onSubmit={(e) => this.submitForm(e)}>
                {this.renderFields()}
                <button>Submit</button>
            </StyledForm>
        );
    }
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    input {
        width: 200px;
    }

    button {
        margin: 10px 0;
        width: 100px;
    }
`;