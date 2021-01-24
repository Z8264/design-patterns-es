class A {
  getName() {
    return 'A';
  }
}

class B {
  getName() {
    return 'B';
  }
}

class C {
  getName() {
    return 'C';
  }
}

class Facade {
  constructor() {
    this.a = new A();
    this.b = new B();
    this.c = new C();
  }

  getNameA() {
    return this.a.getName();
  }

  getNameB() {
    return this.b.getName();
  }

  getNameC() {
    return this.c.getName();
  }
}

export default Facade;
