class Instance {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  add(observer) {
    this.children.push(observer);
  }

  execute(value) {
    this.value = value;
    this.children.forEach((child) => child.execute(this));
  }
}

class Observer {
  constructor(rate) {
    this.value = 0;
    this.rate = rate;
  }

  execute(instance) {
    this.value = this.rate * instance.value;
  }
}

export { Observer, Instance };
