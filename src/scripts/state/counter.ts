import Store from "../lib/Store";

const state = {
  count: 0,
};

const actions = {
  incrementCount(context: any) {
    context.commit("incrementCount");
  },
};

const mutations = {
  incrementCount(state: any) {
    state.count++;
    return state;
  },
};

export default new Store({
  actions,
  mutations,
  state,
});
