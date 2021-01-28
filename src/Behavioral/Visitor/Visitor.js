class Instance {
  constructor(value) {
    this.value = value;
  }

  execute(visitor) {
    return visitor.execute(this);
  }
}

class Visitor {
  constructor(rate) {
    this.rate = rate;
  }

  execute(instance) {
    return instance.value * this.rate;
  }
}

export { Instance, Visitor };
