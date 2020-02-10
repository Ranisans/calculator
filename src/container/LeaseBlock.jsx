import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import InputBlock from './InputBlock';
import SelectBlock from './SelectBlock';
import { changeZip, changeScore } from '../actions/paramsAction';
import { changeTradeIn, changeDownPayment, changeMileages } from '../actions/variablesAction';
import { changeLeaseTerm } from '../actions/termsAction';
import {
  tradeInInfo, downPaymentInfo, leaseTermInfo, mileagesInfo, creditScoreInfo,
} from '../infoText';


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
    dispatch(changeZip({ value: newZip }));
  };
  const tradeInHandler = (tradeInValue) => {
    dispatch(changeTradeIn({ value: tradeInValue }));
  };
  const downPaymentHandler = (downPaymentValue) => {
    dispatch(changeDownPayment({ value: downPaymentValue }));
  };
  const leaseTermHandler = (leaseTermValue) => {
    dispatch(changeLeaseTerm({ term: parseInt(leaseTermValue, 10) }));
  };
  const mileagesHandler = (mileagesValue) => {
    dispatch(changeMileages({ value: parseInt(mileagesValue, 10) }));
  };
  const creditScoreHandler = (creditScoreNumber) => {
    dispatch(changeScore({ score: parseInt(creditScoreNumber, 10) }));
  };

  const variablesState = useSelector((state) => state.variables);
  const termsState = useSelector((state) => state.terms);
  const paramsState = useSelector((state) => state.params);

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
        callback={tradeInHandler}
      />
      <InputBlock
        text="Down Payment"
        infoText={downPaymentInfo}
        sign="$"
        initialValue={variablesState.downPayment}
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
        initialValue={paramsState.score}
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
