import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import InputBlock from './InputBlock';
import SelectBlock from './SelectBlock';
import { changeZip } from '../actions/paramsAction';
import {
  changeTradeIn, changeDownPayment, changeMileages, changeScore,
} from '../actions/variablesAction';
import { changeLeaseTerm } from '../actions/termsAction';
import {
  tradeInInfo, downPaymentInfo, leaseTermInfo, mileagesInfo, creditScoreInfo,
} from '../infoText';
import maxDiscountCalculation from '../logic/maxDiscountCalculation';


const StyledLease = styled.div`
  display: grid;
  margin-top: 10px;
  grid-template-rows: 40px 65px 65px 65px 65px 65px;
  
  align-items: center;
`;

const LeaseBlock = ({
  leaseTermValues,
  mileagesValues,
  creditScoreValues,
}) => {
  const dispatch = useDispatch();
  const zipHandler = (newZip) => {
    dispatch(changeZip({ zipCode: newZip }));
  };
  const tradeInHandler = (tradeInValue) => {
    dispatch(changeTradeIn({ value: tradeInValue }));
  };
  const downPaymentHandler = (downPaymentValue) => {
    dispatch(changeDownPayment({ value: downPaymentValue }));
  };
  const leaseTermHandler = (leaseTermValue) => {
    dispatch(changeLeaseTerm({ term: leaseTermValue }));
  };
  const mileagesHandler = (mileagesValue) => {
    dispatch(changeMileages({ value: mileagesValue }));
  };
  const creditScoreHandler = (creditScoreNumber) => {
    dispatch(changeScore({ score: creditScoreNumber }));
  };

  const variablesState = useSelector((state) => state.variables);
  const termsState = useSelector((state) => state.terms);
  const paramsState = useSelector((state) => state.params);

  const maxDiscount = maxDiscountCalculation(variablesState.msrp);

  return (
    <StyledLease>
      <InputBlock
        text="Location"
        infoText="Your ZIP code."
        initialValue={paramsState.zipCode}
        sign="ZIP"
        callback={zipHandler}
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
        initialValue={variablesState.downPayment}
        maxValue={maxDiscount}
        errorMessage={`Max value ${maxDiscount}`}
        callback={downPaymentHandler}
      />
      <SelectBlock
        text="Lease Term"
        infoText={leaseTermInfo}
        option={leaseTermValues}
        initialValue={termsState.leaseTerm}
        callback={leaseTermHandler}
      />
      <SelectBlock
        text="Annual Miles"
        infoText={mileagesInfo}
        option={mileagesValues}
        initialValue={variablesState.mileages}
        callback={mileagesHandler}
      />
      <SelectBlock
        text="Credit Score"
        infoText={creditScoreInfo}
        option={creditScoreValues}
        initialValue={variablesState.score}
        callback={creditScoreHandler}
      />
    </StyledLease>
  );
};


LeaseBlock.propTypes = {
  leaseTermValues: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
  mileagesValues: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
  creditScoreValues: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
};

export default LeaseBlock;
