class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a, b) {
      return a - b;
    });
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error('Out of Bounds');
    }
    return this.items[pos];
}

  max() {
    if (this.length <= 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.length - 1]
  }

  min() {
    if (this.length <= 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0]
  }

  sum() {
    if (this.length <= 0) {
      return 0;
    } else {
      var total = this.items.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
      })
      return total;
    }
  }

  avg() {
    if (this.length <= 0) {
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;