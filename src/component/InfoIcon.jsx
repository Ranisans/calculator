import React from 'react';
import styled from '@emotion/styled';

import PropTypes from 'prop-types';

const StyledIcon = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid gray;
  font-size: 0.65rem;
  text-align: center;
  font-weight: 400;

  top:5px;

  width: 10px;
  height: 10px;

  border-radius: 100%;

  span {
    position: absolute;
    top: 20px;
    left: 50%;
    
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.6s;

    width: 250px;
    margin-left: -125px;
    padding: 4px;
    color: #000;
    text-align: left;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: white;
    font-weight: 400;
    font-size: 0.85rem;

    box-shadow: 0px 0px 12px -4px rgba(0,0,0,0.75);
    z-index: 1;
  }

  span::after {
    content: " ";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -14px;
    border: 9px solid transparent;
    border-bottom-color: white;
  }

  span::before {
    content: " ";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -15px;
    border: 10px solid transparent;
    border-bottom-color: black;
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

const InfoIcon = ({ infoText }) => (
  <StyledIcon>
    i
    <span>{infoText}</span>
  </StyledIcon>
);

InfoIcon.propTypes = {
  infoText: PropTypes.string.isRequired,
};

export default InfoIcon;
