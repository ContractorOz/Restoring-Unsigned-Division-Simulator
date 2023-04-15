// returns 0 if valid input and binary
// returns 1 if valid input and decimal
// returns -1 if invalid (characters are not numbers or blank)
// elem - input element from the html
function isValid(elem){
	
	if (elem.value=="")
	{
		return -1;
	}
	else{
		//TODO: Check if input contains a char that is not 0 or 1
		var isBinary = true
		// while(isBinary)
		// {
			// if()
		// }
		
		
		//iterate over the whole array to check if a non-0 or 1 char exists
		// for(i=0;i<elem.value.length;i++)
		// {
			// if(elem.value[i]=='1'||elem.value[i]=='0')
			// {
				// isBinary=true
			// }
			// else{
				// isBinary=false
			// }
		// }
		
		var count = elem.value.length
		while(count>0&&isBinary)
		{
			if(elem.value[i]=='1'||elem.value[i]=='0')
			{
				// isBinary=true
				count--
			}
			else{
				isBinary=false
			}
		}
		
		if (isBinary)
		{
			return 0;
		} else {
			return 1;
		}
	}
	
}