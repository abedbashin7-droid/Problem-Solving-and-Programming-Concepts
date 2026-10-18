// Mermaid.js Flowchart Code for Month Lookup Using Select Case Structure

const mermaidDiagram = `
flowchart TD
    Start([Start]) --> Declare[Declare Integer mon]
    Declare --> PrintPrompt[/Display "Enter the month's number :" /]
    PrintPrompt --> InputMon[/Input mon/]
    InputMon --> Switch{Select mon}
    
    Switch -- Case 1 --> M1[/Display "January"/]
    Switch -- Case 2 --> M2[/Display "February"/]
    Switch -- Case 3 --> M3[/Display "March"/]
    Switch -- Case 4 --> M4[/Display "April"/]
    Switch -- Case 5 --> M5[/Display "May"/]
    Switch -- Case 6 --> M6[/Display "June"/]
    Switch -- Case 7 --> M7[/Display "July"/]
    Switch -- Case 8 --> M8[/Display "August"/]
    Switch -- Case 9 --> M9[/Display "September"/]
    Switch -- Case 10 --> M10[/Display "October"/]
    Switch -- Case 11 --> M11[/Display "November"/]
    Switch -- Case 12 --> M12[/Display "December"/]
    Switch -- Default --> MErr[/Display "ERROR, Invalid Number"/]
    
    M1 --> End([End])
    M2 --> End([End])
    M3 --> End([End])
    M4 --> End([End])
    M5 --> End([End])
    M6 --> End([End])
    M7 --> End([End])
    M8 --> End([End])
    M9 --> End([End])
    M10 --> End([End])
    M11 --> End([End])
    M12 --> End([End])
    MErr --> End([End])
`;

console.log(mermaidDiagram);
