import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import CurrencyFormat from "react-currency-format";

import Transactions from "./Transactions";

const Container = styled.div`
  align-items: center;
  border: solid 1px #ccc;
  border-left: solid 10px hotpink;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Arial;
  padding: 10px 20px;
  width: 600px;
`;

const Row = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const AccountDetails = styled.div`
  font-size: 0.75rem;
`;

const CurrentBalance = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

/**
 * This is a component to display information about a bank account.
 */
const BankAccount = ({
  accountName,
  accountNumber,
  sortCode,
  currentBalance,
  transactions,
  variation,
}) => {
  const showAccountDetails = variation === "NORMAL" || variation === "DETAILED";
  const showTransactions = variation === "DETAILED";

  return (
    <Container>
      <Row>
        <div data-testid="account-name">{accountName}</div>
        {showAccountDetails && (
          <AccountDetails data-testid="account-details">
            {accountNumber} | {sortCode}
          </AccountDetails>
        )}
        <CurrentBalance data-testid="current-balance">
          <CurrencyFormat
            value={currentBalance}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"£"}
            decimalScale={2}
            fixedDecimalScale={true}
          />
        </CurrentBalance>
      </Row>
      {showTransactions && (
        <Row>
          <Transactions
            transactions={transactions}
            data-testid="transactions"
          />
        </Row>
      )}
    </Container>
  );
};

BankAccount.propTypes = {
  /**
  The name of the account 
  */
  accountName: PropTypes.string.isRequired,
  /**
  The account number of the account
  */
  accountNumber: PropTypes.string.isRequired,
  /**
  The sort code of the account
  */
  sortCode: PropTypes.string.isRequired,
  /**
  The current balance of the account
  */
  currentBalance: PropTypes.number.isRequired,
  /**
  A list of transactions for the account
   */
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ),
  /**
  The variation of this component to control how much data should be displayed
  */
  variation: PropTypes.string,
};

BankAccount.defaultProps = {
  accountName: "",
  accountNumber: "",
  sortCode: "",
  currentBalance: 0,
  transactions: [],
  variation: "NORMAL",
};

export default BankAccount;
