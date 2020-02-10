import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Button from '../component/Button';
import InfoIcon from '../component/InfoIcon';

const StyledButtonBlock = styled.div`
  margin: 5px 7px;

  .buttons {
    display: grid;
    grid-template-columns: ${(props) => (props.buttons.map(() => '1fr '))};
    height: 45px;
  }
`;

const ButtonBlock = ({
  text, infoText, buttons, defaultButton = 1, callback,
}) => {
  const [activeButton, setActiveButton] = useState(defaultButton);
  const buttonHandler = (id) => {
    setActiveButton(id);
    callback(id);
  };

  const fontSize = 1; // in rem

  return (
    <StyledButtonBlock buttons={buttons}>
      <div className="info">
        {text}
        <InfoIcon infoText={infoText} />
      </div>
      <div className="buttons">
        {buttons.map((button) => (
          <Button
            key={button.value}
            id={button.value}
            activeId={activeButton}
            text={button.text}
            fontSize={fontSize}
            callback={buttonHandler}
          />
        ))}
      </div>
    </StyledButtonBlock>
  );
};

ButtonBlock.propTypes = {
  text: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
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
