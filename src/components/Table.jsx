import React from 'react';
import styled, { css } from 'styled-components';
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
        const { tableName } = this.props;

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

    handleUpdateClick(index) {
        this.setState({
            selected: index
        });
    }

    renderTableData() {
        const { tableData, selected } = this.state;
        if (tableData.length === 0) return <></>;
        const tableKeys = Object.keys(tableData[0]);

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
                    {tableData.map((data, index) => (
                        <>
                            <tr key={index}>
                                {tableKeys.map(key => <td key={key}>{data[key]}</td>)}
                                <td><UpdateButton onClick={() => this.handleUpdateClick(index)}>Update</UpdateButton></td>
                                <td><DeleteButton>Delete</DeleteButton></td>
                            </tr>
                            {index === selected ? (<tr>{tableKeys.map(key => <td key={key}><FieldInput /></td>)}</tr>) : <></>}
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

const StyledTable = styled.table`
    text-align: left;
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