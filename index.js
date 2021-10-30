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

    max() {}

    min() {}

    sum() {}

    avg() {}
}

module.exports = SortedList;