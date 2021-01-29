class Executor {
  constructor() {
    this.state = false;
  }

  execute() {
    this.state = true;
  }
}

class Command {
  constructor(instance) {
    this.instance = instance;
  }

  execute() {
    this.instance.execute();
  }
}

class Commander {
  constructor(command) {
    this.command = command;
  }

  execute() {
    this.command.execute();
  }
}

export { Executor, Command, Commander };
