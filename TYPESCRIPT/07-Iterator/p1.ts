// EXAMPLE-1
for (let i = 0; i < 10; i++) {
    console.log('EXAMPLE-1 = ',i);
}

//EXAMPLE-2
let i = 0;
for ( ; i < 10; i++) {
    console.log('EXAMPLE-2 = ',i);
}

// EXAMPLE-3
for (let i = 0; ; i++) {
    console.log('EXAMPLE-3 = ', i);
    if (i > 9) break;
}

// EXAMPLE-4
for (; ;) {
    console.log("example-4 = ",i);
    i++;
    if (i > 9) break;
}