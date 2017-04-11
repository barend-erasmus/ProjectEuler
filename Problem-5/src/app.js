var i = 1;

while (i < 9007199254740992) {

    var canEvenlyBeDivided = true;

    for (var x = 1; x <= 20; x ++) {
        if (i % x != 0) {
            canEvenlyBeDivided = false;
        }
    }

    if (canEvenlyBeDivided) {
        console.log(i);
        return;
    }

    i ++;
}

