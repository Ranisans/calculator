import React from 'react';
import PropTypes from 'prop-types';

import StyledBlock from './StyledBlock';
import Input from '../component/Input';
import InfoIcon from '../component/InfoIcon';

const InputBlock = ({
  text,
  infoText,
  sign = null,
  callback,
}) => (
  <StyledBlock>
    <div className="info">
      {text}
      <InfoIcon infoText={infoText} />
    </div>
    <Input sign={sign} callback={callback} />
  </StyledBlock>
);

InputBlock.propTypes = {
  text: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
  sign: PropTypes.string,
  callback: PropTypes.func.isRequired,
};
InputBlock.defaultProps = {
  sign: '',
};

export default InputBlock;
