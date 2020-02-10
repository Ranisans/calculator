import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

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
  MSRP,
  vehicle,
  dealerName,
  dealerPhone,
  dealerRating,
}) => {
  const monthlyPayment = 0;
  const taxesAmount = 0;

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
};

InfoCard.propTypes = {
  MSRP: PropTypes.number.isRequired,
  vehicle: PropTypes.string.isRequired,
  dealerName: PropTypes.string.isRequired,
  dealerPhone: PropTypes.string.isRequired,
  dealerRating: PropTypes.string.isRequired,
};


export default InfoCard;
