import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer';
import { loadStorage, saveState } from './logic/localStorage';

const persistedState = loadStorage();
console.log('TCL: persistedState', persistedState);

const store = createStore(
  rootReducer,
  persistedState,
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
