function calculate(){
	var q = document.getElementById("dividend")
	var m = document.getElementById("divisor")
	var sol = document.getElementById("solution")
	var ans_q = document.getElementById("ans_q")
	var ans_a = document.getElementById("ans_a")
	
	var valid=true;
	
	if(isValid(q)==-1)
	{
		q.style.backgroundColor = "red"
		valid = false
	}
	else{
		q.style.backgroundColor = "#FFFFFF"
		valid = true
	}
	
	if(isValid(m)==-1)
	{
		m.style.backgroundColor = "red"
		valid = false
	}
	else{
		m.style.backgroundColor = "#FFFFFF"
		valid = true
	}
	
	if(isValid(q) != isValid(m))	//NOT same type
	{
		q.style.backgroundColor = "red"
		m.style.backgroundColor = "red"
		valid = false
	}	
	
	if(valid){
		q.style.backgroundColor = "#FFFFFF"
		m.style.backgroundColor = "#FFFFFF"

		// check if decimal or binary	//UNSIGNED eitherway
		if (isValid(q)==1)
		{
			var temp_q = convert(q.value)
		}
		else{
			var temp_q = q.value
		}

		if (isValid(m)==1)
		{
			var temp_m = convert(m.value)
		}
		else{
			var temp_m = m.value
		}
		
		
		var a_arr = []
		var i=0
		var temp_a = "0"	//extra 0 for sign bitvar temp_q = q.value
		var temp_q = q.value.toString()
		var count = temp_q.length
		for(i=0; i<temp_q.length; i++)
		{
			temp_a=temp_a+"0"
		}

		//INITIALIZE STEP
		var neg_m = negate(m)
		var AQ = []
		var step=0

		AQ.push(temp_a)
		AQ.push(temp_q)


		for(i=0; i<count; i++){
			var new_a
			AQ.push(temp_a)
			AQ.push(temp_q)
			
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
				temp_q = AQ[1]+0
			} else {
				temp_a = new_a
				temp_q = AQ[1]+1
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