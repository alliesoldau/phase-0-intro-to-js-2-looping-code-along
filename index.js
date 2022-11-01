// Code your solutions in this file
function writeCards(array, event) {
    const newArray = []
    for(let i = 0; i < array.length; i++) {
        console.log(i);
        newArray[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
        console.log(array[i]);
    }
    return newArray;
}

function countDown(integer) {
    let counter = 0;
    while (counter <= integer) {
        console.log(integer - counter);
        counter++;
    }
}