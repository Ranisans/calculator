import {
  CHANGE_TRADE_IN,
  CHANGE_DOWN_PAYMENT,
  CHANGE_MILEAGES,
  CHANGE_APR,
  CHANGE_MSRP,
  CHANGE_SCORE,
} from '../actions/variablesAction';
import { defaultValue } from '../constants';

export const initialState = {
  tradeIn: defaultValue,
  downPayment: defaultValue,
  mileages: defaultValue,
  apr: defaultValue,
  msrp: defaultValue,
  score: defaultValue,
};

export const variablesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TRADE_IN:
      return {
        ...state,
        tradeIn: action.value,
      };
    case CHANGE_DOWN_PAYMENT:
      return {
        ...state,
        downPayment: action.value,
      };
    case CHANGE_MILEAGES:
      return {
        ...state,
        mileages: action.value,
      };
    case CHANGE_APR:
      return {
        ...state,
        apr: action.value,
      };
    case CHANGE_MSRP:
      return {
        ...state,
        msrp: action.value,
      };
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.score,
      };
    default:
      return state;
  }
};
