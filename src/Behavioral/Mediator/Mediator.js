class Mediator {
  static execute(instanceA, instanceB) {
    instanceA.execute(instanceB.value);
  }
}

class Instance {
  constructor(value) {
    this.value = value;
  }

  execute(value) {
    this.value = value;
  }
}

export { Instance, Mediator };
