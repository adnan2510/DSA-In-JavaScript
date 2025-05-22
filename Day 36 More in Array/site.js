let arr = [10, 90, 40, 70, 60];

//===============================================================================================================

//Q 25. Second max element from array


// let Max = Math.max(arr[0],arr[1]);
// let SMax = Math.min(arr[0],arr[1]);

// for(let i = 2; i < arr.length; i++){
//     if(arr[i] > Max){
//         SMax = Max;
//         Max = arr[i];
//     }else if(arr[i] > SMax && arr[i] != Max){
//         SMax = arr[i];
//     }
// }

// console.log("The second largest number is: " + SMax);

//===============================================================================================================

//  Second min element from array

// let min = Math.min(arr[0],arr[1]);
// let SMin = Math.max(arr[0],arr[1]);

// for(let i = 2; i < arr.length; i++){
//     if(arr[i] < min){
//         SMin = min;
//         min = arr[i];
//     }else if(arr[i] < SMin && arr[i] != min){
//         SMin = arr[i];
//     }
// }
// console.log("The second Small number is: " + SMin);

//===============================================================================================================

//Q 26. Reverse the array

// for loop
// let temp = new Array(arr.length);
// let i = 0;

// for(let j = arr.length - 1; j >= 0; j--){
//     temp[i] = arr[j];
//     i++;
// }
// console.log("The reverse array is: " + temp);

// while loop
// let i = 0;
// let j = arr.length - 1;

// while(i < j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
// console.log("The reverse array is: " + arr);

//================================================================================================================

// Q27. All Zero(0) Left Side and All One(1) Right Side

let arr2 = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
let i = 0;
let j = 0;

while (i < arr2.length) {
    if (arr2[i] == 0) {
        let temp = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = temp;
        j++;
    } 
    i++;
}
console.log(arr2);

//================================================================================================================

// Q28. Array left Rotation by 1

// let temp = arr[0];
// for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = temp;
// console.log(arr);

// ===============================================================================================================
// Q. Array left Rotation by 1
let temp = arr[arr.length - 1];

for (let i = arr.length-1; i > 0; i--) {
    arr[i] = arr[i-1];
}
arr[0] = temp;
console.log(arr);

