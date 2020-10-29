import Store from "./lib/store";

const state = {
  isLoading: true,
  weatherData: {} as any,
  count: 0,
};

const actions = {
  setIsLoading(context: any, payload: any) {
    context.commit("setIsLoading", payload);
  },
  setWeatherData(context: any, payload: any) {
    context.commit("setWeatherData", payload);
  },
  incrementCount(context: any) {
    context.commit("incrementCount");
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
  incrementCount(state: any) {
    state.count++;
    console.log(state.count);
    return state;
  },
};

export default new Store({
  actions,
  mutations,
  state,
});
