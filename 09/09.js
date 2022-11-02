function padIt(str, n) {
    /*let i = 0;
    let res = [];
    let s = '*'
    res.push(str);
    while (i < n) {
        i++;
        if (i % 2 === 0) {
            res.push(s);
        } else {
            res.unshift(s);
        }
    }
    res.toString();
    return res.join('');*/
    while (n > 0) {
        if (n%2===0) { 
            str = str + "*";
        } else {
            str = "*" + str;
        }
        n--;
    }
    return str;
}