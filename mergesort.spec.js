// describe('Split Array function', function() {

//   it('if array is empty, returns empty array', function() {
//     expect(split([])).toEqual([]);
//   });

//   it('is able to split an array into two halves', function() {
//     expect(split([1, 2, 3, 4, 5, 6])).toEqual([[1, 2, 3], [4, 5, 6]]);
//   });

//   it('is able to split an uneven array into two halves', function() {
//     expect(split([1, 2, 3, 4, 5, 6, 7])).toEqual([[1, 2, 3], [4, 5, 6, 7]]);
//   });
// });

// describe('Merge function', function(){
//   it('is able to merge two sorted arrays into one sorted array', function(){
//     expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
//   });
// });

describe('mergeSort function', function(){
  it('is able to take in a single array, split that array, sort each half then merge the sorted arrays into a single sorted array.', function(){
    expect(mergeSort([2, 1, 3, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});
