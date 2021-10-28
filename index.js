class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items = this.items.concat(item);
    this.items.sort(function (a,b) {
      return a-b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos] < this.items.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    };
  };

  max() {
    if (this.items = []) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(this.items);
    };
  };

  min() {
    if (this.items = []) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(this.items);
    };
  }

  sum() {
    return this.items.reduce((a,b) => a + b, 0)
  }

  avg() {
    if (this.items = []) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((a,b) => a + b, 0) / this.items.length;
  };
}

module.exports = SortedList;
