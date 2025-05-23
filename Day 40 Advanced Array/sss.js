arr = [12, 32, 90, 45, 67, 89, 23, 56, 78, 90];
const prompt = require("prompt-sync")();
// Q29.  Array left rotation by K elements

// let k = prompt("Enter the number of rotations: ");
// k  = k % arr.length; // To handle cases where k is greater than the length of the array
// let temp = new Array(arr.length);

// for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }
// console.log(temp);

// Differnt approach

// let k = prompt("Enter the number of rotations: ");
// k = k % arr.length; // To handle cases where k is greater than the length of the array
// reverse(arr,0, k - 1);
// reverse(arr, k, arr.length - 1);
// reverse(arr, 0, arr.length - 1);
// console.log(arr);
// function reverse(arr, i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }

// ===============================================================================================================

// Q 30. Linear Search an array - If element found print the index else -1

// let traget = prompt("Enter the element to search: ");
// let index = -1;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == traget) {
//     index = i;
//     break;
//   }
// }

// if (index == -1) console.log("Element not found in the array");
// else console.log("Element found at index: " + index);

//===============================================================================================================

//Binary Search

let arr1 = [12, 22, 33, 42, 54, 65, 72, 81, 90, 100];

if(binarySearch(arr1, 91) == -1) {
  console.log("Element not found in the array");
}
else {
  console.log("Element found at index: " + binarySearch(arr1, 90));
}

function binarySearch(arr1, target) {
  let s = 0;
  let e = arr1.length - 1;
  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    if (arr1[mid] == target) {
      return mid;
    } else if (arr1[mid] < target) {
      s = mid + 1;
    } else if (arr1[mid] > target) {
      e = mid - 1;
    }
  }
  return -1;
}
 