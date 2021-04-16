/*
    The concept of data type is encounter because of
    the variations in data.
    JavaScript is a loosely typed and dynamic language.
    Variables in JavaScript are not directly associated with any particular value type.
*/

/*
    Except object, there are mainly 7 types of data used in JavaScript.
*/

//Boolean type. Only contains true or false.

var bool = true;
var newBool = false;

console.log(bool, newBool);

/*
    Null type:
        The Null type has exactly one value: null.

    It is mainly used when something is remain empty.
*/

var nothing = null;

console.log(nothing);

/*
    Undefined type:
        A variable that has not been assigned a value has the value.
    
    Variable without initialize is undefined.
*/

var something = undefined;

console.log(something);

/*
    Number type:
        The Number type is a double-precision 64-bit binary format IEEE 754 value (numbers between -(253 − 1) and 253 − 1).
        In addition to representing floating-point numbers,
        the number type has three symbolic values: +Infinity, -Infinity, and NaN ("Not a Number").
*/

var number = Number.MAX_VALUE;

console.log(number);

/*
    BigInt type:
        The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision.
        A BigInt is created by appending n to the end of an integer or by calling the constructor.
*/

var value = Number.MAX_SAFE_INTEGER;

console.log(value);

/*
    String type:
        JavaScript's String type is used to represent textual data.
*/

var name = "Hasibul Islam";

console.log(name);

/*
    