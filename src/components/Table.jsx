import React from 'react';
import styled, { css } from 'styled-components';
import { formatText } from 'utils';

export class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: []
        }
    }

    componentDidMount() {
        console.log(this.props.tableName);
        this.getTableData();
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    getTableData = async () => {
        console.log("attempt getTableData");
        const { tableName } = this.props;
        console.log(`tableName: ${tableName}`)

        await fetch(`/api/${tableName}`)
            .then((response) => {
                return response.json();
            })
            .then((tableData) => this.setState({ tableData }))
            .catch((err) => {
                console.error(err);
                this.setState({
                    tableData: []
                });
            });
    }

    renderTableData() {
        const { tableData } = this.state;
        if (tableData.length === 0) return <></>;
        console.log(tableData);
        const tableKeys = Object.keys(tableData[0]);
        console.log(tableKeys);

        return (
            <>
                <thead>
                    <tr>
                        {tableKeys.map(d => (
                            <th style={{ padding: 5 }} key={d}>
                                {formatText(d)}
                            </th>)
                        )}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data) => (
                        <tr key={data[tableKeys[0]]}>
                            {tableKeys.map(key => <td key={key}>{data[key]}</td>)}
                            <UpdateButton>Update</UpdateButton>
                            <DeleteButton>Delete</DeleteButton>
                        </tr>
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

const StyledTable = styled.table`
    text-align: left;
`;

const UpdateButton = styled.a`
    padding: 5px;
`;

const DeleteButton = styled.a`
    padding: 5px;
`;