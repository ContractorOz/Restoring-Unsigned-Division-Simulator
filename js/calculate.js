function calculate(){
	//CODE CLEANUP
	document.getElementById("steps").innerHTML = ""
	document.getElementById("solution").innerHTML = ""
	document.getElementById("errormsg").innerHTML = ""
	
	
	//VARIABLES
	const decimal = document.querySelector('#check_int')
	const show = document.querySelector('#show_sol')
	const q = document.getElementById("dividend")
	const m = document.getElementById("divisor")
	const sol = document.getElementById("solution")
	const ans_q = document.getElementById("ans_q")
	const ans_a = document.getElementById("ans_a")
	const cb_output = document.getElementById("cb_output").checked
	var temp_q=-1
	var temp_m=0
	// const fs = require('fs')
	// const path = "output.txt"
	var output=""
	
	// CHECK FOR BASE TO DIVIDE (BASE 2 OR BASE 10 ONLY)
	var valid = validator(q,m)
			// -1: invalid input (unsigned, NaN)
			//  0: binary division
			//	1: decimal division
	if (valid == -1){
		return false	//end if invalid
	}
	else if(valid == 1)	//validator returns 1: decimal inputs
	{
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
	}
	else 				// validator returns 0: binary inputs
	{
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
	}
	
	
	
	//FROM HERE ON, ASSUME VALID	
	var a_arr = []
	var temp_a = "0"	//extra 0 for sign bit
	var count = temp_q.length
	for(i=0; i<temp_q.length; i++)
	{
		temp_a=temp_a+"0"
	}
	
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
		output = "INITIALIZE:\nM: "+temp_m+" -M:"+negate(temp_m)+"\nA: "+AQ[0]+"Q: "+AQ[1]+"\n\n"
	}
	
	if (show.checked){ sol.innerHTML = "-M: "+negate(temp_m) }

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
			output = output+"Step "+step+"\nA: "+AQ[0]+"Q: "+AQ[1]+"\n"
		}

		//A = A-M
		new_a = parseInt(AQ[0], 2) + parseInt(negate(temp_m), 2)
		new_a = new_a.toString(2)
		
		if (new_a.length > count+1){
			new_a = new_a.substring(1,count+2)
		}
		else if (new_a.length < count+1){
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
			output = output+"\nA: "+AQ[0]+"Q: "+AQ[1]+"\n\n"
		}
	}
	
	output = output+"\nFINAL ANSWER:\nQuotient:"+AQ[1]+"\nRemainder "+AQ[0]
	ans_a.innerHTML = AQ[0]
	ans_q.innerHTML = AQ[1]
	

	if (cb_output){
		var out = document.createElement('a');	//<a href
		out.setAttribute("href", "data:text/plain;charset=utf-8,"+encodeURIComponent(output))
		out.setAttribute("download", "output.txt")
		out.style.display = "none"	//hidden
		document.body.appendChild(out)
		out.click()
		// document.body.removeChild(out);
		console.log(output)
	}
}