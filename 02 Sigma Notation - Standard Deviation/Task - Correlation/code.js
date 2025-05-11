// let r_xy = (n * sum_xy - sum_x * sum_y) / (Math.sqrt(n * sum_x2 - Math.pow(sum_x, 2)) * Math.sqrt(n * sum_y2 - Math.pow(sum_y, 2)));

const tempC = [
  14.2, 16.4, 11.9, 15.2, 18.5, 22.1, 19.4, 25.1, 23.4, 18.1, 22.6, 17.2,
];

const sales = [215, 325, 185, 332, 406, 522, 412, 614, 544, 421, 445, 408];

function calcCorr(n, x, y) {
  let cor = (sum_x = sum_y = sum_xy = sum_x2 = sum_y2 = 0);
  for (let i = 0; i < n; i++) {
    sum_x += x[i];
    sum_y += y[i];
    sum_x2 += x[i] ** 2;
    sum_y2 += y[i] ** 2;
    sum_xy += x[i] * y[i];
  }

  cor =
    (n * sum_xy - sum_x * sum_y) /
    (Math.sqrt(n * sum_x2 - Math.pow(sum_x, 2)) *
      Math.sqrt(n * sum_y2 - Math.pow(sum_y, 2)));

  console.log(cor);
  return cor;
}

calcCorr(sales.length, tempC, sales);

//*====================================================

//& chatgpt solution:

/*

                           [Start]
                              |
                              v
                [Initialize arrays: x and y]
                              |
                              v
             [Check: x and y arrays have same length > 0?]
                              | No
                              v
                      [Output error message]
                              |
                              v
                           [End]
                              |
                              v
                  [Initialize Variables:]
   ---------------------------
   sum_x   = 0  
   sum_y   = 0  
   sum_x2  = 0  
   sum_y2  = 0  
   sum_xy  = 0  
   i       = 0  
   n       = length(x)
   ---------------------------
                              |
                              v
                    [Start Loop: while i < n]
                              |
                              v
                   +-----------------------+
                   | For current i:        |
                   | sum_x  += x[i]        |
                   | sum_y  += y[i]        |
                   | sum_x2 += (x[i])^2     |
                   | sum_y2 += (y[i])^2     |
                   | sum_xy += x[i] * y[i]  |
                   +-----------------------+
                              |
                              v
                   [Increment i: i = i + 1]
                              |
                              v
                     [Return to Loop Condition]
                              |
                              v
                     [Exit Loop when i = n]
                              |
                              v
            [Calculate denominator = sqrt(n * sum_x2 - sum_x^2)
               * sqrt(n * sum_y2 - sum_y^2)]
                              |
                              v
         [If denominator equals 0, output error and end]
                              |
                              v
          [Calculate cor = (n * sum_xy - sum_x * sum_y)
                     / denominator]
                              |
                              v
                       [Print cor value]
                              |
                              v
                           [End]


*/
//& Title: Pearson Correlation Coefficient Calculation with Error Handling
//? Note:
//* This code calculates the Pearson correlation coefficient using two arrays 'x' and 'y'.
//* It demonstrates error handling via a try/catch block specifically for a zero denominator scenario.
//* Detailed explanations are provided below after the code.

// Function to calculate the Pearson correlation coefficient.
function calculateCorrelation(x, y) {
  // Validate input arrays: they must have the same non-zero length.
  if (x.length !== y.length || x.length === 0) {
    console.error("Error: Arrays must be of the same non-zero length.");
    return null;
  }

  // Initialize Variables (Accumulator variables for summations).
  let n = x.length;
  let sum_x = 0,
    sum_y = 0,
    sum_x2 = 0,
    sum_y2 = 0,
    sum_xy = 0;

  // Loop through the arrays to compute required sums.
  for (let i = 0; i < n; i++) {
    sum_x += x[i]; // Accumulate sum of x-values.
    sum_y += y[i]; // Accumulate sum of y-values.
    sum_x2 += x[i] * x[i]; // Accumulate sum of squares of x-values.
    sum_y2 += y[i] * y[i]; // Accumulate sum of squares of y-values.
    sum_xy += x[i] * y[i]; // Accumulate sum of the products of x and y.
  }

  // Use try/catch to handle potential errors during denominator calculation.
  try {
    // Calculate the denominator for the Pearson correlation coefficient.
    const denominator =
      Math.sqrt(n * sum_x2 - sum_x * sum_x) *
      Math.sqrt(n * sum_y2 - sum_y * sum_y);

    // If denominator is zero, throw an error to be caught.
    if (denominator === 0) {
      throw new Error(
        "Error: Denominator equals zero, unable to compute correlation."
      );
    }

    // Compute the correlation coefficient.
    const correlation = (n * sum_xy - sum_x * sum_y) / denominator;
    return correlation;
  } catch (error) {
    // Log the error message and return null in case of failure.
    console.error(error.message);
    return null;
  }
}

// Example usage:
const x = [
  14.2, 16.4, 11.9, 15.2, 18.5, 22.1, 19.4, 25.1, 23.4, 18.1, 22.6, 17.2,
];
const y = [215, 325, 185, 332, 406, 522, 412, 614, 544, 421, 445, 408];

const result = calculateCorrelation(x, y);
console.log("Correlation coefficient:", result);

//& Explanation:
//? Error Handling:
//* The try/catch block encloses the denominator calculation which might cause a division-by-zero error.
//* If the denominator equals zero, an error is thrown and immediately caught, logging an error message and returning null.

//? Benefits of Try/Catch:
//* Centralized error management: It organizes error-prone code in one place and makes the error handling process clearer.
//* Extensibility: This structure easily accommodates additional error-prone operations in the future.
//* Clarity: Although a simple 'if' check could suffice, try/catch explicitly shows that an exceptional condition is anticipated.

//? Alternate Approach:
//* If the error condition (i.e., denominator equals zero) is entirely predictable, you might remove the try/catch block.
//* Instead, you could simply use an 'if' statement to check the condition, log an error, and return early.
//* This approach offers a slight performance benefit and clarity in less complex scenarios.

//*============================================================
