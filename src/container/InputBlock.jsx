import React from 'react';

import StyledBlock from './StyledBlock';
import Input from '../component/Input';
import InfoIcon from '../component/InfoIcon';

const InputBlock = ({
  text,
  infoText,
  sign = null,
  isNumber = false,
  callback,
}) => (
  <StyledBlock>
    <div className="info">
      {text}
      <InfoIcon infoText={infoText} />
    </div>
    <Input sign={sign} isNumber={isNumber} callback={callback} />
  </StyledBlock>
);

export default InputBlock;
