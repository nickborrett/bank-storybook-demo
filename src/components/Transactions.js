import React from "react";
import styled from "@emotion/styled";
import CurrencyFormat from "react-currency-format";

const Table = styled.table`
  width: 100%;
  font-size: 0.75rem;
  margin-top: 10px;
`;

const Date = styled.td`
  width: 100px;
`;

const Amount = styled.td`
  text-align: right;
`;

const Transactions = ({ transactions, ...rest }) => {
  return transactions ? (
    <Table {...rest}>
      <tbody>
        {transactions.map((txn, idx) => (
          <tr key={idx}>
            <Date>{txn.date}</Date>
            <td>{txn.description}</td>
            <Amount>
              <CurrencyFormat
                value={txn.amount}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </Amount>
          </tr>
        ))}
      </tbody>
    </Table>
  ) : null;
};

export default Transactions;
