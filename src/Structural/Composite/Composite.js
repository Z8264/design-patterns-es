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

export default Instance;
