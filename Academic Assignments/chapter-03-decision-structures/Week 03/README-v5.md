# Assignment: Simple Login System Authentication

## 1. Problem Description
Design a simple log-in system where the user enters the username and password of an account. If the inputs match the stored credentials, the system displays `"Welcome"`. Otherwise, if they do not match, it displays `"Password or user name were incorrect, try again"`. For safety/security reasons, the system must not specify which input was incorrect.

---

## 2. Problem Analysis & Thinking Steps
1. **Input Identification**:
   - Prompt the user to enter two string inputs: a password (`pass`) and a username (`nam`).
2. **Data Types & Constants**:
   - Declare two string constants for the valid account credentials: `PASS = "123ABC"` and `NAM = "Ali"`.
   - Declare two string variables for user inputs: `pass` and `nam`.
3. **Decision & Security Logic (Logical Operators)**:
   - Use a conditional `If-Else` structure with a compound Boolean expression using the logical `AND` operator:
     `If nam == NAM AND pass == PASS Then`
   - **True Branch**: Display `"Welcome"`.
   - **False Branch**: Display `"Password or user name were incorrect, try again"`.
   - **Security Practice**: Returning a general error message prevents unauthorized users from knowing whether a specific username or password exists.
4. **User Interaction**:
   - Provide clear and friendly prompts to guide the user during input entry.

---

## 3. Pseudocode
```text
Step 1: Start
Step 2: Constant String PASS = "123ABC", NAM = "Ali"
Step 3: Declare String pass, nam
Step 4: Display "Enter the password"
Step 5: Input pass
Step 6: Display "Enter user name"
Step 7: Input nam
Step 8: If nam == NAM AND pass == PASS Then
            Display "Welcome"
        Else
            Display "Password or user name were incorrect, try again"
        End If
Step 9: End
```

---

## 4. Flowchart (Mermaid.js)
```mermaid
flowchart TD
    Start([Start]) --> Constants[Constant String PASS = 123ABC, NAM = "Ali"]
    Constants --> Declare[Declare String pass, nam]
    Declare --> Print1[/Display "Enter the password"/]
    Print1 --> Input1[/Input pass/]
    Input1 --> Print2[/Display "Enter user name"/]
    Print2 --> Input2[/Input nam/]
    Input2 --> Decision{nam == NAM AND pass == PASS?}
    
    Decision -- Yes --> OutputWelcome[/Display "Welcome"/]
    Decision -- No --> OutputError[/Display "Password or user name were incorrect, try again"/]
    
    OutputWelcome --> End([End])
    OutputError --> End([End])
```
