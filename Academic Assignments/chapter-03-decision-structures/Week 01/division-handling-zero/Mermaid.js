flowchart TD
    Start([Start]) --> Declare[Declare real num1, num2]
    Declare --> Print1[/Display "enter first number"/]
    Print1 --> Input1[/Input num1/]
    Input1 --> Print2[/Display "enter second number"/]
    Print2 --> Input2[/Input num2/]
    Input2 --> Decision{num2 != 0?}
    
    Decision -- ture --> Calculate[/Display num1 / num2/]
    Decision -- false --> Error[/Display "can't divide by zero"/]

    Calculate --> End([End])
    Error --> End([End])
