class Shape {
  constructor() {
    this.name = '';
  }

  draw() {}
}

class Circle extends Shape {
  constructor() {
    super();
  }

  draw() {
    return 'Circle';
  }
}
class Rectangle {
  draw() {
    return 'Rectangle';
  }
}

class ShapDecorator {
  constructor() {
    super();
    this.num = 1;
  }
}

export default Decorator;
