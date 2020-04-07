// describe('Bubble Sort', function(){

//     beforeAll(function() {
//         spyOn(bubbleSort, 'swap')
//     })
//     it('it sorts the given array in exactly  passes to swap', function(){
//         bubbleSort([5, 10, 3, 7, 5, 2, 1, 4, 6, 9])
//         expect(bubbleSort.swap.calls.count()).toEqual(9);
//     })

//     it('handles an empty array', function(){
//       expect( bubbleSort([]) ).toEqual( [] );
//     });
//     it('returns the argument if passed an array of 1', function(){
//         expect( bubbleSort([7]) ).toEqual( [7] );
//     })
//     it('it sorts the given array', function(){
//         expect( bubbleSort([5, 10, 3, 7, 5, 2, 1, 4, 6, 9])).toEqual( [1, 2, 3, 4, 5, 5, 6, 7, 9, 10] )
//     })
//   });
// /* eslint-disable no-undef */

// describe('Bubble Sort', function(){

//   it('counting number of times swap was called', function () {
//     expect(bubbleSort([1, 4, 2, 3])).toEqual([1, 2, 3, 4]);
//     spyOn(window, 'swap').and.callThrough();
//     bubbleSort([1, 4, 2, 3]);
//     expect(swap.calls.count()).toEqual(2);
//   });

//   it('handles an empty array', function(){
//     expect( bubbleSort([]) ).toEqual( [] );
//   });

//   it('is an array', function() {
//     expect(Array.isArray(bubbleSort([]))).toEqual(true);
//   });

//   it('sorts an unsorted array', function(){
//     expect( bubbleSort([3, 1, 2, 5, 7, 6, 4]) ).toEqual( [1, 2, 3, 4, 5, 6, 7] );
//   });

//   it('handles a already sorted array', function(){
//     expect( bubbleSort([1, 2, 3, 4, 5, 6, 7]) ).toEqual( [1, 2, 3, 4, 5, 6, 7] );
//   });

//   it('handles an unsorted array of characters', function(){
//     expect( bubbleSort(['d', 'c', 'b', 'e', 'a']) ).toEqual( ['a', 'b', 'c', 'd', 'e'] );
//   });
// });

