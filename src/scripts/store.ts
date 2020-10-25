import Store from "./lib/store";

const state = {
  isLoading: true,
  weatherData: {} as any,
};

const actions = {
  setIsLoading(context: any, payload: any) {
    context.commit("setIsLoadin", payload);
  },
  setWeatherData(context: any, payload: any) {
    context.commit("setWeatherData", payload);
  },
};

const mutations = {
  setIsLoading(state: any, payload: any) {
    state.isLoading = !state.isLoading;
    return true;
  },
  setWeatherData(state: any, payload: any) {
    state.weatherData = payload;
    return state;
  },
};

export default new Store({
  actions,
  mutations,
  state,
});
