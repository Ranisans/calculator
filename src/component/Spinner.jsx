import React from 'react';

import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const spinner = keyframes`
    0% {
        transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
         transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
`;

const Loader = styled.div`
  height: 100%;
  opacity: 1;
  margin-top: 25%;
  position: relative;
  transition: opacity linear 0.1s;    
  &::before {
      animation: 2s linear infinite ${spinner};
      border: solid 3px #eee;
      border-bottom-color: #EF6565;
      border-radius: 50%;
      content: "";
      height: 80px;
      left: 50%;
      opacity: inherit;
      position: absolute;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      transform-origin: center;
      width: 80px;
      will-change: transform;
  }
`;

const Spinner = () => (
  <Loader />
);

export default Spinner;
