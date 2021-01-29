class Start {
  constructor(instance) {
    this.instance = instance;
  }

  execute(value) {
    this.instance.value += value * 1;
  }
}

class Process {
  constructor(instance) {
    this.instance = instance;
  }

  execute(value) {
    this.instance.value += value * 2;
  }
}

class End {
  constructor(instance) {
    this.instance = instance;
  }

  execute(value) {
    this.instance.value += value * 3;
  }
}

class Instance {
  constructor() {
    this.value = 0;
    this.chain = [
      new Start(this),
      new Process(this),
      new End(this),
    ];
  }

  execute(value) {
    this.chain.forEach((obj) => {
      obj.execute(value);
    });
  }
}

export default Instance;
