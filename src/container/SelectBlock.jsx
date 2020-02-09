import React from 'react';
import PropTypes from 'prop-types';

import StyledBlock from './StyledBlock';
import Select from '../component/Select';
import InfoIcon from '../component/InfoIcon';

const SelectBlock = ({
  text,
  infoText,
  option,
  callback,
}) => (
  <StyledBlock>
    <div className="info">
      {text}
      <InfoIcon infoText={infoText} />
    </div>
    <Select options={option} callback={callback} />
  </StyledBlock>
);

SelectBlock.propTypes = {
  text: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
  option: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
  callback: PropTypes.func.isRequired,
};

export default SelectBlock;
