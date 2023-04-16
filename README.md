# Restoring Unsigned Division Simulator
The Restoring Unsigned Division Simulator was written for CSARCH2 Simulation Project by John Matthew Pineda, Abigail Naeomi Ventucilla, and Francisco Joaquin T. Escasa from CSARCH Section S14
 
The Simulator accepts both Decimal or Binary Integers, indicated by the check-box, Input is base-10 (which indicates it is in decimal if ticked). It also offers the option to (a) show a step by step solution, and (b) output to a text file. The program accepts inputs for the dividend (Q) and divisor (M) then simulates restoring unsigned division, then presents the Final answer below.

It was coded in javascript and html. Below are the javascript files and their purpose
calculate.js - The overall calculation process of the Restoring Unsigned Division
convert.js - Returns the string binary equivalent of a decimal string
create.js - Creates text box displays for the step by step solution
negate.js - Returns the two's complement of an input binary string
shl.js - Shifts an input array to the left by one bit
valid.js - Validates the decimal or binary input
