//shifts left input 2d array by 1 digit (A Q)
function shift_left(AQ){
	var str1 = ""
	var str2 = ""
	var arr = []
	
	//shift left here A and MSB of Q
	for (i=1; i<AQ[0].length; i++)
	{
		str1 = str1+AQ[0][i]
	}
	
	//get Q MSB to A LSB	
	str1= str1+AQ[1][0]
	arr.push(str1)
	
	//shift Q
	for (i=1; i<AQ[1].length; i++)
	{
		str2 = str2+AQ[1][i]
	}
	
	arr.push(str2)
	
	return arr
}