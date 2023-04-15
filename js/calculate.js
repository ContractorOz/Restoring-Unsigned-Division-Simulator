function calculate(){
	var q = document.getElementById("dividend")
	var m = document.getElementById("divisor")
	var sol = document.getElementById("solution")
	var ans_q = document.getElementById("ans_q")
	var ans_a = document.getElementById("ans_a")
	
	var valid=true;
	
	if(!isValid(q))
	{
		q.style.backgroundColor = "red"
		valid = false
	}
	
	if(!isValid(m))
	{
		m.style.backgroundColor = "red"
		valid = false
	}
	
	if(valid){
		var a_arr = []
		var i=0
		var temp_a = "0"	//extra 0 for sign bit
		var temp_q = q.value	
		for(i=0; i<q.value.length; i++)
		{
			temp_a=temp_a+"0"
		}
		var neg_m = negate(m)

		var AQ = []
		AQ.push(temp_a)
		AQ.push(temp_q)
		//INITIALIZE STEP
		// sol.innerHTML = //shift_left(temp_a, temp_q)//test
		
		//test onli
		//var QM = []
		//QM.push(q.value)
		//QM.push(m.value)
		
		//sol.innerHTML = shift_left(QM)//test
		AQ = shift_left(AQ)
		sol.innerHTML = AQ
		
		var step=0
		createBox("a", AQ[0], step)
		createBox("q", AQ[1], step)
		createBr()
		
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