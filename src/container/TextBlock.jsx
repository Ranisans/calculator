import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';


import StyledBlock from './StyledBlock';
import Paragraph from '../component/Paragraph';
import InfoIcon from '../component/InfoIcon';
import Spinner from '../component/Spinner';

const SpinnerContainer = styled.div`
  width: 30px;
  height: 30px;
`;

const TextBlock = ({
  text,
  infoText,
  sign = '',
  value,
  isCalculating = false,
}) => (
  <StyledBlock>
    <div className="info">
      {text}
      <InfoIcon infoText={infoText} />
    </div>
    {isCalculating
      ? (<SpinnerContainer><Spinner size={10} isIntegrated /></SpinnerContainer>)
      : <Paragraph sign={sign} value={value} />}
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
  isCalculating: PropTypes.bool,
};
TextBlock.defaultProps = {
  sign: '',
  isCalculating: false,
};

export default TextBlock;
