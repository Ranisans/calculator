import React from 'react';
import { useSelector } from 'react-redux';

import LoanBlock from './LoanBlock';
import LeaseBlock from './LeaseBlock';
import { LoanPosition } from '../constants';

const LoanLeaseBlock = (props) => {
  const termsState = useSelector((state) => state.terms);

  const { props: val } = props;
  const {
    leaseTerms,
    loanTerms,
    creditScoreValues,
    mileages,
  } = val;

  if (termsState.calculatorType === LoanPosition) {
    return (
      <LoanBlock
        loanTermValues={loanTerms}
        creditScoreValues={creditScoreValues}
      />
    );
  }
  return (
    <LeaseBlock
      leaseTermValues={leaseTerms}
      mileagesValues={mileages}
      creditScoreValues={creditScoreValues}
    />
  );
};

export default LoanLeaseBlock;
