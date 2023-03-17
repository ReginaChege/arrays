// Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
// arr2 = [true, "green", "where",12,56]
let arr1 = [3,7,34,90,12];
 let last = arr1[arr1.length -1];
console.log(last);

let arr2 = [true, "green", "where",12,56];
let lastElement = arr2[arr2.length -1];
console.log(lastElement);

// Write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Python", "Snake", "Dog"];
const myPets =["Cow", "Bird", "Snake", "Dog"];
 let animals= myPets.join()
 console.log(animals)

//  Write a JS script to sort the following array items
//  var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let sortarray = arr3.sort((w,h)=>w-h);
console.log(sortarray);
// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];
// var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];
//             function remove(arr) 
            // Write a JS script to search for the following word in the array.
            // 4
            // If the word is present, console it else console "the search word was not found"
            // let arr5 = ["the", "way", "x", 4, 23];
        let array= ["the", "way", "x", 4,23] ; 
        let array2 = "we";
        if (array.includes(array2)){
          console.log(array)
        }
 else{
  console.log("the search word was not found")
 }
  //Write a JS script to sort the following string
let text = "sevink"
let text2= text.split('').sort().join('');
console.log(text2);


  
