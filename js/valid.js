// returns 0 if binary input
// returns 1 if decimal input
// returns 2 if negative input (- first element)
// returns -1 if invalid (characters are not numbers or blank)
function isValid(elem){
	if (elem.value=="")
	{
		return -1;
	}
	else{
		var isBinary = true
		var isDecimal = false
		
		var count = elem.value.length
		var i = 0
		if(elem.value[0]=='-')
		{
			console.log("Value "+elem.value+" is SIGNED")
			return 2;
		}
		else{				
			while(count>0&&isBinary&&!isDecimal)
			{
				
				if(elem.value[i]=='1'||elem.value[i]=='0')
				{
					isBinary=true
					isDecimal=false
					count--
				}
				else if(elem.value[i]>='0'&&elem.value[i]<='9'){
					isBinary=false
					isDecimal=true
					count--
				}
				else{
					isBinary=false
					isDecimal=false
					//is a non number character
				}
				i++
			}
		}
		
		if (isBinary && !isDecimal)
		{
			return 0;
		} else if (!isBinary && isDecimal) {
			return 1;
		}
		else{
			return -1;
		}
	}
}

// returns -1 if invalid input
// returns 0 if binary input
// returns 1 if decimal input
function validator(q,m){
	var valid=true;
	var sol = document.getElementById("errormsg")
	var cb_isInt = document.getElementById("check_int").checked

	
	if(isValid(q)==-1)
	{
		q.style.backgroundColor = "red"

		valid = false
	}
	else{
		q.style.backgroundColor = "#FFFFFF"
	}
	
	if(isValid(m)==-1)
	{
		m.style.backgroundColor = "red"
		valid = false
	}
	else{
		m.style.backgroundColor = "#FFFFFF"
	}
	
	if (!valid)
	{
		sol.innerHTML = "Invalid input(s). Empty or Non-numerical input(s)."
		return -1
	}
	else{	//neither inputs are blank, check for validity now
 
		if(isValid(q)==0 && isValid(m)==0)	//if both binary
		{
			if (cb_isInt) //look at the digits as if they are decimal ('10' is ten, not two)
			{
				return 1
			}
			else{
				return 0
			}
		}
		else if(isValid(q)==2||isValid(m)==2)	//else if just one is a negative, ERROR
		{
			sol.innerHTML = "Invalid input. Please input UNSIGNED."//negate(temp_m doesnt show leftmost digit somehow
			return -1
		}
		else if(isValid(q)==-1 || isValid(m)==-1)	//else if just one is a nonnumber, ERROR
		{
			sol.innerHTML = "Invalid input. Please enter NUMBERS only."
			return -1
		}
		else //if(isValid(q)== 1 || isValid(m)==1) //else if just one of them is a decimal, then both are decimals
		{
			if(cb_isInt)
			{
				return 1			
			}
			else{
				sol.innerHTML = "Invalid input. Base mismatch. Please untick the checkbox if you intended to perform DECIMAL division."
				return -1
			}
		}
	}
}