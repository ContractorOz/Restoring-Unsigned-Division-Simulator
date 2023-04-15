//shifts left input 2d array by 1 digit (A Q)
function shift_left(AQ){
	var temp = ""
	var str1 = ""
	var str2 = ""
	var arr = []
	//shift left here A and MSB of Q
	for (i=1; i<AQ[0].length; i++)
	{
		//AQ[0][i-1] = AQ[0][i]
		str1 = str1+AQ[0][i]
	}
	
	//get Q MSB to A LSB
	//AQ[0][AQ[0].length-1] = AQ[1][0]
	
	//AQ[0][AQ[0].length-1] = "!"
	
	str1= str1+AQ[1][0]
	arr.push(str1)
	
	for (i=1; i<AQ[1].length; i++)
	{
		////AQ[0][i-1] = AQ[0][i]
		str2 = str2+AQ[1][i]
	}
	
	
	arr.push(str2)
	// for (i=1; i<AQ[1].length; i++)
	// {
		// AQ[1][i-1] = AQ[1][i]
	// }
	
	return arr
}