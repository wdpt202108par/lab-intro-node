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

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.length -1];
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    // return this.items.reduce((a, b) => a + b);
    return this.items.reduce(function (a, b) {return a + b});
  }

  avg() {}
}

module.exports = SortedList;