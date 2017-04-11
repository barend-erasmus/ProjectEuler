var fs = require('fs');


fs.readFile('./grid.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    var grid = [];
    var largestProductResult = 0;

    var lines = data.split(/\r?\n/);

    for (var i = 0; i < lines.length; i++) {
        var x = lines[i].split(' ');

        grid.push(x);
    }

    //Loop rows 
    for (var r = 0, nr = grid.length; r < nr; r++) {
        //Loop columns
        for (var c = 0, limit = nr - 3; c < nr; c++) {
            //Horizontal
            if (c < limit) {
                var n = grid[r][c] * grid[r][c + 1] * grid[r][c + 2] * grid[r][c + 3];
                if (n > largestProductResult) largestProductResult = n;
            }
            //Vertical
            if (r < limit) {
                var n = grid[r][c] * grid[r + 1][c] * grid[r + 2][c] * grid[r + 3][c];
                if (n > largestProductResult) largestProductResult = n;
            }
            //Diagonal [\]
            if (c < limit && r < limit) {
                var n = grid[r][c] * grid[r + 1][c + 1] * grid[r + 2][c + 2] * grid[r + 3][c + 3];
                if (n > largestProductResult) largestProductResult = n;
            }
            //Diagonal [/]
            if (c > 3 && r < limit) {
                var n = grid[r][c] * grid[r + 1][c - 1] * grid[r + 2][c - 2] * grid[r + 3][c - 3];
                if (n > largestProductResult) largestProductResult = n;
            }
        }
    }
    console.log(largestProductResult);

});
