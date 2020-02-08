import React from 'react';
import styled from '@emotion/styled';

import Input from '../component/Input';
import InfoIcon from '../component/InfoIcon';

const StyledInputBlock = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 7px;

  .info {
    display: flex;
    justify-content: left;
    width: 150px;
    align-items: flex-end;
    
    font-size: 1.1rem;
  }
`;

const InputBlock = ({
  text,
  infoText,
  sign = null,
  isNumber = false,
  callback,
}) => (
  <StyledInputBlock>
    <div className="info">
      {text}
      <InfoIcon infoText={infoText} />
    </div>
    <Input sign={sign} isNumber={isNumber} callback={callback} />
  </StyledInputBlock>
);

export default InputBlock;
