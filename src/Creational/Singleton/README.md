
# 单例模式 Singleton Pattern

单例模式，即保证一个类仅有一个实例，并提供一个访问它的全局访问点。

以下提供三种创建单例模式的方法。

* 使用静态方法
* 使用构造函数
* 使用代理模式

### 使用静态方法

``` js
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
```

测试：

``` js
const a = Singleton.create('a');
const b = Singleton.create('b');

console.log(a.name, b.name, a === b);
// a a true
```

* 缺点：使用 `new` 关键字创建实例，会造成与预期情况不符。

### 使用构造函数

``` js
class Singleton {
  constructor(name) {
    if (typeof Singleton.instance === 'object') {
      return Singleton.instance;
    }
    Singleton.instance = this;

    this.name = name;
  }
}
```

测试：

``` js
const a = new Singleton('a');
const b = new Singleton('b');

console.log(a.name, b.name, a === b);
// a a true
```

* 缺点：不符合单一职责的原则，

### 使用代理模式

``` js
class Instance {
  constructor(name) {
    this.name = name;
  }
}

class Singleton {
  constructor(name) {
    if (!Singleton.instance) {
      Singleton.instance = new Instance(name);
    }
    return Singleton.instance;
  }
}
```

测试：

``` js
const a = new Singleton('a');
const b = new Singleton('b');

console.log(a.name, b.name, a === b);
// a a true
```

* 缺点：构建额外的代理类