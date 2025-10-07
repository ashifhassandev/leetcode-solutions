// Method 1:
function MinStack() {
  this.stack = [];
  this.minStack = [];
}

MinStack.prototype.push = function (val) {
  this.stack.push(val);

  if (this.minStack.length === 0 || val <= this.getMin()) {
    this.minStack.push(val);
  }
};

MinStack.prototype.pop = function () {
  const popped = this.stack.pop();

  if (popped === this.getMin()) {
    this.minStack.pop();
  }
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};