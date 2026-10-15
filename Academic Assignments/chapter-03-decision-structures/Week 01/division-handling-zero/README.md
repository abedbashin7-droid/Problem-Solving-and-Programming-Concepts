# Division of Two Numbers (Handling Division by Zero)

## Problem Description

Write a program to accept two numbers and divide the first by the second. Before division, check the second number; if it is zero, the program displays `"can't divide by zero"` and ends.

## Problem Analysis &amp; Thinking Steps

1. **Inputs &amp; Validation**:  
  * Accept two numbers from the user (`num1` and `num2`).
  * The second number (`num2`) must not equal `0`.
2. **Data Types &amp; User Interaction**:  
  * Since division can result in decimal/real numbers, variables must be declared as `Real` (or float).
  * Display clear and friendly prompts to guide the user.
3. **Control Flow**:  
  * Check if `num2 != 0`.
  * If **True**: Compute and display the result (`num1 / num2`).
  * If **False**: Display `"can't divide by zero"`.
