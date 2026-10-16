// Mermaid.js Flowchart Code for Checking Number Conditions (Positive, Negative, Zero)

const mermaidDiagram = `
flowchart TD
    Start([Start]) --> Declare[Declare Real num]
    Declare --> PrintPrompt[/Display "Enter a number:"/]
    PrintPrompt --> InputNum[/Input num/]
    InputNum --> Decision1{num > 0?}
    
    Decision1 -- Yes --> OutputPos[/Display "The number is Positive"/]
    Decision1 -- No --> Decision2{num < 0?}
    
    Decision2 -- Yes --> OutputNeg[/Display "The number is Negative"/]
    Decision2 -- No --> OutputZero[/Display "The number is Zero"/]
    
    OutputPos --> End([End])
    OutputNeg --> End([End])
    OutputZero --> End([End])
`;

console.log(mermaidDiagram);
