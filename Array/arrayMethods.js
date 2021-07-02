var array = [10, 20, 30, 40, 50];

var newArray = array.filter(function(value){
    return value>20;
});

console.log(newArray);