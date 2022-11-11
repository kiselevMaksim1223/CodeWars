function howManySmaller(arr, n) {
    //coding here..
    /*let newArr = [];
    let b;
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].toFixed(2))
        console.log(newArr)
        for (let j =0; j < newArr.length; j++) { 
            if ( n <= newArr[j]) { 
                b = j
            }
        }
    }
    return b*/
    let newArr = [];
    for (let i = 0; i < arr.length; i++) { 
        // newArr.push(arr[i].toFixed(2))
        if (arr[i].toFixed(2) <= n) { 
        }
        return i;
    
    }
}