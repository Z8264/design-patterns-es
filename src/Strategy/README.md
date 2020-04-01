# 策略模式 Strategy Pattern

定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。

``` js
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
 * 定一个可以应用不同策略的类
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
```

测试：

``` js
const strategy = new Strategy(3, 4);
console.log(strategy.calculate('addition')); // 7
```