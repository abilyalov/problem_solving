function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  printCollection() {
    console.log(this.collection);
  }

  enqueue(node) {
    this.collection.push(node);
    this.bubbleUp();
  }
  bubbleUp() {
    let i = this.size() - 1;
    let node = this.collection[i];

    while (true) {
      let parent = Math.floor((i - 1) / 2);
      if (parent < 0) return;

      if (this.collection[parent][1] > node[1]) {
        swap(this.collection, parent, i);
        i = parent;
      } else break;
    }
  }
  dequeue() {
    if (this.isEmpty()) return;
    if (this.size() === 1) {
      return this.collection.pop()[0];
    }
    let pop = this.collection[0];

    this.collection[0] = this.collection.pop();
    this.bubbleDown();
    return pop[0];
  }
  bubbleDown() {
    let node = this.collection[0];
    let i = 0;
    while (true) {
      let child1 = 2 * i + 1;
      let child2 = 2 * i + 2;
      if (child2 >= this.size()) return;
      let min =
        this.collection[child1][1] > this.collection[child2][1]
          ? child2
          : child1;

      if (this.collection[min][1] < node[1]) {
        swap(this.collection, i, min);
        i = min;
      } else break;
    }
  }
  front() {
    return this.collection[0];
  }
  size() {
    return this.collection.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
}