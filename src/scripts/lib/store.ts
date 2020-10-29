import PubSub from "./pubsub";

export default class Store {
  actions: any;
  mutations: any;
  state: any;
  status: any;
  events: any;

  constructor(params: any) {
    let self = this;

    self.actions = {};
    self.mutations = {};
    self.state = {};

    self.status = "resting";
    self.events = new PubSub();

    if (params.hasOwnProperty("actions")) {
      self.actions = params.actions;
    }
    if (params.hasOwnProperty("mutations")) {
      self.mutations = params.mutations;
    }

    self.state = new Proxy(params.state || {}, {
      set: (state: any, key: string, value: any) => {
        state[key] = value;
        self.events.publish("stateChange", self.state);
        console.log("self state", self);

        if (self.status !== "mutation") {
          console.warn(`You should use a mutation to set ${key}`);
        }
        self.status = "resting";

        return true;
      },
    });
  }

  dispatch(key: string, payload: any) {
    let self = this;

    if (typeof self.actions[key] !== "function") {
      return false;
    }

    self.status = "action";
    self.actions[key](self, payload);
    return true;
  }

  commit(key: string, payload: any) {
    console.log("commiting");
    let self = this;
    console.log("comminting self", self);

    if (typeof self.mutations[key] !== "function") {
      return false;
    }

    self.status = "mutation";
    let newState = self.mutations[key](self.state, payload);
    self.state = Object.assign(self.state, newState);
    return true;
  }
}
