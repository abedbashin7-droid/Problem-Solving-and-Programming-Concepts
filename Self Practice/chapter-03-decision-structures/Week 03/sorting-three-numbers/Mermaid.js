flowchart TD
Start([start]) --> Declare[declare real num1, num2, num3]
Declare --> Disp1[/display "Enter 1st number"/]
Disp1 --> Inp1[/input num1/]
Inp1 --> Disp2[/display "Enter 2nd number"/]
Disp2 --> Inp2[/input num2/]
Inp2 --> Disp3[/display "Enter 3rd number"/]
Disp3 --> Inp3[/input num3/]

Inp3 --> Cond1{"num1 <= num2"}

%% Left Main Branch (num1 <= num2 is False)
Cond1 -- False --> Cond2{"num1 <= num3"}
Cond2 -- False --> Cond3{"num2 >= num3"}
Cond3 -- True --> Disp_L1[/display mun3, mun2, mun1/]
Cond3 -- False --> Disp_L2[/display mun2, mun3, mun1/]
Cond2 -- True --> Disp_L3[/display mun2, mun1, mun3/]

%% Right Main Branch (num1 <= num2 is True)
Cond1 -- True --> Cond4{"num2 <= num3"}
Cond4 -- True --> Disp_R1[/display mun1, mun2, mun3/]
Cond4 -- False --> Cond5{"num3 <= num1"}
Cond5 -- True --> Disp_R2[/display mun1, mun2, mun3/]
Cond5 -- False --> Disp_R3[/display mun1, mun3, mun2/]

%% Merge to End
Disp_L1 --> EndNode([End])
Disp_L2 --> EndNode
Disp_L3 --> EndNode
Disp_R1 --> EndNode
Disp_R2 --> EndNode
Disp_R3 --> EndNode
