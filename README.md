

# Design Patterns in ECMAScript

English | [Chinese](./README-CN.md)

Design patterns (GoF) implemented in ECMAScript.

Code sample principles:

* Minimalism
* Abstract

## Guide

![Design Patterns](./design-patterns.svg)

## Detail
### 📗 Creational Patterns 

Creational patterns that describe how objects are instantiated and focus on the instantiation of classes.
#### Singleton

> Ensure a class has only one instance.

``` javascript
// static
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

``` javascript
// constructor
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

``` javascript
// proxy
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

#### Factory

> Factory Method lets a class defer instantiation to subclasses.

``` javascript
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
        throw new Error('no class');
    }
  }
}
```

#### Abstract Factory

> Provide an interface for creating families of related or dependent objects without specifying their concrete classes. 

``` javascript
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
      case 'A1':
        return new A1();
      case 'A2':
        return new A2();
      default:
        throw new Error('no product');
    }
  }
}
class FactoryB {
  static create(product) {
    switch (product.toUpperCase()) {
      case 'B1':
        return new B1();
      case 'B2':
        return new B2();
      default:
        throw new Error('no product');
    }
  }
}

class AbstractFactory {
  static create(factory) {
    switch (factory.toUpperCase()) {
      case 'A':
        return FactoryA;
      case 'B':
        return FactoryB;
      default:
        throw new Error('no factory');
    }
  }
}
```

#### Builder

> Using multiple simple objects to build a complex object step by step.

``` javascript
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
```

#### Prototype

> Specify the kinds of objects to create using a prototypical instance, and create new objects from the 'skeleton' of an existing object.

``` javascript
class Prototype {
  constructor(name) {
    this.name = name;
  }

  clone() {
    return new Prototype(this.name);
  }
}
```

### 📘 Structural Patterns

Structural patterns which describe how classes or objects can be combined to build larger, more complex structures, focus on combinations of classes and objects.
#### Adapter

> Allows classes with incompatible interfaces to work together by wrapping its own interface around that of an already existing class. 

``` javascript
class Standard {
  execute() {
    return false;
  }
}

class Instance {
  action() {
    return true;
  }
}
class Adapter {
  static adapter(instance) {
    instance.execute = instance.action;
  }
}
```

#### Bridge

> Decouples an abstraction from its implementation so that the two can vary independently. 

``` javascript
class Bridge {
  execute(value) {
    return value;
  }
}

class Instance {
  constructor(value, bridge) {
    this.value = value;
    this.bridge = bridge;
  }

  execute() {
    return this.bridge.execute(this.value);
  }
}
```

#### Composite

> Objects are grouped into a tree structure to represent a part-whole hierarchy.

``` javascript
class Instance {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  add(instance) {
    this.children.push(instance);
  }

  toString() {
    return this.value.toString() + this.children.map((child) => child.toString()).join('');
  }
}
```

#### Decorator

> Dynamically adds/overrides behaviour in an existing method of an object.

``` javascript
class Original {
  constructor(value) {
    this.value = value;
  }

  execute() {
    return this.value;
  }
}

class Decorator extends Original {
  superExecute() {
    return this.value * 2;
  }
}
```

#### Facade

> Provides a simplified interface to a large body of code. 

``` javascript
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
```

#### Flyweight

> Reduces the cost of creating and manipulating a large number of similar objects. 

``` javascript
class Flyweight {
  constructor(value) {
    this.value = value;
  }
}

class Instance {
  constructor() {
    this.items = [];
  }

  create(value) {
    this.items.push(new Flyweight(value));
    return this;
  }
}
```

#### Proxy

> Provides a placeholder for another object to control access, reduce cost, and reduce complexity. 

``` javascript
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
```

### 📙 Behavioral Patterns

Behavioral patterns that describe how to clearly divide the responsibilities of classes and objects and focus on communication between objects.

#### Chain Of Responsibility

> Delegates commands to a chain of processing objects. 

``` javascript
class Start {
  constructor(instance) {
    this.instance = instance;
  }

  execute(value) {
    this.instance.value += value * 1;
  }
}

class Process {
  constructor(instance) {
    this.instance = instance;
  }

  execute(value) {
    this.instance.value += value * 2;
  }
}

class End {
  constructor(instance) {
    this.instance = instance;
  }

  execute(value) {
    this.instance.value += value * 3;
  }
}

class Instance {
  constructor() {
    this.value = 0;
    this.chain = [
      new Start(this),
      new Process(this),
      new End(this),
    ];
  }

  execute(value) {
    this.chain.forEach((obj) => {
      obj.execute(value);
    });
  }
}
```

#### Command

> Creates objects which encapsulate actions and parameters. 

``` javascript
class Executor {
  constructor() {
    this.state = false;
  }

  execute() {
    this.state = true;
  }
}

class Command {
  constructor(instance) {
    this.instance = instance;
  }

  execute() {
    this.instance.execute();
  }
}

class Commander {
  constructor(command) {
    this.command = command;
  }

  execute() {
    this.command.execute();
  }
}
```

#### Interpreter

> Implements a specialized language. 

``` javascript
class Interpreter {
  static execute(commend) {
    return commend + 1;
  }
}

class Command {
  constructor(commend) {
    this.commend = commend;
  }

  execute() {
    return Interpreter.execute(this.commend);
  }
}
```

#### Iterator

> Accesses the elements of an object sequentially without exposing its underlying representation.

``` javascript
class Iterator {
  constructor(arr) {
    this.i = 0;
    this.arr = arr;
  }

  next() {
    this.i += 1;
    return this.arr[this.i];
  }

  hasNext() {
    return this.index < this.arr.length;
  }
}
```

#### Mediator

> Allows loose coupling between classes by being the only class that has detailed knowledge of their methods. 

``` javascript
class Mediator {
  static execute(instanceA, instanceB) {
    instanceA.execute(instanceB.value);
  }
}

class Instance {
  constructor(value) {
    this.value = value;
  }

  execute(value) {
    this.value = value;
  }
}
```

#### Memento

> Provides the ability to restore an object to its previous state. 

``` javascript
class Memento {
  constructor() {
    this.value = '';
  }

  set(value) {
    this.value = value;
  }

  get() {
    return this.value;
  }
}

class Instance {
  constructor(value) {
    this.value = value;
  }

  save(memento) {
    memento.set(this.value);
  }

  restore(memento) {
    this.value = memento.get();
  }
}
```

#### Observer

> A publish/subscribe pattern which allows a number of observer objects to see an event.

``` javascript
class Instance {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  add(observer) {
    this.children.push(observer);
  }

  execute(value) {
    this.value = value;
    this.children.forEach((child) => child.execute(this));
  }
}

class Observer {
  constructor(rate) {
    this.value = 0;
    this.rate = rate;
  }

  execute(instance) {
    this.value = this.rate * instance.value;
  }
}
```

#### State

> Allows an object to alter its behavior when its internal state changes. 

``` javascript
class State {
  constructor(name) {
    this.name = name;
  }

  execute() {
    return this.name;
  }
}

class Instance {
  constructor(state) {
    this.state = state;
  }

  change(state) {
    this.state = state;
  }

  execute() {
    return this.state.execute();
  }
}
```

#### Strategy

> Allows one of a family of algorithms to be selected on-the-fly at runtime.

``` javascript
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
```

#### Template

> Method defines the skeleton of an algorithm as an abstract class, allowing its subclasses to provide concrete behavior. 

``` javascript
class Template {
  start() {}

  end() {}

  execute() {
    return this.start() + this.end();
  }
}

class Instance extends Template {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }

  start() {
    return this.a;
  }

  end() {
    return this.b;
  }
}
```

#### Visitor

> Separates an algorithm from an object structure by moving the hierarchy of methods into one object. 

``` javascript
class Instance {
  constructor(value) {
    this.value = value;
  }

  execute(visitor) {
    return visitor.execute(this);
  }
}

class Visitor {
  constructor(rate) {
    this.rate = rate;
  }

  execute(instance) {
    return instance.value * this.rate;
  }
}
```

## Todo

* Detailed explanation
* Complex application cases
## Support

Please star ⭐️ the repository to show your support!

 ## License

[![License: CC BY-NC-ND 3.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%203.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/3.0/)
