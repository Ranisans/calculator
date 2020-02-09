import {
  CHANGE_CALCULATOR_TYPE,
  CHANGE_LOAN_TERM,
  CHANGE_LEASE_TERM,
} from '../actions/termsAction';
import { LoanPosition } from '../constants';

export const initialState = {
  calculatorType: LoanPosition,
  loanTerm: 0,
  leaseTerm: 0,
};

export const termsReducer = (state = initialState, action) => {
  switch (action.types) {
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
