class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
      this.items.push(item);
      this.items.sort((a,b)=>a-b );
      this.length=this.items.length
  }

  get(pos) {
    if (this.items[pos] === undefined){
      throw new Error ('OutofBoundds');
    }else{
      return (this.items[pos]);
    }
  }

  max() {
    if (this.length === 0){
    throw new Error('EmptySortedList');
    }else{
      return (this.items[this.length -1]);
    }
  }

  min() {
    if (this.length == 0){
      throw new Error('EmptySortedList');
    }else {
      return (this.items[0]);
    }
  }

  sum() {
    let sumAll = 0;

    for (let i = 0; i < this.items.length; i++){
      sumAll += this.items[i];
    }
    return sumAll;
  }

  avg() {
    let averageAll = 0;
    if (this.length === 0 ){
      throw new Error('EmptySortedList');
    }
    for (let i = 0; i < this.items.length; i++){
    averageAll += this.items[i];
    }
    return averageAll / this.length;
  }
}

module.exports = SortedList;
