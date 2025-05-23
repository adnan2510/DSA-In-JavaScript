let arr = [5, 12, 23, 56, 53, 12, 87, 123, 21, 3, 8, 4, 2, 1, 7, 6];

// Bubble Sorting Algorithm

// let n = arr.length;
// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j < n - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       // Swap arr[j] and arr[j + 1]
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }console.log(arr);

//==============================================================================================================

// Selection sorting algorithm

// for (let i = 0; i < arr.length - 1; i++) {
//   let small = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[small] > arr[j]) {
//       small = j;
//     }
//   }
//   if (i != small) {
//     let temp = arr[i];
//     arr[i] = arr[small];
//     arr[small] = temp;
//   }
// }
// console.log(arr);

//=================================================================================================================

// Insertion sorting algorithm

for (let i = 1; i < arr.length; i++) {
  let current = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] > current) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = current;
}
console.log(arr);
