/**
 * 
 */
var insanity = 0;
function sanityTest(){
	var lastsleep;
	lastsleep = window.prompt("How many hours ago have you slept?");
	var lastsleepP = parseInt(lastsleep); //turns the string into an int
	if(lastsleepP < 6){
		//no insanity is added
	}
	else if(lastsleepP > 6 && lastsleepP < 12){
		addSanity(2); //adds to insanity
		
	}
	
			
	
	
}

function getError(){
	
}

function addSanity(i){  //adds the amount passed to the total insanity
	insanity += i; 
}
function getSanity(insanity) //returns insanity as an int 
{
	return insanity;
	}