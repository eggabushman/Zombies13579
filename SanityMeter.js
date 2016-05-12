/**
 * 
 */
var insanity = 0;
var exita = false;
function sanityTest(){
	
	window.alert("Instructions: \n 1. Type 'back' to go to main menu \n 2. Type 'Quit' to quit bot")
	if(getexitA() == false){sleepQ();} //exits the Sanity Test if getexitA = true
	if(getexitA() == false){daysQ();}
	if(getexitA() == false){deadFriendsQ();}
	if(getexitA() == false){IQQ();}
	if(getexitA() == false){willingTestQ();}
	
	if(getexitA() == false){sanityResults();} 
	if(getexitA() == false){displayResults();} //displays insanity
//	sanityResults();
//	displayResults();
	if(getexitA() == false){MainMenu();} //goes to main menu once done
	
}

function getError(){
	window.alert("That's an invalid input.");
	insanity += 2;
	return insanity;
}

function addSanity(i){  //adds the amount passed to the total insanity
	insanity += i; 
}
function getSanity(insanity) //returns insanity as an int 
{
	return insanity;
	}
///////////////////////////Questions Methods////////////////
//sleep//
function sleepQ(){
	var lastsleep;
	lastsleep = window.prompt("How many hours ago have you slept?");
	var lastsleepP = parseInt(lastsleep); //turns the string into an int
	if (lastsleep == "back")
		{
			MainMenu();
		}
	else if (lastsleep == "Quit") {closeST();}
	
	else if(lastsleepP < 8 && lastsleepP >=0){
		//no insanity is added
	}
	else if(lastsleepP >= 8 && lastsleepP < 16){
		addSanity(2); //adds to insanity
	}
	else if (lastsleepP >= 16 && lastsleepP < 24 ){addSanity(3);}
	else if (lastsleepP >=24){addSanity(5);}
	else{
		getError();
		sleepQ(); //uses recursion so that the method restarts if wrong input
	}
}


//length of apocalypse//
function daysQ(){
	var days = window.prompt("Approxmately how many days have their been zombies around?");
	var daysP = parseFloat(days);
	if (days == "back")
	{
		MainMenu();
	}
else if (days == "Quit") {closeST();}
else if (daysP >=0){
		var add = daysP/100;
		addSanity(add); //should probably make it so that it starts off high, gets less, than goes back up
	}
	else{
		getError();
		daysQ();
	}
}

function deadFriendsQ(){
	var dead = window.prompt("How many of those close to you have died?");
	var deadP = parseFloat(dead);
	if (dead == "back")
	{
		MainMenu();
	}
else if (dead == "Quit") {closeST();}
else if(deadP ==0){} //nothing added 
	else if(deadP > 0){
		addSanity(9 * deadP);
	}
	else {
		getError();
		deadFriendsQ();
	}
}

function IQQ(){
	var IQ = window.prompt("What's your IQ.");
	var IQP = parseFloat(IQ);
	if (IQ == "back")
	{
		MainMenu();
	}
else if (IQ == "Quit") {closeST();}
else if (IQP >= 0){
		addSanity(130-IQP);
	}
	else {
		getError();
		IQQ();
	}
}

function willingTestQ(){
	var will = window.prompt("Did you willingly take this test?");
	if (will == "back")
	{
		MainMenu();
	}
else if (will == "Quit") {closeST();}
else if (will == "yes" || "Yes"){
		//nothing happens
	}
	else if (will == "no" || "No")
		{
			addSanity(6);
		}
	else{
		getError();
		willingTest();
	}
}

function lastEaten(){
	var eatan = window.prompt("In hours, when was the last time you've eaten");
	var eatanP = parseFloat(eatan);
 if (eatan == "back")
	{
		MainMenu();
	}
else if (eatan == "Quit") {closeST();}
else if (eatanP >= 0)
		{
		addSanity(.8 * eatanP)
		}
	else{
		getError();
		lastEaten();
	}
}
function closeST(){
	setexitA(); 
	window.close(); 
	return;
}
function setexitA(){ //sets the exit to true so you can break out of program
	exita = true;
}
function getexitA(){return exita;}
function sanityResults() 
{
	
	var msg; 
	if(getSanity(insanity) < 30){
		msg = "You are completely sane.";
	}
	if (getSanity(insanity) >= 30 && getSanity(insanity) < 60)
		{
		msg = "You are mostly sane."
		}
	if (getSanity(insanity) >= 60 && getSanity(insanity) < 90)
		{
			msg = "Your sanity is worrying. You may need some help."
		}
	if (getSanity(insanity) >= 90 && getSanity(insanity) < 120)
	{
		msg = "Your insanity is quite high. You are approaching dangerous levels."
	}
	if (getSanity(insanity) >= 120)
	{
		msg = "Your insanity is skyhigh! You can't function around humans in this condition."
	}
	return msg;
}
//function getMsg(msg){return msg;}
function displayResults(msg){
	window.alert("Your insanity score is: " + getSanity(insanity)+ "\n" + sanityResults() );
	
}