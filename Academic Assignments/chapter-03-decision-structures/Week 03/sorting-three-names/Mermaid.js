flowchart TD
Start([start]) --> Declare[declare string nam1, nam2, nam3]
Declare --> Disp1[/display "Enter 1st name"/]
Disp1 --> Inp1[/input nam1/]
Inp1 --> Disp2[/display "Enter 2nd name"/]
Disp2 --> Inp2[/input nam2/]
Inp2 --> Disp3[/display "Enter 3rd name"/]
Disp3 --> Inp3[/input nam3/]

Inp3 --> Cond1{"nam1 <= nam2"}

%% Left Main Branch (nam1 <= nam2 is False)
Cond1 -- False --> Cond2{"nam1 <= nam3"}
Cond2 -- False --> Cond3{"nam2 >= nam3"}
Cond3 -- True --> Disp_L1[/display/]
Cond3 -- False --> Disp_L2[/display/]
Cond2 -- True --> Disp_L3[/display/]

%% Right Main Branch (nam1 <= nam2 is True)
Cond1 -- True --> Cond4{"nam2 <= nam3"}
Cond4 -- True --> Disp_R1[/display/]
Cond4 -- False --> Cond5{"nam3 <= nam1"}
Cond5 -- True --> Disp_R2[/display/]
Cond5 -- False --> Disp_R3[/display/]

%% Merge to End
Disp_L1 --> EndNode([End])
Disp_L2 --> EndNode
Disp_L3 --> EndNode
Disp_R1 --> EndNode
Disp_R2 --> EndNode
Disp_R3 --> EndNode
