export class Executor {
  constructor() {
    this.state = false;
  }

  execute() {
    this.state = true;
  }
}

export class Command {
  constructor(instance) {
    this.instance = instance;
  }

  execute() {
    this.instance.execute();
  }
}

export class Commander {
  constructor(command) {
    this.command = command;
  }

  execute() {
    this.command.execute();
  }
}
