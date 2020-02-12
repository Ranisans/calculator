const storageName = 'redux_state';

export const loadStorage = () => {
  try {
    const serializedState = localStorage.getItem(storageName);
    if (serializedState === null) {
      return undefined;
    }
    const state = JSON.parse(serializedState);
    return state;
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(storageName, serializedState);
  } catch (error) {
    // nothing
  }
};
