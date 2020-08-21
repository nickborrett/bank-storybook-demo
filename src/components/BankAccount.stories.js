import React from "react";

import BankAccount from "./BankAccount";

export default {
  component: BankAccount,
  title: "Bank account",
  argTypes: {
    variation: {
      control: {
        type: "inline-radio",
        options: ["NORMAL", "SUMMARY", "DETAILED"],
      },
    },
  },
};

const Template = (args) => <BankAccount {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  accountName: "Current account",
  currentBalance: 25925,
  accountNumber: "12345678",
  sortCode: "112233",
  transactions: [
    { date: "11 Aug 2020", description: "Fuel from ELLO", amount: -32.25 },
    {
      date: "08 Aug 2020",
      description: "Clothes from PAPAYA REPUBLIC",
      amount: -79.99,
    },
    {
      date: "01 Aug 2020",
      description: "Salary from ACME CORPORATION",
      amount: 2450,
    },
  ],
};

export const Summary = Template.bind({});
Summary.args = {
  ...Normal.args,
  variation: "SUMMARY",
};

export const Detailed = Template.bind({});
Detailed.args = {
  ...Normal.args,
  variation: "DETAILED",
};
