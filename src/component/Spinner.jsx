import React from 'react';
import PropTypes from 'prop-types';

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
 ${(props) => (props.isIntegrated ? '0' : 'margin-top: 25%')};
  position: relative;
  transition: opacity linear 0.1s;    
  &::before {
      animation: 2s linear infinite ${spinner};
      border: solid 3px #eee;
      border-bottom-color: #EF6565;
      border-radius: 50%;
      content: "";
      height: ${(props) => props.size}px;
      opacity: inherit;
      position: absolute;
      ${(props) => (props.isIntegrated ? '0' : 'left: 50%;top: 50%;')};

      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      transform-origin: center;
      width: ${(props) => props.size}px;
      will-change: transform;
  }
`;

const Spinner = ({ size = 80, isIntegrated = false }) => (
  <Loader size={size} isIntegrated={isIntegrated} />
);

Spinner.propTypes = {
  size: PropTypes.number,
  isIntegrated: PropTypes.bool,
};

Spinner.defaultProps = {
  size: 80,
  isIntegrated: false,
};

export default Spinner;
