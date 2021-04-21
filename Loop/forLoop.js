
/**
 * Javascript mainly provide three kind of loop-
 *      1.for loop.
 *      2.while loop.
 *      3.do-while loop.
 * 
 * here we practice for loop;
 * 
 *    There are three step common in every loop
 *           i. Initialization.
 *          ii. Condition.
 *         iii. Increment/decrement the value of the loop variable.
 */


for(let i=0; i<5; i++){
    console.log("Hello!");
}

/**
 * we use loop for repeated task which is same.
 */

/**
 * we can use the below code to sum at a range.
 */

let start = 1; /// lower bound
let end = 10; /// upper bound
let sum = 0;  ///containing the sum.

for(let i=start; i<=end; i++){
    sum += i;
}

console.log("The sum from " + start + " to " + end + " is " + sum);