const initialState = () => ({
  id: null,
});

const state = initialState;

const getters = {}

const mutations = {
  SET_USER_ID(store, payload) {
    store.id = payload;
  },
};

const actions = {
  generateRandomId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  },
  assignRandomIdToUser(context) {
    const GENERATED_ID = actions.generateRandomId();
    context.commit('SET_USER_ID', GENERATED_ID);
    return GENERATED_ID;
  },
};

export default {
  namespaced: true,
  getters,
  actions,
  mutations,
  state,
};