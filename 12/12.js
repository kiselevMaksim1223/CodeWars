function giveMeFive(obj){
    //coding here
    let finalArr = [];

    for (let key in obj) { 
        if (key.length === 5) { 
            finalArr.push(key);
        }
         if (obj[key].length === 5) { 
            finalArr.push(obj[key]);
        }
    }
    return finalArr;
  }