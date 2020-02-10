import { combineReducers } from 'redux';

import { paramsReducer } from './paramsReducer';
import { termsReducer } from './termsReducer';
import { variablesReducer } from './variablesReducer';

const rootReducer = combineReducers({
  params: paramsReducer,
  terms: termsReducer,
  variables: variablesReducer,
});

export default rootReducer;
