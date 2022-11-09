function whatNumberIsIt(n) {
    //coding here
    let x;
    /*switch (n) {
        case Number.MAX_VALUE:
            x = "Input number is Number.MAX_VALUE"
            break;
        case Number.MIN_VALUE:
            x = "Input number is Number.MIN_VALUE"
            break;
        case :
            x = "Input number is Number.NaN"
            break;
        case -Infinity:
            x = "Input number is Number.NEGATIVE_INFINITY"
            break;
        case Infinity:
            x = "Input number is Number.POSITIVE_INFINITY"
            break;
            default: 
            x = "Input number is: " + n;
            break;
    }*/
    if (n === Number.MAX_VALUE) { 
        return x = "Input number is Number.MAX_VALUE"
    } else if (n === Number.MIN_VALUE) { 
        return x = "Input number is Number.MIN_VALUE"
    } else if (n === -Infinity) { 
        return x = "Input number is Number.NEGATIVE_INFINITY"
    } else if (n === Infinity) { 
        return x = "Input number is Number.POSITIVE_INFINITY"
    } else if (isNaN(n)) { 
        return x = "Input number is Number.NaN"
    } else return x = "Input number is " + n;
    
}