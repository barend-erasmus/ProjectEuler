

for (var a = 1; a < 1000; a++) {
    for (var b = 1; b < 1000; b++) {
        var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

        if (parseInt(c, 10) != c) {
            continue;
        }

        if (a + b + c != 1000) {
            continue
        }

        if (a > b || b > c) {
            continue
        }

        var product = a * b * c;

        console.log(product);
    }
}


