class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items.indexOf(pos) === -1) {
      throw new Error('OutOfBounds')
    } else {
      return this.items.indexOf(pos);
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;


class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}