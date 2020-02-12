import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer';
import { loadStorage, saveState } from './logic/localStorage';

export const persistedState = loadStorage();

const store = createStore(
  rootReducer,
  persistedState,
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
