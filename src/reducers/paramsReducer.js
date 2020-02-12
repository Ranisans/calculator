import { CHANGE_ZIP } from '../actions/paramsAction';
import { defaultValue } from '../constants';

export const initialState = {
  zipCode: defaultValue,
};

export const paramsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ZIP:
      return {
        ...state,
        zipCode: action.zipCode,
      };
    default:
      return state;
  }
};
