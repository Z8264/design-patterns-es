class Bridge {
  execute(value) {
    return value;
  }
}

class Instance {
  constructor(value, bridge) {
    this.value = value;
    this.bridge = bridge;
  }

  execute() {
    return this.bridge.execute(this.value);
  }
}

export { Bridge, Instance };
