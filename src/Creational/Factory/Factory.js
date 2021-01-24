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

class C {
  constructor() {
    this.name = 'C';
  }
}

class Factory {
  static create(product) {
    switch (product.toUpperCase()) {
      case 'A': return new A();
      case 'B': return new B();
      case 'C': return new C();
      default:
        throw new Error('no character');
    }
  }
}

export default Factory;
