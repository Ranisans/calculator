import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import InputBlock from './InputBlock';
import ButtonBlock from './ButtonBlock';

import {
  tradeInInfo, downPaymentInfo, APRInfo, leaseTermInfo, creditScoreInfo,
} from '../infoText';
import { changeZip, changeScore } from '../actions/paramsAction';
import { changeLoanTerm } from '../actions/termsAction';
import { changeTradeIn, changeDownPayment, changeAPR } from '../actions/variablesAction';
import maxDiscountCalculation from '../logic/maxDiscountCalculation';

const StyledLoad = styled.div`
  display: grid;
  margin-top: 10px;
  grid-template-rows: 40px 95px 55px 55px 55px 95px;
  
  align-items: center;
`;

const LoanBlock = ({
  loanTermValues,
  creditScoreValues,
}) => {
  const dispatch = useDispatch();
  const variablesState = useSelector((state) => state.variables);
  const termsState = useSelector((state) => state.terms);
  const paramsState = useSelector((state) => state.params);

  const zipHandler = (newZip) => {
    dispatch(changeZip({ zipCode: newZip }));
  };
  const loanTermHandler = (leaseTermValue) => {
    dispatch(changeLoanTerm({ term: leaseTermValue }));
  };
  const tradeInHandler = (tradeInValue) => {
    dispatch(changeTradeIn({ value: tradeInValue }));
  };
  const downPaymentHandler = (downPaymentValue) => {
    dispatch(changeDownPayment({ value: downPaymentValue }));
  };
  const aprHandler = (aprValue) => {
    dispatch(changeAPR({ value: aprValue }));
  };
  const creditScoreHandler = (creditScoreNumber) => {
    dispatch(changeScore({ score: creditScoreNumber }));
  };

  const maxDiscount = maxDiscountCalculation(variablesState.msrp);

  return (
    <StyledLoad>
      <InputBlock
        text="Location"
        infoText="Your ZIP code."
        initialValue={paramsState.zipCode}
        sign="ZIP"
        callback={zipHandler}
      />
      <ButtonBlock
        text="Loan Term"
        infoText={leaseTermInfo}
        buttons={loanTermValues}
        defaultButton={termsState.loanTerm}
        callback={loanTermHandler}
      />
      <InputBlock
        text="Trade-In"
        infoText={tradeInInfo}
        sign="$"
        initialValue={variablesState.tradeIn}
        maxValue={maxDiscount}
        errorMessage={`Max value ${maxDiscount}`}
        callback={tradeInHandler}
      />
      <InputBlock
        text="Down Payment"
        infoText={downPaymentInfo}
        sign="$"
        maxValue={maxDiscount}
        errorMessage={`Max value ${maxDiscount}`}
        initialValue={variablesState.downPayment}
        callback={downPaymentHandler}
      />
      <InputBlock
        text="APR"
        infoText={APRInfo}
        sign="%"
        initialValue={variablesState.apr}
        callback={aprHandler}
      />
      <ButtonBlock
        text="Credit Score"
        infoText={creditScoreInfo}
        buttons={creditScoreValues}
        defaultButton={paramsState.score}
        callback={creditScoreHandler}
      />
    </StyledLoad>
  );
};

LoanBlock.propTypes = {
  loanTermValues: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
  creditScoreValues: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
};

export default LoanBlock;
