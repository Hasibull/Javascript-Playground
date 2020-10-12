var firstName = "Hasibul";

function getName(){
    var lastName = "Islam";

    console.log(firstName);  // we can access firstName here.
    console.log(lastName);
}

getName();

//console.log(lastName); ---> gives error.
// we can't access lastName here because of
// var defination have function block scop;