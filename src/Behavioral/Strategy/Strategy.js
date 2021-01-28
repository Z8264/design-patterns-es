const METHODS = {
  addition: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  multiplication: (a, b) => a * b,
  division: (a, b) => a / b,
  max: (a, b) => (a > b ? a : b),
  min: (a, b) => ((a < b) ? a : b),
};

class Strategy {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  execute(method) {
    return METHODS[method](this.a, this.b);
  }
}

export default Strategy;
