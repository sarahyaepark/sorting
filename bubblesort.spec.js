describe('Bubble Sort', function(){

    beforeAll(function() {
        spyOn(bubbleSort, 'swap')
    })
    it('it sorts the given array in exactly  passes to swap', function(){
        bubbleSort([5, 10, 3, 7, 5, 2, 1, 4, 6, 9])
        expect(bubbleSort.swap.calls.count()).toEqual(9);
    })

    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('returns the argument if passed an array of 1', function(){
        expect( bubbleSort([7]) ).toEqual( [7] );
    })
    it('it sorts the given array', function(){
        expect( bubbleSort([5, 10, 3, 7, 5, 2, 1, 4, 6, 9])).toEqual( [1, 2, 3, 4, 5, 5, 6, 7, 9, 10] )
    })
  });