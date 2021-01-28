class Template {
  start() {}

  end() {}

  execute() {
    return this.start() + this.end();
  }
}

class Instance extends Template {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }

  start() {
    return this.a;
  }

  end() {
    return this.b;
  }
}

export default Instance;
