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

export { Memento, Instance };
