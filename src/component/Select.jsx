import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledSelect = styled.select`
  width: 150px;
  border: 1px solid #ccc;
  height: 30px;
  appearance: none;
  padding: 0 7px;

  background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    radial-gradient(#ddd 40%, transparent 42%);
  background-position:
    calc(100% - 15px) calc(0.8em + 2px),
    calc(100% - 10px) calc(0.8em + 2px), 98% 2px;
  background-size:
    5px 5px,
    5px 5px,
    2em 2em;
  background-repeat: no-repeat;   
`;

const Select = ({ options, initialValue = 1, callback }) => {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const changeHandler = (e) => {
    setCurrentValue(e.target.value);
    callback(e.target.value);
  };
  return (
    <StyledSelect onChange={changeHandler} value={currentValue}>
      {options.map((el) => <option key={el.value} value={el.value}>{el.text}</option>)}
    </StyledSelect>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    text: PropTypes.string,
  })).isRequired,
  initialValue: PropTypes.number,
  callback: PropTypes.func.isRequired,
};

Select.defaultProps = {
  initialValue: 1,
};

export default Select;
