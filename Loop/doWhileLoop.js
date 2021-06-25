/**
 * This is another kind of loop.
 * 
 * do the task first then check condition. :)
 */

let counter = 1;

do {
    let innerCounter = 1;
    do{
        process.stdout.write('*');
	innerCounter++;
    }while(innerCounter<=counter);
    console.log('');
    counter++;

}while(counter<=10);