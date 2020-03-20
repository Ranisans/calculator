import { CHANGE_ZIP } from '../actions/paramsAction';
import { defaultValue } from '../constants';

export const initialState = {
  zipCode: defaultValue.toString(),
};

export const paramsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ZIP:
      return {
        ...state,
        zipCode: action.zipCode.toString(),
      };
    default:
      return state;
  }
};
