import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Button from '../component/Button';

const StyledButtonBlock = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.buttons.map(() => '1fr '))};
  margin: 5px 7px;
  height: 45px;
`;

const ButtonBlock = ({ buttons, defaultButton = 1, callback }) => {
  const [activeButton, setActiveButton] = useState(defaultButton);
  const buttonHandler = (id) => {
    setActiveButton(id);
    callback(id);
  };
  return (
    <StyledButtonBlock buttons={buttons}>
      {buttons.map((button) => (
        <Button
          key={button.value}
          id={button.value}
          activeId={activeButton}
          text={button.text}
          callback={buttonHandler}
        />
      ))}
    </StyledButtonBlock>
  );
};

ButtonBlock.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
  defaultButton: PropTypes.number,
  callback: PropTypes.func.isRequired,
};

ButtonBlock.defaultProps = {
  defaultButton: 1,
};

export default ButtonBlock;
