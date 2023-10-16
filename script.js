var a = 0;

while (a < 10) {
    a++;
    console.log(a);
}

var b = 1;
var c = a - b;
console.log(c);

do {
    c = c - b;
    console.log(c);
} while (c > 1);