import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledButton = styled.div`
  height: 100%;
  width: 100%;
  color: ${(props) => (props.active ? '#FFF' : '#000')};
  background-color: ${(props) => (props.active ? '#0068bc' : '#FFF')};
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid lightgray;
`;


const Button = (
  {
    id, text, activeId, callback,
  },
) => (
  <StyledButton
    active={id === activeId}
    onClick={() => callback(id)}
  >
    <span>{text}</span>
  </StyledButton>
);

Button.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  activeId: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Button;
