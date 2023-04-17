# Restoring Unsigned Division Simulator
The Restoring Unsigned Division Simulator was written for CSARCH2
Simulation Project by John Mathew Pineda, Abigail Naeomi Ventucilla,
and Francisco Joaquin T. Escasa from CSARCH Section S14
 
The Simulator accepts both Decimal or Binary Integers, indicated by the
check-box, Input is base-10 (which indicates it is in decimal if ticked).
It also offers the option to (a) show a step by step solution, and (b)
output to a text file. The program accepts inputs for the dividend (Q) and
divisor (M) then simulates restoring unsigned division, then presents the
Final answer below.

Instructions:
	To use the simulator, first input two integers, the dividend (Q) and
	the divisor (M), into the corresponding text boxes. Be sure that both the
	integers you input are uniformly formatted (both decimal or both binary).
	To indicate that the input is decimal, tick the corresponding checkbox
	(Input is Base-10.). By default the input will be treated and verified as
	binary integers. The option to show the step by step process can also
	be seen by ticking the corresponding checkbox (Show Solution), as well as
	the option to print to an output file (Output to file "output.txt").
	Once satisfied with the input and output type, click the calculate button
	to run the simulation process. (Note: The simulator will treat all inputs
	as unsigned integers)

It was coded in javascript and html. Below are the javascript files and their purpose
`calculate.js` - The overall calculation process of the Restoring Unsigned Division
`convert.js` - Returns the string binary equivalent of a decimal string
`create.js` - Creates text box displays for the step by step solution
`negate.js` - Returns the two's complement of an input binary string
`shl.js` - Shifts an input array to the left by one bit
`valid.js` - An input checker to know if an input is a decimal, binary, signed/unsigned, or none of these.
