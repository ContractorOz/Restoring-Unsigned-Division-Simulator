function calculate(){
	document.getElementById("steps").innerHTML = ""
	document.getElementById("solution").innerHTML = ""
	document.getElementById("errormsg").innerHTML = ""
	var decimal = document.querySelector('#check_int')
	var show = document.querySelector('#show_sol')
	var q = document.getElementById("dividend")
	var m = document.getElementById("divisor")
	var sol = document.getElementById("solution")
	var ans_q = document.getElementById("ans_q")
	var ans_a = document.getElementById("ans_a")
	var valid = validator(q,m)
	var temp_q=-1
	var temp_m=0


	if (valid == -1){
		console.log("CALCULATE NOT VALID")
		console.log("CALCULATE NOT VALID")
		return
	}

	//check if 10, 100, 1 -> should be checked first if decimal din kabila
	if(decimal.checked)
	{
	// if both are binary
		console.log("CALCULATE BOTH DEC BIN")
		temp_q = convert(q.value)
		temp_m = convert(m.value)
		if (temp_q.charAt(0) == "1"){
			temp_q = "0" + temp_q
		}
		if (temp_m.charAt(0) == "1"){
			temp_m = "0" + temp_m
		}
		temp_m = temp_m.padStart(temp_q.length, "0")
		temp_q = temp_q.padStart(temp_m.length, "0")
		console.log(temp_m )
		console.log(temp_q )
	}
	//else if just one of them is a type 1, then both are decimals
	else// if(isValid(q)==0||isValid(m)==0)
	{
		//then treat both as decimals na
		
		if(isValid(q)==0&&isValid(m)==0){
			console.log("CALCULATE BOTH BIN")
			temp_q = q.value
			temp_m = m.value
			if (temp_q.charAt(0) == "1"){
				temp_q = "0" + temp_q
			}
			if (temp_m.charAt(0) == "1"){
				temp_m = "0" + temp_m
			}
			temp_m = temp_m.padStart(temp_q.length, "0")
			temp_q = temp_q.padStart(temp_m.length, "0")
			console.log(temp_m )
			console.log(temp_q )
			console.log("CALCULATE BOOTH BIN END")
		}else{
			console.log("CALCULATE NOT VALID BIN")
			return
		}
	}

	console.log("Q = " + temp_q + " M = " + temp_m + " negate M = " + negate(temp_m))
	q.style.backgroundColor = "#FFFFFF"
	m.style.backgroundColor = "#FFFFFF"		
	
	var a_arr = []
	var i=0
	var temp_a = "0"	//extra 0 for sign bit
	var count = temp_q.length
	for(i=0; i<temp_q.length; i++)
	{
		temp_a=temp_a+"0"
	}

	var neg_m = negate(m)
	var AQ = []
	var step=0
	
	AQ.push(temp_a)
	AQ.push(temp_q)
	
	//INITIALIZE STEP
	if (show.checked){
		createLabel(step)
		createBr()
		createBox("a", AQ[0])
		createBox("q", AQ[1])
		createBr()
		createBr()
	}
	
	if (show.checked){
		sol.innerHTML = "-M: "+negate(temp_m)
	}

	for(i=0; i<count; i++){

		step++
		var new_a
		
		AQ = shift_left(AQ)

		//Print after shift
		if (show.checked){
			createLabel(step)
			createBr()
			createBox("a", AQ[0])
			createBox("q", AQ[1])
			createBr()
		}
		
		//A = A-M
		new_a = parseInt(AQ[0], 2) + parseInt(negate(temp_m), 2)
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
		if (show.checked){
			createBox("a", AQ[0], step)
			createBox("q", AQ[1], step)
			createBr()
			createBr()
		}
	}
	
	ans_a.innerHTML = AQ[0]
	ans_q.innerHTML = AQ[1]
}