class Subject {

  static mousedown = new Subject();
  static gamelost = new Subject();

  constructor () {
    this.observers = [];
  }

  register (observerIn) {
    this.observers.push(observerIn);
  }

  unregister(observerIn) {
    let newobservers = [];
    for (let observer of this.observers)
      if(observer != observerIn)
        newobservers.push(observer);

    this.observers = newobservers;
  }

  notify(data) {
    for(let observer of this.observers)
      observer(data);
  }

}
