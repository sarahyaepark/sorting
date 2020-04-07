function split(wholeArray) {
  let firstHalf;
  let secondHalf;

  if (wholeArray.length < 1) {
    return [];
  }
  let midpoint = Math.floor(wholeArray.length / 2);
  firstHalf = wholeArray.slice(0, midpoint);
  secondHalf = wholeArray.slice(midpoint);

  return [firstHalf, secondHalf];
}

function merge(arrA, arrB) {
  let i = 0;
  let j = 0;
  let result = [];
  while (arrA.length > i && arrB.length > j) {
    if (arrA[i] < arrB[j]) {
      result.push(arrA[i]);
      i++;
    } else {
      result.push(arrB[j]);
      j++;
    }
  }

  return result.concat(arrA.slice(i)).concat(arrB.slice(j));
}

function mergeSort(wholeArray) {
  if (wholeArray.length <= 1) {
    return wholeArray;
  }
  let arrSplit = split(wholeArray);
  let arrA = arrSplit[0];
  let arrB = arrSplit[1];

  return merge(mergeSort(arrA), mergeSort(arrB));
}