function grabDoll(dolls) {
    var bag = [];
    for (var i = 0; i < dolls.length; i++) {
        if (bag.length >= 3) { 
            break;
        }
         else if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") { 
            bag.push(dolls[i]);
                } 
            continue;
        
    }
    return bag;
}