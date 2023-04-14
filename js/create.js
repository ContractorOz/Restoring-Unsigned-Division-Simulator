//creates a readonly input box 
function createBox(what, value, step){
	var box = document.createElement("input")
	box.setAttribute("type", "text")
	box.value = ("value", value)
	box.id = what+"_box_"+step
	box.setAttribute("readonly", "readonly")
	document.body.appendChild(box)
}
//creates a line break
function createBr(){
	var br = document.createElement("br")
		document.body.appendChild(br)
}