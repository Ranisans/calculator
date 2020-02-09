import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import InputBlock from './InputBlock';
import SelectBlock from './SelectBlock';
import {
  tradeInInfo, downPaymentInfo, leaseTermInfo, mileagesInfo, creditScoreInfo,
} from '../infoText';


const StyledLease = styled.div`
  display: grid;
  margin-top: 10px;
  grid-template-rows: 40px 55px 55px 55px 55px 55px;
  
  align-items: center;
`;

const LeaseBlock = ({
  leaseTermValues,
  leaseInitialTerm,
  mileagesValues,
  initialMileage,
  creditScoreValues,
  defaultCreditScore,
  zipCode,
  callbacks,
}) => (
  <StyledLease>
    <InputBlock
      text="Location"
      infoText="Your ZIP code."
      initialValue={zipCode}
      sign="ZIP"
      callback={callbacks.zipCallback}
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
    <SelectBlock
      text="Lease Term"
      infoText={leaseTermInfo}
      option={leaseTermValues}
      initialValue={leaseInitialTerm}
      callback={callbacks.leaseTermCallback}
    />
    <SelectBlock
      text="Annual Miles"
      infoText={mileagesInfo}
      option={mileagesValues}
      initialValue={initialMileage}
      callback={callbacks.mileagesCallback}
    />
    <SelectBlock
      text="Credit Score"
      infoText={creditScoreInfo}
      option={creditScoreValues}
      initialValue={defaultCreditScore}
      callback={callbacks.creditScoreCallback}
    />
  </StyledLease>
);


LeaseBlock.propTypes = {
  zipCode: PropTypes.number.isRequired,
  leaseTermValues: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
  leaseInitialTerm: PropTypes.number.isRequired,
  mileagesValues: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
  initialMileage: PropTypes.number.isRequired,
  creditScoreValues: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
  defaultCreditScore: PropTypes.number.isRequired,
  callbacks: PropTypes.shape({
    zipCallback: PropTypes.func.isRequired,
    tradeInCallback: PropTypes.func.isRequired,
    downPaymentCallback: PropTypes.func.isRequired,
    leaseTermCallback: PropTypes.func.isRequired,
    mileagesCallback: PropTypes.func.isRequired,
    creditScoreCallback: PropTypes.func.isRequired,
  }).isRequired,
};

export default LeaseBlock;
