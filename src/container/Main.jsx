import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import useDataLoading from '../logic/useDataLoading';
import Spinner from '../component/Spinner';
import Error from '../component/Error';
import { LoanPosition, LeasePosition } from '../constants';
import Button from '../component/Button';
import LoanLeaseBlock from './LoanLeaseBlock';
import { changeType } from '../actions/termsAction';
import InfoCard from './InfoCard';

const StyledAppBlock = styled.div`
  display: grid;
  grid-template-columns: 450px auto;
  width: 850px;
  height: 455px;
  margin: auto;
  border: 1px solid gray;
`;

const StyledInfoCard = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin-left: auto;
`;

const StyledLoanLease = styled.div`
  border-right: 1px solid gray;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const StyledLoanLeaseMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 50px;
`;

const Main = () => {
  const { error, loading, data } = useDataLoading();
  const menuElements = [
    { text: 'Loan', value: LoanPosition },
    { text: 'Lease', value: LeasePosition },
  ];
  const dispatch = useDispatch();

  const [activeMenu, setActiveMenu] = useState(LoanPosition);

  const menuHandler = (type) => {
    dispatch(changeType({ calculatorType: type }));
    setActiveMenu(type);
  };

  if (loading || error) {
    return loading ? <Spinner /> : <Error />;
  }

  return (
    <StyledAppBlock>
      <StyledLoanLease>
        <StyledLoanLeaseMenu>
          {menuElements.map(
            (button) => (
              <Button
                key={button.value}
                id={button.value}
                activeId={activeMenu}
                text={button.text}
                callback={menuHandler}
              />
            ),
          )}
        </StyledLoanLeaseMenu>
        <LoanLeaseBlock props={data} />
      </StyledLoanLease>
      <StyledInfoCard>
        <InfoCard
          MSRP={data.MSRP}
          vehicle={data.vehicleName}
          dealerName={data.dealerName}
          dealerPhone={data.dealerPhone}
          dealerRating={data.dealerRating}
        />
      </StyledInfoCard>
    </StyledAppBlock>
  );
};

export default Main;
