flowchart TD
    Start([Start]) --> Declare[Declare real G, H, GPA]
    Declare --> DisplayG[/Display "Enter your Course Grades"/]
    DisplayG --> InputG[/Input G/]
    InputG --> DisplayH[/Display "Enter your Credit Hours: "/]
    DisplayH --> InputH[/Input H/]
    InputH --> Calc[Set GPA = G / H]
    Calc --> DisplayGPA[/Display "Your GPA is: ", GPA/]
    DisplayGPA --> End([End])
