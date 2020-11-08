export default class PubSub {
  events: any;

  constructor() {
    this.events = {};
  }
  subscribe(event: string, callback: () => void) {
    let self = this;
    if (!self.events.hasOwnProperty(event)) {
      self.events[event] = [];
    }
    return self.events[event].push(callback);
  }
  publish(event: string, data = {}) {
    let self = this;
    if (!self.events.hasOwnProperty(event)) {
      return [];
    }
    return self.events[event].map((callback: any) => callback(data));
  }
}

// https://jsmanifest.com/the-publish-subscribe-pattern-in-javascript/
export const FunctionalPubSub = () => {
  const subscribers: { [key: string]: any } = {};

  const subscribe = (eventName: string, callback: () => void) => {
    if (!Array.isArray(subscribers[eventName])) {
      subscribers[eventName] = [];
    }
    subscribers[eventName].push(callback);
  };
  const publish = (eventName: string, data: any) => {
    if (!Array.isArray(subscribers[eventName])) {
      return;
    }
    subscribers[eventName].forEach((callback: (data: any) => void) => {
      callback(data);
    });
  };
  return {
    subscribe,
    publish,
  };
};
