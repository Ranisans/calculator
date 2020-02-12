/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StyledBlock from './StyledBlock';
import Input from '../component/Input';
import InfoIcon from '../component/InfoIcon';


const InputBlock = ({
  text,
  infoText,
  sign = null,
  initialValue = '',
  maxValue = null,
  errorMessage = null,
  callback,
}) => {
  const [value, setValue] = useState(initialValue);
  const [errorHidden, setErrorHidden] = useState(true);

  const inputHandler = (inputValue) => {
    if (inputValue <= maxValue) {
      setErrorHidden(true);
      setValue(inputValue);
    } else {
      setErrorHidden(false);
    }
  };

  const onBlur = () => {
    if (errorHidden) {
      callback(value);
    }
  };

  return (
    <StyledBlock
      errorHidden={errorHidden}
    >
      <div className="info">
        {text}
        <InfoIcon infoText={infoText} />
      </div>

      <div className="error">
        {errorMessage}
      </div>

      <Input
        sign={sign}
        initialValue={initialValue}
        callback={maxValue ? inputHandler : setValue}
        onBlur={onBlur}
      />
    </StyledBlock>
  );
};

InputBlock.propTypes = {
  text: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
  sign: PropTypes.string,
  initialValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  maxValue: PropTypes.number,
  errorMessage: PropTypes.string,
  callback: PropTypes.func.isRequired,
};
InputBlock.defaultProps = {
  sign: '',
  initialValue: '',
  maxValue: null,
  errorMessage: null,
};

export default InputBlock;
