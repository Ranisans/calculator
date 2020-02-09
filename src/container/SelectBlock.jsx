import React from 'react';
import PropTypes from 'prop-types';

import StyledBlock from './StyledBlock';
import Select from '../component/Select';
import InfoIcon from '../component/InfoIcon';

const SelectBlock = ({
  text,
  infoText,
  option,
  initialValue = 1,
  callback,
}) => (
  <StyledBlock>
    <div className="info">
      {text}
      <InfoIcon infoText={infoText} />
    </div>
    <Select options={option} initialValue={initialValue} callback={callback} />
  </StyledBlock>
);

SelectBlock.propTypes = {
  text: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
  option: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
  initialValue: PropTypes.number,
  callback: PropTypes.func.isRequired,
};

SelectBlock.defaultProps = {
  initialValue: 1,
};

export default SelectBlock;
