import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledInput = styled.div`
  width: 300px;
  height: 30px;
  display: flex;
  border: 1px solid lightgray;
  border-radius: 5px;

  div {
    display: ${(props) => (props.sign ? 'flex' : 'none')};
    height: 100%;
    width:  30px;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
  }

  input {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-size: 1.1rem;
    border: none;
    text-align: ${(props) => (props.isNumber ? 'right' : 'center')};
  }
`;

const Input = ({ sign = null, isNumber = false, callback }) => {
  const [value, setValue] = useState('');

  const inputHandler = (e) => {
    callback(e.target.value);
    setValue(e.target.value);
  };

  return (
    <StyledInput sign={sign} isNumber={isNumber}>
      <div>{sign}</div>
      <input
        type={isNumber ? 'number' : 'text'}
        onChange={inputHandler}
        value={value}
      />
    </StyledInput>
  );
};

Input.propTypes = {
  sign: PropTypes.string,
  isNumber: PropTypes.bool,
  callback: PropTypes.func.isRequired,
};
Input.defaultProps = {
  sign: null,
  isNumber: false,
};

export default Input;
