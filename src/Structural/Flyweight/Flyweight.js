class Flyweight {
  constructor(value) {
    this.value = value;
  }
}

class Instance {
  constructor() {
    this.items = [];
  }

  create(value) {
    this.items.push(new Flyweight(value));
    return this;
  }
}

export default Instance;
