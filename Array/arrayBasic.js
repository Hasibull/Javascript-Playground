var value = [12, 15, 23, 50];

console.log('main array');
console.log(value);

console.log('before adding new element');
for(let i of value) {
    process.stdout.write(i + ' ');
}

console.log('');

value.push(60);
value.push(70);

console.log('after adding new element');
for(let i of value) {
    process.stdout.write(i + ' ');
}

console.log('');

value.pop();

console.log('after removing a element');
for(let i of value) {
    process.stdout.write(i + ' ');
}