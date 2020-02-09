import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import InputBlock from './InputBlock';
import ButtonBlock from './ButtonBlock';

const StyledLoad = styled.div`
  display: grid;
  margin-top: 10px;
  grid-template-rows: 40px 95px 55px 55px 55px 95px;
  
  align-items: center;
`;

const LoanBlock = ({
  termValues,
  defaultTermValue,
  creditScoreValues,
  defaultCreditScore,
  zipCode,
  callbacks,
}) => {
  const tradeInInfo = `
    The value of your currently owned vehicle credited towards the purchase or lease of the vehicle you
    are acquiring.`;

  const downPaymentInfo = 'The cash down payment will reduce the financed loan amount.';

  const APRInfo = `
    APR stands for annual percentage rate, which refers to the interest you’re being charged to borrow money.
    APRs can be calculated as simple or compound interest, and rates can be fixed or variable.`;

  return (
    <StyledLoad>
      <InputBlock
        text="Location"
        infoText="Your ZIP code."
        initialValue={zipCode}
        sign="ZIP"
        callback={callbacks.zipCallback}
      />
      <ButtonBlock
        buttons={termValues}
        defaultButton={defaultTermValue}
        callback={callbacks.termCallback}
      />
      <InputBlock
        text="Trade-In"
        infoText={tradeInInfo}
        sign="$"
        callback={callbacks.tradeInCallback}
      />
      <InputBlock
        text="Down Payment"
        infoText={downPaymentInfo}
        sign="$"
        callback={callbacks.downPaymentCallback}
      />
      <InputBlock
        text="APR"
        infoText={APRInfo}
        sign="%"
        callback={callbacks.APRCallback}
        defaultButton={defaultTermValue}
      />
      <ButtonBlock
        buttons={creditScoreValues}
        defaultButton={defaultCreditScore}
        callback={callbacks.creditScoreCallback}
      />
    </StyledLoad>
  );
};

LoanBlock.propTypes = {
  termValues: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
  defaultTermValue: PropTypes.number.isRequired,
  creditScoreValues: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
  defaultCreditScore: PropTypes.number.isRequired,
  zipCode: PropTypes.number.isRequired,
  callbacks: PropTypes.shape({
    zipCallback: PropTypes.func.isRequired,
    termCallback: PropTypes.func.isRequired,
    tradeInCallback: PropTypes.func.isRequired,
    downPaymentCallback: PropTypes.func.isRequired,
    APRCallback: PropTypes.func.isRequired,
    creditScoreCallback: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoanBlock;
