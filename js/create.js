//creates a readonly input box 
// what - q or m 
// value - current value of the a or q
// step - step of the solution
function createBox(what, value, step){
	var box = document.createElement("input")
	box.setAttribute("type", "text")
	box.value = ("value", value)
	box.id = what+"_box_"+step
	box.setAttribute("readonly", "readonly")
	document.getElementById("steps").appendChild(box)
}

//creates a line break
function createBr(){
	var br = document.createElement("br")
		document.getElementById("steps").appendChild(br)
}