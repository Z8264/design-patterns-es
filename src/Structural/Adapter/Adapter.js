class Standard {
  execute() {
    return false;
  }
}

class Instance {
  action() {
    return true;
  }
}
class Adapter {
  static adapter(instance) {
    instance.execute = instance.action;
  }
}

export { Standard, Instance, Adapter };
