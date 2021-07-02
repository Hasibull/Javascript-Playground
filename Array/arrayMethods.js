var array = [10, 20, 30, 40, 50];

var newArray = array.filter(function(value) {
    return value>20;
});

console.log(newArray);

var element = array.find(function(value) {
    return value==80;
});

if(element > 0) {
    console.log('Success');
}
else {
    console.log("Element doesn't exist!");
}

var elementIndex = array.findIndex(function(value) {
    return value==40;
});

console.log('Index of 40 is = ' + (elementIndex+1));

var sliceArray = array.slice(1,3);

console.log(sliceArray);
