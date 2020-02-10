import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledInput = styled.div`
  width: 150px;
  height: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
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
    text-align: ${(props) => (props.sign ? 'right' : 'center')};
  }
`;

const Input = ({ sign = null, initialValue = '', callback }) => {
  const [value, setValue] = useState(initialValue);

  const inputHandler = (e) => {
    callback(e.target.value);
    setValue(e.target.value);
  };

  return (
    <StyledInput sign={sign}>
      <div>{sign}</div>
      <input
        type={sign ? 'number' : 'text'}
        onChange={inputHandler}
        value={value}
      />
    </StyledInput>
  );
};

Input.propTypes = {
  sign: PropTypes.string,
  initialValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  callback: PropTypes.func.isRequired,
};
Input.defaultProps = {
  sign: null,
  initialValue: '',
};

export default Input;
