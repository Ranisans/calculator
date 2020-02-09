import React from 'react';
import PropTypes from 'prop-types';

import StyledBlock from './StyledBlock';
import Input from '../component/Input';
import InfoIcon from '../component/InfoIcon';

const InputBlock = ({
  text,
  infoText,
  sign = null,
  initialValue = '',
  callback,
}) => (
  <StyledBlock>
    <div className="info">
      {text}
      <InfoIcon infoText={infoText} />
    </div>
    <Input sign={sign} initialValue={initialValue} callback={callback} />
  </StyledBlock>
);

InputBlock.propTypes = {
  text: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
  sign: PropTypes.string,
  initialValue: PropTypes.string,
  callback: PropTypes.func.isRequired,
};
InputBlock.defaultProps = {
  sign: '',
  initialValue: '',
};

export default InputBlock;
