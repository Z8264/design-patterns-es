class State {
  constructor(name) {
    this.name = name;
  }

  execute() {
    return this.name;
  }
}

class Instance {
  constructor(state) {
    this.state = state;
  }

  change(state) {
    this.state = state;
  }

  execute() {
    return this.state.execute();
  }
}

export { State, Instance };
