import {
  CHANGE_CALCULATOR_TYPE,
  CHANGE_LOAN_TERM,
  CHANGE_LEASE_TERM,
} from '../actions/termsAction';
import { LoanPosition, defaultValue } from '../constants';

export const initialState = {
  calculatorType: LoanPosition,
  loanTerm: defaultValue,
  leaseTerm: defaultValue,
};

export const termsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CALCULATOR_TYPE:
      return {
        ...state,
        calculatorType: action.calculatorType,
      };
    case CHANGE_LOAN_TERM:
      return {
        ...state,
        loanTerm: action.term,
      };
    case CHANGE_LEASE_TERM:
      return {
        ...state,
        leaseTerm: action.term,
      };
    default:
      return state;
  }
};
