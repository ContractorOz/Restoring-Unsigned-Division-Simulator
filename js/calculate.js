function calculate(){
	// // document.getElementById("steps").innerHTML = ""
	var sol_container = document.getElementById("sol_container")
	sol_container.removeChild(document.getElementById("steps"))

	var new_step = document.createElement("div")
	new_step.id = "steps"
	sol_container.appendChild(new_step)
	// document.body.appendChild(box)
	
	
	// var prev = document.getElementsByClassName("step")
	// //delete all previous boxes if any
	// var i=0
	// console.log(document.getElementsByClassName("step"))
	// if (prev)
	// {
			
		// while(prev.length>0){	
			// prev.removeChild(i)
			// i++
		// }
	// }
	
	var sol = document.getElementById("solution")

	var decimal = document.querySelector('#check_int')
	var show = document.querySelector('#show_sol')
	var q = document.getElementById("dividend")
	var m = document.getElementById("divisor")
	var ans_q = document.getElementById("ans_q")
	var ans_a = document.getElementById("ans_a")
	var cb_showSol = document.getElementById("show_sol").checked


	var valid = validator(q,m)
	var temp_q=-1
	var temp_m=0

	if (valid==0) //check if inputs are decimal, invalid, or binary
	{
		var temp_q = convert(q.value)
		var temp_m = convert(m.value)
		temp_m = temp_m.padStart(temp_q.length, "0")
		temp_q = temp_q.padStart(temp_m.length, "0")
	}
	else if(valid==1)
	{
		var temp_q = q.value
		var temp_m = m.value
		temp_m = temp_m.padStart(temp_q.length, "0")
		temp_q = temp_q.padStart(temp_m.length, "0")
	}
	
	
	if(valid != -1){
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
		
		if(cb_showSol)
		{
			//INITIALIZE STEP		
			createLabel(step)
			createBr()
			createBox("a", AQ[0])
			createBox("q", AQ[1])
			createBr()
			createBr()
		}

		sol.innerHTML = "-M: "+negate(temp_m)//negate(temp_m doesnt show leftmost digit somehow

		for(i=0; i<count; i++){
			step++
			var new_a
			
			AQ = shift_left(AQ)

			if(cb_showSol)
			{
				//Print after shift
				createLabel(step)
				createBr()
				createBox("a", AQ[0], step)
				createBox("q", AQ[1], step)
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
			
			if(cb_showSol)
			{
				createBox("a", AQ[0], step)
				createBox("q", AQ[1], step)
				createBr()
				createBr()
			}
			
		}
		
		ans_a.innerHTML = AQ[0]
		ans_q.innerHTML = AQ[1]
		
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