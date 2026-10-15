flowchart TD
Start([start]) --> Declare[declare string n1, n2, n3]
Declare --> Disp1[/display "Enter 1st name"/]
Disp1 --> Inp1[/input n1/]
Inp1 --> Disp2[/display "Enter 2nd name"/]
Disp2 --> Inp2[/input n2/]
Inp2 --> Disp3[/display "Enter 3rd name"/]
Disp3 --> Inp3[/input n3/]

Inp3 --> Cond1{"n1 <= n2"}

%% Left Main Branch (n1 <= n2 is False)
Cond1 -- False --> Cond2{"n1 <= n3"}
Cond2 -- False --> Cond3{"n2 >= n3"}
Cond3 -- True --> Disp_L1[/display/]
Cond3 -- False --> Disp_L2[/display/]
Cond2 -- True --> Disp_L3[/display/]

%% Right Main Branch (n1 <= n2 is True)
Cond1 -- True --> Cond4{"n2 <= n3"}
Cond4 -- True --> Disp_R1[/display/]
Cond4 -- False --> Cond5{"n3 <= n1"}
Cond5 -- True --> Disp_R2[/display/]
Cond5 -- False --> Disp_R3[/display/]

%% Merge to End
Disp_L1 --> EndNode([End])
Disp_L2 --> EndNode
Disp_L3 --> EndNode
Disp_R1 --> EndNode
Disp_R2 --> EndNode
Disp_R3 --> EndNode
