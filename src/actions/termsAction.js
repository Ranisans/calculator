export const CHANGE_LEASE_TERM = 'CHANGE_LEASE_TERM';
export const CHANGE_LOAN_TERM = 'CHANGE_LOAN_TERM';
export const CHANGE_CALCULATOR_TYPE = 'CHANGE_CALCULATOR_TYPE';

export const changeLeaseTerm = ({ term }) => (
  {
    type: CHANGE_LEASE_TERM,
    term,
  }
);

export const changeLoanTerm = ({ term }) => (
  {
    type: CHANGE_LOAN_TERM,
    term,
  }
);

export const changeType = ({ calculatorType }) => (
  {
    type: CHANGE_CALCULATOR_TYPE,
    calculatorType,
  }
);
