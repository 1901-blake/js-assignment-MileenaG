/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

/*
Bubble sort is a sorting algorithm that compares two values next to 
eachother and swaps them if thye are in the wrong order. The algorithm
keeps going through the list until all items in the list are in ascending
order.
*/

let array = [6, 4, 8, 0, 2, 5, 1, 7, 3]


function bubbleSort(numArray) {
    let swap;                   //declaring variable but not assigning it a value. output is undefined 
    let n = numArray.length-1; //n = take the length of the array minus one
    let x = numArray;           //the array
    do {
        swap = false;
        for (let i=0; i < n; ++i) //i starts at 0, i is less than n, ++ incremets up. itterates at least n number of times
        {
            if (x[i] > x[i+1])  //if the previous number is larger then swapping will execute  
            {
               let temp = x[i]; //swapping the two adjacent numbers 
               x[i] = x[i+1];
               x[i+1] = temp;
               swap = true;
            }
        }
        n--;
    } while (swap);
 return x; 
}

console.log(bubbleSort(array))
