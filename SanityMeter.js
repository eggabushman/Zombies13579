/**
 * 
 */
var insanity = 0;

function sanityTest() {
	sleepQ();
	daysQ();
}

function getError() {
	window.alert("That's an invalid input.");
	insanity += 2;
	return insanity;
}

function addSanity(i) {  //adds the amount passed to the total insanity
	insanity += i; 	
}

function getSanity(insanity) { //returns insanity as an int 
	return insanity;
}

///////////////////////////Questions Methods////////////////
//sleep//
function sleepQ() {
	var lastsleep;
	lastsleep = window.prompt("How many hours ago have you slept?");
	var lastsleepP = parseInt(lastsleep); //turns the string into an int
	
	if(lastsleepP < 8 && lastsleepP >=0) {
		//no insanity is added
	} else if(lastsleepP >= 8 && lastsleepP < 16) {
		addSanity(2); //adds to insanity
	} else if (lastsleepP >= 16 && lastsleepP < 24) { 
		addSanity(3); 
	} else if (lastsleepP >=24) { 
		addSanity(5); 
	} else {
		getError();
		sleepQ(); //uses recursion so that the method restarts if wrong input
	}
}

//length of apocalypse//
function daysQ() {
	var days = window.prompt("Approximately how many days have their been zombies around?");
	var daysP = parseFloat(days);
	if (daysP >0) {
		var add = days/100;
		addSanity(add); //should probably make it so that it starts off high, gets less, than goes back up
	} else {
		getError();
		daysQ();
	}
}

