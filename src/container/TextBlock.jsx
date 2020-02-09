import React from 'react';
import PropTypes from 'prop-types';

import StyledBlock from './StyledBlock';
import Paragraph from '../component/Paragraph';
import InfoIcon from '../component/InfoIcon';

const TextBlock = ({
  text,
  infoText,
  sign = '',
  value,
}) => (
  <StyledBlock>
    <div className="info">
      {text}
      <InfoIcon infoText={infoText} />
    </div>
    <Paragraph sign={sign} value={value} />
  </StyledBlock>
);

TextBlock.propTypes = {
  text: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
  sign: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};
TextBlock.defaultProps = {
  sign: '',
};

export default TextBlock;
