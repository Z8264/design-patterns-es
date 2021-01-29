class A {
  execute() {
    return 'A';
  }
}

class B {
  execute() {
    return 'B';
  }
}

class C {
  execute() {
    return 'C';
  }
}

class Facade {
  constructor() {
    this.a = new A();
    this.b = new B();
    this.c = new C();
  }

  executeA() {
    return this.a.execute();
  }

  executeB() {
    return this.b.execute();
  }

  executeC() {
    return this.c.execute();
  }
}

export default Facade;
