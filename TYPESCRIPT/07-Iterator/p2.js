var counter = 0;
while (counter < 5) {
    console.log(counter);
    counter++;
}
var list = document.querySelector('#list');
while (list.firstChild) {
    list.removeChild(list.firstChild);
}
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
