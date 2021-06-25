//how to swap variables 
var fruit1 = "apples"
var fruit2 = "oranges"
var temp = fruit1

fruit1 = fruit2 
fruit2 = temp

console.log(fruit1,fruit2)


// REVERSE AN ARRAY 
// CREATE A FUNCTION WHERE GIVEN AN ARRAY YOU REVERSE THE ARRAY AND RETURN THE ARRAY //
// ["a", "b", "c", "d", "e"] => ["e", "d", "c", "b", "a"]
// CREATE A FUNCTION WRAPPER (1 param / array type)
// ITERATE THROUGHT ARRAY (FOR LOOP) 
// NEED A TEMP VARIABLE TO STORE A VALUE 
// SWAP THE VALUES WITHIN THE ARRAY 
// RETURN THE ARRAY 

function reverseArr(arr)
    let start = 0;
        end = arr.lenth-1-left;

while(start < end){
    [arr[start],arr[end] = arr[end], arr[start]]
    return(arr)
}
var arr = ["a", "b", "c", "d", "e"]
console.log(reverseArr)

// // {
// for(var left=0; left<arr.length/2; left++) {
//     var right = arr.length-1-left;
//     if(arr[left] != arr[right]) {
//         return "Not a pal-indrome!";
//     }
// }
// return "Pal-indrome!";
// }