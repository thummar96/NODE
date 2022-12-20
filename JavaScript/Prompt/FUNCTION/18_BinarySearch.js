/*

18. Write a function for searching JS arrays with a binary search. 
Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

*/

/***  Named Function ***/


/*** Anonymous Function ***/

let binarySearch = (Arr, x) => {
    Arr = sort(Arr);
    let start = 0, end = Arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (Arr[mid] == x) return true;
        else if (Arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return false;
}
let sort = (Arr) => {
    Arr.sort(compareNumbers);
    return Arr;
}
let compareNumbers = (a, b) => {
    return a - b;
}
let Arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
if (binarySearch(Arr , 9))
    console.log("Element found...!");
else
    console.log("Element not found...!");
