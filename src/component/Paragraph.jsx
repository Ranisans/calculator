import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledParagraph = styled.div`
  width: 300px;
  height: 30px;
  margin: 0;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  font-size: 1.1rem;
`;

const Paragraph = ({ sign = '', value }) => (
  <StyledParagraph>
    {`${value}${sign.length > 0 ? ' ' : ''}${sign}`}
  </StyledParagraph>
);

Paragraph.propTypes = {
  sign: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

Paragraph.defaultProps = {
  sign: '',
};

export default Paragraph;
