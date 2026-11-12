// Mermaid.js Flowchart Code for Multi-Utility Interactive CLI System

const mermaidDiagram = `
flowchart TD
    Start([Start]) --> AuthCheck{nam == NAM AND pass == PASS?}
    AuthCheck -- No --> AuthFail[/Display 'Authentication Failed'/] --> End([End])
    AuthCheck -- Yes --> MainLoop[/Display Main Menu/]
    
    MainLoop --> Choice{Select choc1}
    Choice -- 1: Calculator --> CalcSubMenu[/Calculator Sub-menu/]
    Choice -- 2: Sorting --> SortSubMenu[/Sorting Sub-menu/]
    Choice -- 3: Month Lookup --> MonthLookup[/Month Lookup/]
    Choice -- 4 & 5 --> Construction[/Display 'Under Construction'/]
    Choice -- 6: Exit --> Goodbye[/Display 'Goodbye'/] --> End
    Choice -- Default --> Error[/Display 'Invalid Choice'/]
    
    CalcSubMenu --> CalcLoop{choc2 == 6?}
    CalcLoop -- No --> ExecuteCalc[Execute Operation] --> CalcSubMenu
    CalcLoop -- Yes --> MainLoop
    
    SortSubMenu --> SortLoop{choc2 == 3?}
    SortLoop -- No --> ExecuteSort[Execute Sorting] --> SortSubMenu
    SortLoop -- Yes --> MainLoop
    
    MonthLookup --> MainLoop
    Construction --> MainLoop
    Error --> MainLoop
`;

console.log(mermaidDiagram);
