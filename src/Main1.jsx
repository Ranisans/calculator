/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from '@emotion/styled';

import Button from './component/Button';
import LoanBlock from './container/LoanBlock';
import LeaseBlock from './container/LeaseBlock';
import InfoCard from './container/InfoCard';

import { loanCallbacks, leaseCallbacks, infoCardCallbacks } from './logic/containerCallbacks';

const StyledAppBlock = styled.div`
  display: grid;
  grid-template-columns: 450px auto;
  width: 850px;
  height: 385px;
  margin: auto;
  border: 1px solid gray;
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

const StyledInfoCard = styled.div`
  width: 100%;
  height: 100%;
  /* width: 465px; */
  box-sizing: border-box;
  margin-left: auto;
`;

const App = () => {
  const menuElements = [{ text: 'Loan', value: 1 }, { text: 'Lease', value: 2 }];
  const [activeMenu, setActiveMenu] = useState(menuElements[0].value);

  const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
  const arr = [
    { text: 'one', value: 1 },
    { text: 'two', value: 2 },
    { text: 'three', value: 3 },
    { text: 'four', value: 4 },
  ];
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
                callback={setActiveMenu}
              />
            ),
          )}
        </StyledLoanLeaseMenu>
        {/* <LoanBlock
          termValues={arr}
          defaultTermValue={1}
          creditScoreValues={arr}
          defaultCreditScore={1}
          zipCode={122221}
          callbacks={loanCallbacks}
        /> */}
        <LeaseBlock
          leaseTermValues={arr}
          leaseInitialTerm={1}
          mileagesValues={arr}
          initialMileage={1}
          creditScoreValues={arr}
          defaultCreditScore={1}
          zipCode={122221}
          callbacks={leaseCallbacks}
        />
      </StyledLoanLease>
      <StyledInfoCard>
        <InfoCard
          MSRPInitial={10000}
          vehicleInitial="Mazda"
          monthlyPayment={860}
          taxesAmount={102.55}
          dealerName="Vasya"
          dealerPhone="8-800-555-35-35"
          dealerRating="Nowhere Below"
          callbacks={infoCardCallbacks}
        />
      </StyledInfoCard>
    </StyledAppBlock>
  );
};

export default App;
