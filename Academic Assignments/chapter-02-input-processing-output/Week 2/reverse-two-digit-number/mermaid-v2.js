// Mermaid.js Flowchart Code for Reversing a Two-Digit Number
// Copy this code into any Markdown file using ```mermaid ... ``` blocks or render it directly.

const mermaidDiagram = `
flowchart TD
    Start([Start]) --> Declare[Declare Integer num]
    Declare --> PrintPrompt[/Display "Enter a two-digit positive number:"/]
    PrintPrompt --> InputNum[/Input num/]
    InputNum --> DisplayReverse[/Display num MOD 10, num / 10/]
    DisplayReverse --> End([End])
`;

console.log(mermaidDiagram);
