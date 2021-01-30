class Instance {
  constructor() {
    this.value = true;
  }
}

class Proxy {
  constructor() {
    return new Instance();
  }
}

export default Proxy;
