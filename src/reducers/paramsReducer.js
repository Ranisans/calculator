import { CHANGE_ZIP, CHANGE_SCORE } from '../actions/paramsAction';

export const initialState = {
  zipCode: 0,
  score: 0,
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
