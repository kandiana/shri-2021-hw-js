const MySet = require('./solution/');
const { test } = require('@jest/globals');

const data = [4, 8, 15, 15, 16, 23, 42];
const set = new MySet(data);

test('хранит только уникальные значения', () => {
  expect([...set]).toEqual([4, 8, 15, 16, 23, 42]);
});

test('есть свойство size', () => {
  expect(set.size).toEqual(6);
});

test('работает в цикле for-of', () => {
  const checkArr = [];

  for (const item of set) {
    checkArr.push(item);
  }

  expect(checkArr).toEqual([4, 8, 15, 16, 23, 42]);
});
