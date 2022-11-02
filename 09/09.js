function padIt(str, n) {
    let i = 0;
    let res = [];
    let s = '*'
    res.push(str);
    while (i < n) {
        i++;
        switch (i){
            case 1:
            res.unshift(s);
            break;
            case 3:
            res.unshift(s);
            break;
            case 5:
            res.unshift(s);
            break;
            default:
            res.push(s);
        }
    }    
    res.toString();
    return res.join('');
}