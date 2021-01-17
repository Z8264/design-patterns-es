class A1 {
  constructor() {
    this.name = 'A1';
  }
}
class A2 {
  constructor() {
    this.name = 'A2';
  }
}

class B1 {
  constructor() {
    this.name = 'B1';
  }
}
class B2 {
  constructor() {
    this.name = 'B2';
  }
}

class FactoryA {
  static create(product) {
    switch (product.toUpperCase()) {
      case 'A1': return new A1();
      case 'A2': return new A2();
      default:
        throw new Error('no product');
    }
  }
}

class FactoryB {
  static create(product) {
    switch (product.toUpperCase()) {
      case 'B1': return new B1();
      case 'B2': return new B2();
      default:
        throw new Error('no product');
    }
  }
}

class AbstractFactory {
  static create(factory) {
    switch (factory.toUpperCase()) {
      case 'A': return FactoryA;
      case 'B': return FactoryB;
      default:
        throw new Error('no factory');
    }
  }
}

export default AbstractFactory;
