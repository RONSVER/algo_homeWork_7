class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class SpecialStack {
  constructor() {
    this.mainStack = new Stack();
    this.minStack = new Stack();
  }

  push(element) {
    this.mainStack.push(element);

    if (this.minStack.isEmpty() || element <= this.minStack.peek()) {
      this.minStack.push(element);
    }
  }

  pop() {
    if (this.mainStack.isEmpty()) {
      return null;
    }

    const poppedItem = this.mainStack.pop();

    if (poppedItem === this.minStack.peek()) {
      this.minStack.pop();
    }

    return poppedItem;
  }

  getMin() {
    if (this.minStack.isEmpty()) {
      return null;
    }
    return this.minStack.peek();
  }

  isEmpty() {
    return this.mainStack.isEmpty();
  }
}

// Пример использования:
const specialStack = new SpecialStack();
specialStack.push(3);
specialStack.push(5);
specialStack.push(2);
specialStack.push(1);

console.log(specialStack.getMin()); // Выведет: 1
specialStack.pop();
console.log(specialStack.getMin()); // Выведет: 2
