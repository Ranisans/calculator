import {
  CHANGE_TRADE_IN,
  CHANGE_DOWN_PAYMENT,
  CHANGE_MILEAGES,
  CHANGE_APR,
  CHANGE_MSRP,
} from '../actions/variablesAction';

export const initialState = {
  tradeIn: 0,
  downPayment: 0,
  mileages: 0,
  msrp: 0,
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
    default:
      return state;
  }
};
