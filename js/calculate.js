function calculate(){
	var q = document.getElementById("dividend")
	var m = document.getElementById("divisor")
	var sol = document.getElementById("solution")
	var ans_q = document.getElementById("ans_q")
	var ans_a = document.getElementById("ans_a")
	
	var valid = validator(q,m)
	var temp_q=-1
	//check if 10, 100, 1 -> should be checked first if decimal din kabila
	if(isValid(q)==0&&isValid(m)==0)
	{
	// if both are binary
		temp_q = q.value
	}
	//else if just one of them is a type 1, then both are decimals
	else// if(isValid(q)==0||isValid(m)==0)
	{
		//then treat both as decimals na
		temp_q = convert(q.value)
	}
	
	
	//TODO: May prob NaN yung A if both decimal inputs
	
	
	
	if(valid){
		q.style.backgroundColor = "#FFFFFF"
		m.style.backgroundColor = "#FFFFFF"		
		
		var a_arr = []
		var i=0
		var temp_a = "0"	//extra 0 for sign bitvar temp_q = q.value
		//var temp_q = q.value.toString() //not needed
		var count = temp_q.length
		for(i=0; i<temp_q.length; i++)
		{
			temp_a=temp_a+"0"
		}

		//INITIALIZE STEP
		var neg_m = negate(m)
		var AQ = []
		var step=0

		// AQ.push(temp_a)
		// AQ.push(temp_q)
		// AQ = shift_left(AQ)

		AQ.push(temp_a)
		AQ.push(temp_q)
		
		for(i=0; i<count; i++){
			var new_a
			
			AQ = shift_left(AQ)

			//A = A-M
			new_a = parseInt(AQ[0], 2) + parseInt(m.value, 2)
			new_a = new_a.toString(2)
			
			if (new_a.length > count+1){
				new_a = new_a.substring(1,count+2)
			}
			else if (new_a.length < count+1){
				console.log("here2")
				new_a = new_a.padStart(count+1, "0")
			}

			//If A MSB is 1, restore A and set Q LSB to 0
			//Else, keep new A and set Q LSB to 1
			if(new_a.charAt(0) == "1"){
				temp_q = AQ[1]+"0"
				AQ.pop()		//<- to put the num back
				AQ.push(temp_q) //<-
			} else {
				temp_a = new_a
				temp_q = AQ[1]+"1"
				AQ.pop()
				AQ.pop()
				AQ.push(temp_a)
				AQ.push(temp_q)
			}
			
			//Show Solution
			createBox("a", AQ[0], step)
			createBox("q", AQ[1], step)
			createBr()
		}
		

		
		
		//loop for q, //change temp_a and temp_q lang every step
		//temp_a = shl(a)
		//temp_q = shl(q)
		//A=A-M
		//if temp_a[temp_a.value.length-1],
		// do stuff
		//else
		//step++
		//createBox("a", temp_a, step)
		//createBox("q", temp_q, step)
		//createBr()
		
		
	}
}