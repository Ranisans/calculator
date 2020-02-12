import { CHANGE_ZIP, CHANGE_SCORE } from '../actions/paramsAction';
import { defaultValue } from '../constants';

export const initialState = {
  zipCode: defaultValue,
  score: defaultValue,
};

export const paramsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ZIP:
      return {
        ...state,
        zipCode: action.zipCode,
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
