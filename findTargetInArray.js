function findTarget(array, target) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

const Array = [3, 4, 6, 9, 67, 40];
const ans = findTarget(Array, 40);
console.log(ans);
