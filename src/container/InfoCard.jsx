import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import TextBlock from './TextBlock';
import {
  MSRPInfo, vehicleInfo, monthlyPaymentInfo, taxesInfo,
  dealerInfo, dealerPhoneInfo, dealerRatingInfo,
} from '../infoText';
import { LoanPosition, LeasePosition } from '../constants';
import paymentCalculation from '../logic/paymentCalculation';

const StyledInfoCard = styled.div`
  display: grid;
  grid-template-rows: 55px 55px 55px 55px 55px 55px 55px;
  align-items: center;
`;

const InfoCard = ({
  MSRP,
  vehicle,
  dealerName,
  dealerPhone,
  dealerRating,
  creditRate,
}) => {
  const [monthlyPayment, setMonthPayment] = useState(0);
  const [taxesAmount, setTaxesAmount] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  const paramsState = useSelector((state) => state.params);
  const termsState = useSelector((state) => state.terms);
  const variablesState = useSelector((state) => state.variables);

  useEffect(() => {
    const data = { ...paramsState, ...termsState, ...variablesState };
    if (data.calculatorType === LoanPosition
      && data.msrp * data.loanTerm * data.score * data.apr === 0) {
      setMonthPayment(0);
      return;
    }
    if (
      data.calculatorType === LeasePosition
      && data.msrp * data.mileages * data.leaseTerm * data.score === 0
    ) {
      setMonthPayment(0);
      return;
    }
    setIsCalculating(true);
    Promise.resolve(data)
      .then((promiseData) => paymentCalculation({ data: promiseData, creditRate }))
      .then((result) => {
        setIsCalculating(false);
        const taxes = paramsState.zipCode
          .split('')
          .filter((num) => num !== '0')
          .map((num) => num * 11)
          .join(' $, ');
        setTaxesAmount(taxes);
        setMonthPayment(result);
      });
  }, [paramsState, termsState, variablesState]);

  return (
    <StyledInfoCard>
      <TextBlock
        text="MSRP"
        infoText={MSRPInfo}
        sign="$"
        value={MSRP}
      />
      <TextBlock
        text="Vehicle name"
        infoText={vehicleInfo}
        value={vehicle}
      />
      <TextBlock
        text="Monthly payment"
        infoText={monthlyPaymentInfo}
        sign="$"
        isCalculating={isCalculating}
        value={monthlyPayment}
      />
      <TextBlock
        text="Taxes"
        infoText={taxesInfo}
        sign="$"
        isCalculating={isCalculating}
        value={taxesAmount}
      />
      <TextBlock
        text="Dealer Name"
        infoText={dealerInfo}
        value={dealerName}
      />
      <TextBlock
        text="Phone"
        infoText={dealerPhoneInfo}
        value={dealerPhone}
      />
      <TextBlock
        text="Dealer Rating"
        infoText={dealerRatingInfo}
        value={dealerRating}
      />
    </StyledInfoCard>
  );
};

InfoCard.propTypes = {
  MSRP: PropTypes.number.isRequired,
  vehicle: PropTypes.string.isRequired,
  dealerName: PropTypes.string.isRequired,
  dealerPhone: PropTypes.string.isRequired,
  dealerRating: PropTypes.string.isRequired,
};


export default InfoCard;
