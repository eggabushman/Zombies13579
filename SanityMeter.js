/**
 * 
 */
var insanity = 0;
function sanityTest(){
	var lastsleep;
	lastsleep = window.prompt("Whens the last time you slept?");
	var lastsleepP = parseInt(lastsleep); //turns the string into a float
	if(lastsleepP < 6){
		window.alert("got first case");
		//no insanity is added
	}
	else if(lastsleepP > 6 && lastsleepP < 12){
		window.alert("got here");
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