function calculate(){
	var q = document.getElementById("dividend")
	var m = document.getElementById("divisor")
	var sol = document.getElementById("solution")
	var ans_q = document.getElementById("ans_q")
	var ans_a = document.getElementById("ans_a")
	
	var valid=true;
	if (m.value=="") //OR check if ndi lahat ng laman is 1 and 0 lang
	{
		m.style.backgroundColor = "red"
		valid=false;
	}
	
	if (q.value=="") //OR check if ndi lahat ng laman is 1 and 0 lang
	{
		q.style.backgroundColor = "red"
		valid=false;
	}
	
	if(valid){
		var a_arr = []
		//INITIALIZE
		var i=0
		var temp_a = "0"	//extra 0 for sign bit
		var temp_q = q.value	
		for(i=0; i<q.value.length; i++)
		{
			temp_a=temp_a+"0"
		}


		var step=1
		createBox("a", temp_a, step)
		createBox("q", temp_q, step)
		createBr()
		
		
		
		//loop for q, //change temp_a and temp_q lang every step
		//shift left AQ
		//A=A-M
		//if temp_a[temp_a.value.length-1],
		// do stuff
		//else
		
	}
}