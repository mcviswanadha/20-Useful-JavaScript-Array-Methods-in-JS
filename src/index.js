import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

console.log("Hello Word");

// 20 Useful JavaScript Array Methods that You Should Know

// 1. The push() method
// The method push() gives ability to add an element to end of the array. It takes one argument which is the element we want to add at the end of an array
let arr = [1, 2, 3];
arr.push(4);
console.log({ arr });

// 2.Pop() method
//The method pop() in JS remove last element from the array.
let arr1 = [1, 2, 3, 4];
arr1.pop();
console.log({ arr1 });

//3. The unshift() method
// The method unshift() add an element in the beginning of an array. It takes 1 argument which is the element we want to add.
let arr3 = [1, 2, 3, 4];
arr3.unshift(0);
console.log({ arr3 });

//4. The shift() method
// the method shift() removes 1st element in the array
let arr4 = [1, 2, 3, 4];
arr4.shift(1);
console.log({ arr4 });

//5. Slice()
//The slice() method in JS is used to copy pieces of an array. or can copy whole array.
//The slice method selects the element starting at the given start arg and the end at arg, but it does not include the given end arg, it takes 2 arg the start index and end index.

let arr5 = [1, 2, 3, 4, 5];
arr5 = arr5.slice(0, 2);
console.log({ arr5 });

//6. The splice()
// The splice method in JS will add or remove elements in an array.
// it accepts 3 parameters
//1 params - start index specifies where the element should add or remove
//2 params - specifies the tot number of elements to be removed starting from the start index provided
//3 parms - specifies the element to be added to the array
let arr6 = [1, 2];
arr6.splice(0, 0, 0);
console.log({ arr6 });

//7. indexof
//The method indexof is uses to find the index array element. It searches an array for an element value and returns its position.
let arr7 = [1, 2, 3];

console.log({ arr7: arr7.indexOf(2) });

//8. Join()
//the method join() in JS allows to convert an array to string.
//it joins all array element to a string. in addition to that we can specify the separator between the element we have joined
let arr8 = [1, 2, 3];
console.log({ arr8: arr8.join("-") });

//9. toString()
//this method is used simply to convert an array to string.
let arr9 = ["my", " name is ", "Hello World"];
console.log({ arr9: arr9.toString() });

//10. concat method
//the methos concat() is used to merge arrays ogether.
let arr10a = [1, 2, 3];
let arr10b = [4, 5, 6];
console.log({ arr10: arr10a.concat(arr10b) });

//11. The menthod includes
//this method checks if an elelment is availalbe in the array
const array11 = [1, 2, 3, 4, 5];
console.log(array11.includes(3));

//12. The find method
//the method find() returns the value of the first array element that passes a test function. It takes a call back function as a argument.
//the call back function accepts 3 parameters the value, the index, and the array itself.
let a12 = [18, 15, 25, 5, 3, 50];
function callback(value, index, array) {
  return value < 6;
}
let b = a12.find(callback);
console.log(b);

//13.The method findIndex
//The method findIndex is similar to find but the only difference is this method will return the index of the first array element that pass a test function instead of returning the value
let a13 = [18, 15, 25, 5, 3, 50];
function callbackf(value, index, array) {
  return value < 6;
}
let c = a12.findIndex(callbackf);
console.log(c);

//14. the method forEach()
//The method forEach takes in another function as an argument(callback). it is used to iterate over an arrays items. the call back can three arguments (element,value,Index)
let arr14 = [1, 2, 3, 4, 5];
arr14.forEach((item) => {
  if (item < 3) {
    console.log({ item });
  }
});

//15. the method map()
//The method map returns an array of the same length as the one it was called.
//It also doesn't alter the original array as long as its callback function doesn't. It can also take 3 arguments (element, value, index)
const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 }
];

let names = users.map((users) => users.name);
console.log({ names });

//16.the method filter
//The filter method calls a function on each of an element in the array and returns a new array containing only the elements for which that function returns true.
//if other words, it filters the array, based on the function passed to it. it's like the map method, but it does the job without needing to modify the original array.
const arr16 = [1, 2, 3, 4, 5];
let filtered = arr16.filter((i) => i < 3);
console.log({ filtered });

//17.The method reduce
//The method reduce() allows for more general form of array processing and its possible to show that both filter and map can be derived as special application of reduce.
//it iterates over an each item in an array and returns a single value. this is achieved through callback that it takes an argument.

//The function reduce method taked 2 positional arguments, 1st accumulaterand the other one is the iterated value and it returns the accumulated value.

const user = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 }
];

let sumofAges = user.reduce((sum, user) => sum + user.age, 0);
console.log({ sumofAges });

//18. The sort method
//The method sort sorts the items of an array . The sort order can be Alphabetic, numberic either ascending or descending.

var points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log({ points });

//19. The method every
//The every method check if every element in an array passes a particular test.
//It returns Boolean (true/false)

var numbers = [1, 5, 8, 0, 10, 11];
numbers.every((c) => c < 10);

var numbers1 = [1, 5, 8, 0, 10, 11];
numbers1.every(function (currentValue) {
  return currentValue < 10;
});
// Returns false

//20.The some method
//The method some is a little bit similar to the method every, it checks if any element in the array passes a particular test, it also returns a boolean ()true/false).
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function (currentValue) {
  return currentValue < 10;
});
// Returns true
