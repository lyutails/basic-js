const array = [1, 4, 6, 4, 6, 8, 8, 9, 10, 12];
const array2 = [];
const array3 = [];

// smart replace for FOR cycle
array.forEach((elem, index, arr) => {
    array2.push({id: index, value: elem});
})
const myFunction = () => {};
for (let i = 0; i < array.length; i++) {
    array3.push(array[i]);
}
console.log(array2)

// map for changing elements of array
const arrayMap = array.map((elem, index, arr) => elem * 2);

const arrayMap2 = array.map((elem, index, arr) => elem * index);

// equal forEach
const arrayMap3 = array.map((elem, index, arr) => elem = {id: index, value: elem}); 

const arrayMap4 = array.map((elem, index, arr) => elem = {id: `Lyusya_${index}`, value: `amount: ${elem}`}); 

// filter returns new array in which elements return true callback's condition
const arrayFilter = arrayMap4.filter((elem, index, arr) => {
    const elemValue = +elem['value'].split(':').at(-1).trim();   // chaining 
    return elemValue <= 10 && elemValue >= 6;
})

// flat убирает внутренние вложенности
const array4 = [1,2,3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];
const arrayFlat = array4.flat(Infinity); // takes either number of [] or Infininty if we don't know how many [], default () = 1

// slice
const arraySlice = array.slice(3, 7);

// mutation methods
//const arraySplice = array.splice(3, 3); 
//array.splice(2, 3, ...['Cherry', 'Banan', 'Pasha']);
array.splice(2, 3, '🍒', '🍌', '😹', '🌼');

array.push('🥐', '🍕', '🍔'); // adding to the end of array

const arrayBurger = array.pop(); // gets last element of massive, and if with const - returns it

array.unshift('🍸');
const arrayShift = array.shift();

const arrayUnsorted = [1, 4, 6, 27, 6, 15, 8, 9, 10, 12];
arrayUnsorted.sort((a, b) => {
    //return a-b;
    return b-a;
}).reverse();

// modern way to copy array and avoid mutation of inital array [...]
const arrayUnsorted1 = [1, 4, 6, 27, 6, 15, 8, 9, 10, 12];
const arraySorted = [...arrayUnsorted1].sort((a, b) => {
    //return a-b;
    return b-a;
});

const arrayNew1 = [1, 2, 3];
const arrayNew2 = [4, 5, 6];
const arrayConcat = arrayNew1.concat(arrayNew2);
const arrayConcatModern = [...arrayNew1, '🍒', ...arrayNew2];

// console.log(array2);
// console.log(array3);
// console.log(arrayMap);
// console.log(arrayMap2);
// console.log(arrayMap3);
// console.log(arrayMap4);
//console.log(arrayFilter);
//console.log(arrayFlat);
//console.log(arraySlice);
// console.log(array);
// console.log(arrayBurger);
// console.log(arrayShift);
// console.log(arrayUnsorted);
// console.log(arrayUnsorted1);
// console.log(arraySorted);
// console.log(arrayConcat);
// console.log(arrayConcatModern);

const object = {
    lyusya: 1
}
const name = 'lyusya' // change to roma and look at result 

if (object[name]) {
    object[name]++;
} else {
    object[name] = 1;
}


