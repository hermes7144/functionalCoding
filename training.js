class Wrapper {
  constructor(value) {
    this._value = value;
  }

  map(f) {
    return f(this._value);
  };

  fmap(f) {
    return new Wrapper(f(this._value))
  }

  toString() {
    return `Wrapper ( ${this._value} )`;
  }
}

const wrap = val => new Wrapper(val);

const wrappedValue = wrap('Get Functional');
const item = wrappedValue.map(identify);
console.log(item);
function identify(item) { return item };

class Empty {
  map(f) {
    return this;
  }
  fmap(_) {
    return new Empty();
  }
  toString() {
    return 'Empty ()'
  }
}
const empty = () => new Empty();

const isEven = n => Number.isFinite(n) && (n % 2 === 0);
const half = val => isEven(val) ? wrap(val / 2) : empty();

const plus3 = n => n + 3;

console.log(half(4).fmap(plus3));
console.log(half(3));


console.log(half(3).map(identify));