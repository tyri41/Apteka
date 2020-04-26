var express = require('express');
var app = express();
var db = require('./dbInteactions');

app.use(express.static('public'));
app.use(express.json());

// parse sqlite output into matrix n x 4 of objects:
// value = (field_content e.g. if column name was EAN value may be 123456789),
// span = for how many rows should that value be spanned (0 if none)
// merged rows have the same value and their preceding columns are also merged
function parseList(rows) {
    let table = [];
    let prev = [null, null, null, null, null, null, null, null, null];
    let ind = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
    function setItem (i, j, val) {
        let item = { value: val, span: 0 };
        if(item.value == prev[j] && (j == 0 || table[i][j-1].span == 0)) {
            table[ind[j]][j].span++;
        } else {
            prev[j] = item.value;
            ind[j] = i;
            item.span = 1;
        }
        return item;
        // name, substance, form, dose, content,
            // EAN, refundation, scope, price
    }
    for(let i = 0;i<rows.length;i++) {
        table.push([]);
        table[i].push(setItem(i, 0, rows[i].NAME));
        table[i].push(setItem(i, 1, rows[i].SUBSTANCE));
        table[i].push(setItem(i, 2, rows[i].FORM));
        table[i].push(setItem(i, 3, rows[i].DOSE));
        table[i].push(setItem(i, 4, rows[i].CONTENT));
        table[i].push(setItem(i, 5, rows[i].EAN));
        table[i].push(setItem(i, 6, rows[i].REFUNDATION));
        table[i].push(setItem(i, 7, rows[i].SCOPE));
        table[i].push(setItem(i, 8, rows[i].PRICE));
    }
    console.log(table);
    return table;
}

// get request for entries
app.get(':find', (req, res) => {
    console.log('got a get');
    console.log(req.path);
    console.log(req.params);
    console.log(req.query);
    db.loadData(req.query, function (err, ret) {
        if(err) res.status(304).send(err);
        else    res.status(200).json(parseList(ret));
    });
});

// set up server
app.listen(8080, function() {
    console.log('server is running');
});

// test database connection
// db.test();
// db.loadData( function (err, ret) {});
db.loadData("", function (err, ret) {
    parseList(ret);
});

//npm install express --save