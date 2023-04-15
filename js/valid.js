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
		var isBinary = true
		
		var count = elem.value.length
		var i = 0
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
			i++
		}
		
		if (isBinary)
		{
			return 0;
		} else {
			return 1;
		}
	}
	
}