import React from 'react';
import styled from 'styled-components';
import Select from 'react-select'
import { formatText } from 'utils';

export class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            tableData: []
        }
    }

    componentDidMount() {
        this.getTableData();
    }

    componentDidUpdate() {
    }

    getTableData = async () => {
        this.setState({
            tableData: this.createDummyData()
        });
        // const { tableName } = this.props;

        await fetch(`/api/${tableName}`)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((tableData) => {
                console.log(tableData);
                this.setState({ tableData });
            })
            .catch((err) => {
                console.error(err);
                this.setState({
                    tableData: this.createDummyData()
                });
            });
    }

    // TEMPORARY
    createDummyData() {
        const { tableName } = this.props;

        if (tableName === "Customers") return [
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
        ];
        if (tableName === "Employees") return [
            {
                employeeID: 1,
                firstName: "Oompa",
                lastName: "Loompa",
                type: "dunno",
                warehouseID: 2,
                email: "someEmail@okay.com",
                phoneNumber: "332-342-5342"
            },
            {
                employeeID: 1,
                firstName: "Oompa",
                lastName: "Loompa",
                type: "dunno",
                warehouseID: 2,
                email: "someEmail@okay.com",
                phoneNumber: "332-342-5342"
            },
            {
                employeeID: 1,
                firstName: "Oompa",
                lastName: "Loompa",
                type: "dunno",
                warehouseID: 2,
                email: "someEmail@okay.com",
                phoneNumber: "332-342-5342"
            }
        ];
        if (tableName === "Orders") return [
            {
                orderNumber: 123,
                orderDate: "2020-12-20",
                employeeID: 123,
                customerID: 123,
                subTotal: 123.00,
                taxes: 2.00,
                total: 125.00,
            },
            {
                orderNumber: 123,
                orderDate: "2020-12-20",
                employeeID: 123,
                customerID: 123,
                subTotal: 123.00,
                taxes: 2.00,
                total: 125.00,
            },
            {
                orderNumber: 123,
                orderDate: "2020-12-20",
                employeeID: 123,
                customerID: 123,
                subTotal: 123.00,
                taxes: 2.00,
                total: 125.00,
            },
            {
                orderNumber: 123,
                orderDate: "2020-12-20",
                employeeID: 123,
                customerID: 123,
                subTotal: 123.00,
                taxes: 2.00,
                total: 125.00,
            },
            {
                orderNumber: 123,
                orderDate: "2020-12-20",
                employeeID: 123,
                customerID: 123,
                subTotal: 123.00,
                taxes: 2.00,
                total: 125.00,
            },
            {
                orderNumber: 123,
                orderDate: "2020-12-20",
                employeeID: 123,
                customerID: 123,
                subTotal: 123.00,
                taxes: 2.00,
                total: 125.00,
            },
            {
                orderNumber: 123,
                orderDate: "2020-12-20",
                employeeID: 123,
                customerID: 123,
                subTotal: 123.00,
                taxes: 2.00,
                total: 125.00,
            },
        ];
        if (tableName === "Products") return [
            {
                productID: 1,
                productName: "Chocolate",
                productDescription: "Choco choco",
                productDepartment: "Dunno",
                mdPrice: 125.00,
                retailerPrice: 150.00,
                suggestedRetailPrice: 200.00,
            },
            {
                productID: 2,
                productName: "Chocolate",
                productDescription: "Choco choco",
                productDepartment: "Dunno",
                mdPrice: 125.00,
                retailerPrice: 150.00,
                suggestedRetailPrice: 200.00,
            },
            {
                productID: 3,
                productName: "Chocolate",
                productDescription: "Choco choco",
                productDepartment: "Dunno",
                mdPrice: 125.00,
                retailerPrice: 150.00,
                suggestedRetailPrice: 200.00,
            },
        ];
        if (tableName === "Warehouses") return [
            {
                warehouseID: 1,
                warehouseName: "Factory",
                streetLineOne: "200th street",
                streetLineTwo: "some place",
                city: "Nowhere",
                state: "Dunno",
                zip: "12434-43",
            }
        ];
        if (tableName === "Product Orders") return [
            {
                productOrderID: 1,
                productID: 1,
                orderNumber: 1,
                productQuantity: 1 
            }
        ];
        if (tableName === "Warehouse Inventory") return [
            {
                warehouseID: 1,
                warehouseName: "Willy Wonka",
                streetLineOne: "200th street",
                streetLineTwo: "some place",
                city: "Amsterdam",
                state: "New Something",
                zip: "00000"
            }
        ];
    }

    handleUpdateClick(index) {
        this.setState({
            selected: index
        });
    }

    renderTableData() {
        const { tableData, selected } = this.state;
        if (tableData.length === 0) return <></>;
        const tableKeys = Object.keys(tableData[0]);

        console.log(tableData);

        const options = Object.values(tableData[0]).map((x) => ({
            value: x,
            label: x
        }));

        return (
            <>
                <FilterInput>Filter:</FilterInput>
                <SelectInput options={options} />
                <thead>
                    <TableRow>
                        {tableKeys.map(d => (
                            <TableRow as={"th"} style={{ padding: 5 }} key={d}>
                                {formatText(d)}
                            </TableRow>)
                        )}
                    </TableRow>
                </thead>
                <tbody>
                    {tableData.map((data, index) => (
                        <>
                            <TableRow key={index}>
                                {tableKeys.map(key => <TableCell key={key}>{data[key]}</TableCell>)}
                                <TableCell><UpdateButton onClick={() => this.handleUpdateClick(index)}>Update</UpdateButton></TableCell>
                                <TableCell><DeleteButton>Delete</DeleteButton></TableCell>
                            </TableRow>
                            {index === selected ? (
                                <TableRow>
                                    {tableKeys.map(key => <TableCell key={key}><FieldInput /></TableCell>)}
                                </TableRow>) : <></>}
                        </>
                    ))}
                </tbody>
            </>
        );
    }

    render() {
        return (
            <StyledTable>
                {this.renderTableData()}
            </StyledTable>);
    }
}

const SelectInput = styled(Select)`
    width: 200px;
`;

const FilterInput = styled.label`
    margin-right: 10px;
`;

const StyledTable = styled.table`
    text-align: left;
    border: 1px solid black;
`;

const TableRow = styled.tr`
`;

const TableCell = styled.td`

`;

const UpdateButton = styled.a`
    padding: 5px;
`;

const DeleteButton = styled.a`
    padding: 5px;
`;

const FieldInput = styled.input`
    width: 100px;
`;