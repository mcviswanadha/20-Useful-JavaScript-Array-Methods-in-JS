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
