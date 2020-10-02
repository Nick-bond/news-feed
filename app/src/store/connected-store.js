let connectedStore;

const set = (store) => {
  connectedStore = store;
};

const get = () => connectedStore;

export default {
  set,
  get,
};
