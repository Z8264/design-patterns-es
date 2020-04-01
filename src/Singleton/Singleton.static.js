class Singleton {
  constructor(name) {
    this.name = name;
    this.instance = null;
  }

  static create(name) {
    if (!this.instance) this.instance = new Singleton(name);
    return this.instance;
  }
}

module.exports = Singleton;
