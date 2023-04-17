# Restoring Unsigned Division Simulator
The Restoring Unsigned Division Simulator was written for CSARCH2<br>
Simulation Project by John Mathew Pineda, Abigail Naeomi Ventucilla,<br>
and Francisco Joaquin T. Escasa from CSARCH Section S14<br>
 
The Simulator accepts both Decimal or Binary Integers, indicated by the<br>
check-box, Input is base-10 (which indicates it is in decimal if ticked).<br>
It also offers the option to (a) show a step by step solution, and (b)<br>
output to a text file. The program accepts inputs for the dividend (Q) and<br>
divisor (M) then simulates restoring unsigned division, then presents the<br>
Final answer below.<br>
<br>
Instructions:<br>

	To use the simulator, first input two integers, the dividend (Q) andthe divisor (M), into the corresponding text boxes.
	Be sure that both the integers you input are uniformly formatted (both decimal or both binary).
	
	To indicate that the input is decimal, tick the corresponding checkbox (Input is Base-10.)
	By default the input will be treated and verified as binary integers.
	
	The option to show the step by step process can also be seen by ticking the corresponding checkbox (Show Solution).
	The option to print to an output file can also be seen by ticking the corresponding checkbox (Output to file "output.txt").
	
	Once satisfied with the input and output type, click the calculate button to run the simulation process.
	(Note: The simulator will treat all inputs as unsigned integers)
<br>
It was coded in javascript and html. Below are the javascript files and their purpose<br>
calculate.js - The overall calculation process of the Restoring Unsigned Division<br>
convert.js - Returns the string binary equivalent of a decimal string<br>
create.js - Creates text box displays for the step by step solution<br>
negate.js - Returns the two's complement of an input binary string<br>
shl.js - Shifts an input array to the left by one bit<br>
valid.js - An input checker to know if an input is a decimal, binary, signed/unsigned, or none of these.<br><br>
Webapp Link: https://contractoroz.github.io/Restoring-Unsigned-Division-Simulator/
