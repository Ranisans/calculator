import React from 'react';
import styled from '@emotion/styled';

const StyledError = styled.div`
  position: relative;
  margin-top: 25%;
  left: 35%;
  width: 430px;
  font-size: 2rem;
  color: lightgrey;
`;

const Error = () => (
  <StyledError>
    Sorry, something went wrong!
  </StyledError>
);

export default Error;
