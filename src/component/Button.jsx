import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledButton = styled.div`
  height: 100%;
  width: 100%;
  color: ${(props) => (props.active ? '#FFF' : '#000')};
  background-color: ${(props) => (props.active ? '#0068bc' : '#FFF')};
  font-size: ${(props) => (props.fontSize)}rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid lightgray;
  box-sizing: border-box;
`;

const Button = (
  {
    id, text, activeId, fontSize = 1.2, callback,
  },
) => (
  <StyledButton
    tabIndex={0}
    fontSize={fontSize}
    active={id === activeId}
    onClick={() => callback(id)}
    onKeyPress={() => callback(id)}
  >
    <span>{text}</span>
  </StyledButton>
);

Button.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  activeId: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
  fontSize: PropTypes.number,
};

Button.defaultProps = {
  fontSize: 1.2,
};

export default Button;
