function swap(array, large, small){
    let temp = array[large]
                array[large] = array[small]
                array[small] = temp
                return array
}


function bubbleSort(array) {

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j] > array[j+1]){
                swap(array, j, (j+1)) 
            }
        }
    }
    return array;
}

/* Steps
-Compare i and j
-if i = j, do nothing
-if i < j, do nothing
-if i > j, swap i and j
*/