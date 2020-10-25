export default class PubSub {
  events: any;
  constructor() {
    this.events = {};
  }
  subscribe(event: string, callback: () => void) {
      console.log('subscribe: ', event);
      let self = this;
      if (!self.events.hasOwnProperty(event)) {
          self.events[event] = []
      }
      return self.events[event].push(callback);
  }
  publish(event: string, data = {}) {
      console.log('publish', event);
      let self = this;
      if (!self.events.hasOwnProperty(event)) {
          return []
      }
      return self.events[event].map(((callback: any) => callback(data));
  }
}
