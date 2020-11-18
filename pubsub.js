class PubSub {

  static subscribers = [];

  constructor () {

  }

  static subscribe (eventIn, subscriberIn) {
    PubSub.subscribers.push({event: eventIn, callback: subscriberIn});
  }

  unregister(observerIn) {
    let newobservers = [];
    for (let observer of this.observers)
      if(observer != observerIn)
        newobservers.push(observer);

    this.observers = newobservers;
  }


  static publish(eventIn, dataIn) {
    for(let subscriber of PubSub.subscribers)
      if(eventIn === subscriber.event)
        subscriber.callback(dataIn);
  }

}
