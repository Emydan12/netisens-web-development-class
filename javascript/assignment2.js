

// Step 1: Create an empty array called randomNumbers
let randomNumbers = [];

// Step 2: Generate 15 random numbers using a loop and store them in randomNumbers
for (let i = 0; i < 15; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100)); // Generates random number between 0 and 99
}

// Step 3: Sort the randomNumbers array in ascending order
randomNumbers.sort((a, b) => a - b);

// Step 4: Create a variable to count how many numbers are greater than 25
let countGreaterThan25 = 0;

// Step 5: Loop through the randomNumbers array
for (let i = 0; i < randomNumbers.length; i++) {
    // Step 6: For each number, check if it is greater than 25
    if (randomNumbers[i] > 25) {
        // Step 7: If it is, increase the count
        countGreaterThan25++;
    }
}

// Step 8: Display the sorted array and the count of numbers greater than 25
console.log("Sorted array:", randomNumbers);
console.log("Count of numbers greater than 25:", countGreaterThan25);
