//negate num using 2's comple
function negate(num){
	var negative = ""
	var i=0
	var found_one=false
	//increment from left to right
	for (i=num.length-1; i>0; i--){
		//copy all 0's to negative (return value)
		if(num[i] == 0 && found_one == false){
			negative += num[i]
		}
		//copy first 1 to negative and flag found
		else if (num[i] == 1 && found_one == false){
			negative += num[i]
			found_one = true
		}
		//found_one is now true so negate and copy the rest to result
		else if(found_one == true){
			for (j = i - 1; j >= 0; j--) { //i - 1 might be wrong
				if (num[j] === '0') { //if 0, negate to 1
					negative += '1';
				} else if (num[j] === '1') {
					negative += '0';
				} else {
				  negative += num[j];
				}
			  }
		}
	}
	return negative
}