import Store from "./lib/Store";

const state = {
  isLoading: true,
  weatherData: {} as any,
};

const actions = {
  setIsLoading(context: any, payload: any) {
    context.commit("setIsLoading", payload);
  },
  setWeatherData(context: any, payload: any) {
    context.commit("setWeatherData", payload);
  },
};

const mutations = {
  setIsLoading(state: any, payload: boolean) {
    state.isLoading = payload;
    return state;
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
