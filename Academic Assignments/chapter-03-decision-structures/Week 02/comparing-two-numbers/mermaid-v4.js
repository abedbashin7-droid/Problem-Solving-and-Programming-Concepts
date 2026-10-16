// Mermaid.js Flowchart Code for Comparing Two Numbers (Maximum, Minimum, Equal)

const mermaidDiagram = `
flowchart TD
    Start([Start]) --> Declare[Declare Real num1, num2]
    Declare --> Print1[/Display "Enter the first number :" /]
    Print1 --> Input1[/Input num1/]
    Input1 --> Print2[/Display "Enter the second number :" /]
    Print2 --> Input2[/Input num2/]
    Input2 --> Decision1{num1 > num2?}
    
    Decision1 -- Yes --> Output1[/Display "The maximum number is " + num1<br>Display "The minimum number is " + num2/]
    Decision1 -- No --> Decision2{num1 < num2?}
    
    Decision2 -- Yes --> Output2[/Display "The maximum number is " + num2<br>Display "The minimum number is " + num1/]
    Decision2 -- No --> OutputEqual[/Display "The two numbers are equal"/]
    
    Output1 --> End([End])
    Output2 --> End([End])
    OutputEqual --> End([End])
`;

console.log(mermaidDiagram);
