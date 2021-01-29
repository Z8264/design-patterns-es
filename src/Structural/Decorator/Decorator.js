class Original {
  constructor(value) {
    this.value = value;
  }

  execute() {
    return this.value;
  }
}

class Decorator extends Original {
  superExecute() {
    return this.value * 2;
  }
}

export default Decorator;
