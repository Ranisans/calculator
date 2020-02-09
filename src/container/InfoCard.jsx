import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import InputBlock from './InputBlock';
import TextBlock from './TextBlock';
import {
  MSRPInfo, vehicleInfo, monthlyPaymentInfo, taxesInfo,
  dealerInfo, dealerPhoneInfo, dealerRatingInfo,
} from '../infoText';

const StyledInfoCard = styled.div`
  display: grid;
  grid-template-rows: 55px 55px 55px 55px 55px 55px 55px;
  align-items: center;
`;

const InfoCard = ({
  MSRPInitial = 0,
  vehicleInitial = '',
  monthlyPayment,
  taxesAmount,
  dealerName,
  dealerPhone,
  dealerRating,
  callbacks,
}) => (
  <StyledInfoCard>
    <InputBlock
      text="MSRP"
      infoText={MSRPInfo}
      sign="$"
      initialValue={MSRPInitial}
      callback={callbacks.MSRPCallback}
    />
    <InputBlock
      text="Vehicle name"
      infoText={vehicleInfo}
      initialValue={vehicleInitial}
      callback={callbacks.vehicleCallback}
    />
    <TextBlock
      text="Monthly payment"
      infoText={monthlyPaymentInfo}
      sign="$"
      value={monthlyPayment}
    />
    <TextBlock
      text="Taxes"
      infoText={taxesInfo}
      sign="$"
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

InfoCard.propTypes = {
  MSRPInitial: PropTypes.number,
  vehicleInitial: PropTypes.string,
  monthlyPayment: PropTypes.number.isRequired,
  taxesAmount: PropTypes.number.isRequired,
  dealerName: PropTypes.string.isRequired,
  dealerPhone: PropTypes.string.isRequired,
  dealerRating: PropTypes.string.isRequired,
};

InfoCard.defaultProps = {
  MSRPInitial: 0,
  vehicleInitial: '',
};

export default InfoCard;
