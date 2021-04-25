import React from 'react';
import styled, { css } from 'styled-components';
import { formatText } from 'utils';

export class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: {}
        }
    }

    componentDidMount() {
        console.log(this.props.tableName);
        if (this.props.tableName === "Customers") this.getCustomerData();
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    getCustomerData = async () => {
        console.log("attempt getTableData");
        await fetch(`/api/customers`)
            .then((response) => {
                return response.json();
            })
            .then((tableData) => this.setState({ tableData }))
            .catch((err) => console.error(err));
    }

    renderTableData() {
        const { tableData } = this.state;
        return (
            <thead>
                {Object.keys(tableData).map(d => (
                <tc style={{ padding: 5 }} key={d}>
                    {formatText(d)}
                </tc>)
            )}
            </thead>
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
  max-height: ${(props) => props.baseHeight ?? '80vh'};
  overflow-x: scroll;

  margin-bottom: 0;

  thead {
    display: table;
    width: 100%;
    table-layout: fixed;
    ${(props) => css`
      font-size: ${props.headerFontSize ?? '18px'};
    `}

    tr {
      th {
        padding-bottom: 5px;
        text-align: left;

        a {
          margin: 0 0px 0 0;
          padding: 0;
          display: inline;

          &:hover {
            cursor: pointer;
          }

          svg {
            position: relative;
            top: 7px;
          }
        }
      }
    }
  }

  tbody {
    display: block;
    overflow: auto;
    ${(props) => css`
      max-height: ${props.bodyHeight ?? '73.5vh'};
    `};

    ::-webkit-scrollbar {
      width: 1em;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
      background: rgba(0, 0, 0, 0.1);
    }

    ::-webkit-scrollbar-thumb {
    }

    tr {
      padding: 0 5px;
      display: table;
      width: 100%;
      table-layout: fixed;

      :nth-child(even) {
      }

      :last-child {
        border-bottom: none;
      }

      &:hover {
      }

      td {
        padding: 10px 20px;
        ${(props) => css`
          font-size: ${props.contentFontSize ?? '16px'};
        `}
      }
    }
  }

  tfoot {
    display: block;

    tr {
      padding: 0 5px;
      display: table;
      width: 100%;
      table-layout: fixed;

      th {
        padding: 5px 2.5px;

        :first-child {
          padding: 5px 2.5px 5px 0px;
        }

        :last-child {
          padding: 5px 0px 5px 2.5px;
        }
      }
    }
  }
`;
