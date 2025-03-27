function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // Pick element arr[i]
    let j = i - 1;

    // Work with the first i-1 elements, shift elements to the right if they are greater than current
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert arr[i] into its correct position
    arr[j + 1] = current;
  }
  return arr;
}

// Example usage
const numbers = [8, 3, 5, 2, 9, 4];
console.log("Before sorting:", numbers);
console.log("After sorting:", insertionSort([...numbers]));
