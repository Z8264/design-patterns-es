class Interpreter {
  static execute(commend) {
    return commend + 1;
  }
}

class Command {
  constructor(commend) {
    this.commend = commend;
  }

  execute() {
    return Interpreter.execute(this.commend);
  }
}

export default Command;
