//return the string binary equivalent of the dec (string) input
function convert(dec){
	var temp_dec = parseInt(dec)
	var returnVal = ""
	var arr = []
	var count=0
	
	var valid=true
	while(valid)
	{
		if(temp_dec<=1)	//if last digit
		{
			arr.push(temp_dec)
			count++
			valid=false
		}
		else{
			if(temp_dec%2==0)
			{
				arr.push(0)
				count++
			}
			else //if(temp_dec%2==1)
			{
				arr.push(1)
				count++
			}
			temp_dec=temp_dec/2
			temp_dec=parseInt(temp_dec)
		}
	}
	
	//reverse it
	for(i=count;i>0;i--)
	{
		returnVal=returnVal+arr.pop()
	}
	
	return returnVal
}