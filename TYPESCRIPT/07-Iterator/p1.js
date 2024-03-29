// EXAMPLE-1
for (var i_1 = 0; i_1 < 10; i_1++) {
    console.log('EXAMPLE-1 = ', i_1);
}
//EXAMPLE-2
var i = 0;
for (; i < 10; i++) {
    console.log('EXAMPLE-2 = ', i);
}
// EXAMPLE-3
for (var i_2 = 0;; i_2++) {
    console.log('EXAMPLE-3 = ', i_2);
    if (i_2 > 9)
        break;
}
// EXAMPLE-4
for (;;) {
    console.log("example-4 = ", i);
    i++;
    if (i > 9)
        break;
}
