function swap(array, large, small) {
  let temp = array[large];
  array[large] = array[small];
  array[small] = temp;
  return array;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}
/* eslint-disable no-unused-vars */
function bubbleSort(array) {

  let counter = 0;
  let flag = false;

  while (!flag) {
    let initialCounter = counter;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        array = swap(array, i, i + 1);
        counter++;
      }
    }
    if (initialCounter === counter) {
      flag = true;
    }
  }
  return array;
}

function swap(array, indexOne, indexTwo) {
  console.log('>>>>>>> array>>>>>', array);
  let temp = array[indexOne];
  array[indexOne] = array[indexTwo];
  array[indexTwo] = temp;
  return array;
}

