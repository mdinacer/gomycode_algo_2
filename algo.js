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
