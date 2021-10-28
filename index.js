class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
      return a - b;
    });
    console.log(this.items);
    this.length = this.items.length;
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;