/**
 * 可以相互替换的算法集合
 */
const METHODS = {
  addition: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  multiplication: (a, b) => a * b,
  division: (a, b) => a / b,
  max: (a, b) => (a > b ? a : b),
  min: (a, b) => ((a < b) ? a : b),
};

/**
 * 定一个可以应用不同策略类
 */
class Strategy {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  calculate(method) {
    return METHODS[method](this.a, this.b);
  }
}

module.exports = Strategy;
