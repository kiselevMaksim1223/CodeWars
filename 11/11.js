function grabDoll(dolls) {
    var bag = [];
    for (var i = 0; i < dolls.length; i++) {
         if (dolls[i] === "Mickey Mouse" && bag.length < 3) { 
            bag.push(dolls[i]);
        }
         else if (dolls[i] === "Hello Kitty" && bag.length < 2) {
            bag.push(dolls[i]);
        // } else if (bag.length < 2) {
        //     continue;
        } else break;
    }
    return bag;
}