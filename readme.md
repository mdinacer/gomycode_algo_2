# Insertion Sort

## 📌 Overview

Insertion Sort is a simple and intuitive sorting algorithm. It works similarly to how we sort playing cards in our hands—each new card is placed in the correct position relative to the sorted part.

This repository contains a JavaScript implementation of the Insertion Sort algorithm.

## 🛠 How It Works

1. Start with the second element (`arr[1]`).
2. Compare it with elements in the sorted part (`arr[0]` to `arr[i-1]`).
3. Shift larger elements to the right to create space.
4. Insert the element in its correct position.
5. Repeat for all elements.

## 📝 Code Implementation

```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // The element we're trying to sort
    let j = i - 1;

    // Shift elements to the right until we find the correct spot for 'current'
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr; // Return the sorted array
}

// Test the function
const numbers = [8, 3, 5, 2, 9, 4];
console.log("Originale:", numbers);
console.log("Sorted:", insertionSort([...numbers])); // running the function on the originale array modifies it  ;
```
