# Insertion Sort in JavaScript

## 📌 Overview

Insertion Sort is a simple and intuitive sorting algorithm. It works similarly to how we sort playing cards in our hands—each new card is placed in the correct position relative to the sorted part.

This repository contains a JavaScript implementation of the Insertion Sort algorithm.

## 🛠 How It Works

1. Start with the second element (`arr[1]`), since the first element (`arr[0]`) is already "sorted."
2. Compare `arr[i]` with elements in the sorted portion (`arr[0]` to `arr[i-1]`).
3. Shift larger elements to the right to create space.
4. Insert `arr[i]` into its correct position.
5. Repeat for all elements.

## 🔢 Understanding the Two Counters

The algorithm uses **two counters** to control the sorting process:

1. **`i` (Outer Loop Counter)** → Tracks the current element being inserted.
2. **`j` (Inner Loop Counter)** → Moves through the sorted portion to find the correct position for `arr[i]`.
