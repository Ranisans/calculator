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
`;


const Button = (
  {
    id, value, activeId, callback,
  },
) => (
  <StyledButton
    active={id === activeId}
    onClick={() => callback(id)}
  >
    <span>{value}</span>
  </StyledButton>
);

Button.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  activeId: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Button;
