function split(wholeArray) {
  let firstHalf;
  let secondHalf;
  // console.log('whole array', wholeArray);

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
  console.log('whole array', wholeArray);
  let arrSplit = split(wholeArray);
  // console.log('>>>>', arrSplit);
  let arrA = arrSplit[0];
  let arrB = arrSplit[1];
  if (arrSplit.length < 1) {
    return wholeArray;
  }




  return merge(mergeSort(arrA), mergeSort(arrB));


  // merge then call mergeSort on arrA and arrB




}
