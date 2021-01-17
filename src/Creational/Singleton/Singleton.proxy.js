class Instance {
  constructor(name) {
    this.name = name;
  }
}
class Singleton {
  constructor(name) {
    if (!Singleton.instance) {
      Singleton.instance = new Instance(name);
    }
    return Singleton.instance;
  }
}

export default Singleton;
