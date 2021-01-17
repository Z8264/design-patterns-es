class A {
  constructor() {
    this.name = 'A';
  }
}

class B {
  constructor() {
    this.name = 'B';
  }
}

class Builder {
  constructor() {
    this.a = new A();
    this.b = new B();
  }
}

export default Builder;
