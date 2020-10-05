import store from './connected-store';

const connector = (createStore) => (...args) => {
  const newStore = createStore(...args);
  store.set(newStore);
  return newStore;
};

export default connector;
