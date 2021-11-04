const MySet = require('./solution/');
const { test } = require('@jest/globals');

const data = [4, 8, 15, 15, 16, 23, 42];

test('хранит только уникальные значения', () => {
  const set = new MySet(data);

  expect([...set]).toEqual([4, 8, 15, 16, 23, 42]);
});

test('есть свойство size', () => {
  const set = new MySet(data);

  expect(set.size).toEqual(6);
});

test('работает в цикле for-of', () => {
  const checkArr = [];
  const set = new MySet(data);

  for (const item of set) {
    checkArr.push(item);
  }

  expect(checkArr).toEqual([4, 8, 15, 16, 23, 42]);
});

test('есть метод keys', () => {
  const set = new MySet(data);

  const res = set.keys();

  expect([...res]).toEqual([4, 8, 15, 16, 23, 42]);
});

test('есть метод values', () => {
  const set = new MySet(data);

  const res = set.values();

  expect([...res]).toEqual([4, 8, 15, 16, 23, 42]);
});

test('есть метод entries', () => {
  const set = new MySet(data);

  const res = set.entries();

  expect([...res]).toEqual([
    [4, 4],
    [8, 8],
    [15, 15],
    [16, 16],
    [23, 23],
    [42, 42],
  ]);
});

test('есть метод add', () => {
  const set = new MySet();

  set.add({ a: 3 });

  expect([...set]).toEqual([{ a: 3 }]);
});

test('метод add работает в цепочке', () => {
  const set = new MySet();
  const object = { a: 1, b: 2 };
  const fn = () => {};

  set.add(2).add(object).add('aaa').add(fn);

  expect([...set]).toEqual([2, object, 'aaa', fn]);
});

test('есть метод clear', () => {
  const set = new MySet(data);

  set.clear();

  expect(set.size).toEqual(0);
});

test('есть метод delete', () => {
  const set = new MySet(data);

  set.delete(23);

  expect([...set]).toEqual([4, 8, 15, 16, 42]);
});

test('есть метод has', () => {
  const set = new MySet(data);
  const res = [];

  res.push(set.has(23));
  set.delete(23);
  res.push(set.has(23));

  expect([...res]).toEqual([true, false]);
});

test('set === set.valueOf()', () => {
  const set = new MySet(data);

  const res = set === set.valueOf();

  expect(res).toEqual(true);
});

test('symbol.toStringTag равен ^_^', () => {
  const set = new MySet();

  expect(String(set)).toEqual('[object ^_^]');
});

test('есть метод forEach', () => {
  const set = new MySet();
  const object = {
    getValue() {
      return this.value;
    },
  };
  const objData = {
    value: 42,
  };
  set.add(object);
  let res;

  set.forEach(function (item) {
    res = item.getValue.call(this);
  }, objData);

  expect(res).toEqual(42);
});
