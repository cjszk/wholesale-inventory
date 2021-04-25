import React from 'react';
import styled from 'styled-components';
import { formatText } from 'utils';

export class CustomersForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        };
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
                <label>{formatText(f)}</label>
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