// Mermaid.js Flowchart Code for Simple Login System (Authentication)

const mermaidDiagram = `
flowchart TD
    Start([Start]) --> Constants[Constant String PASS = "123ABC", NAM = "Ali"]
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
`;

console.log(mermaidDiagram);
