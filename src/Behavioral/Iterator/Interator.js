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

export default Iterator;
