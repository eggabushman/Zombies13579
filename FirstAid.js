//Hurt me plenty! Rip and tear! Let's get ready for some zombie-killing action!

var severity = 0;

function firstAid() // driver function
{

	bittenQ();

	if (bittenQ() == true) 
		bittenEmergency();

	bodyPart();
	getDiag(severity);
}

function getError()  // throws a JS alert if input is invalid
{
	window.alert("That's an invalid input.");
}

/* Question methods below */

function bittenQ() // checks if bitten, which can greatly change severity
{
	var bitten = window.prompt("Have you been bitten? Most zombie infections are transmissible diseases.");
	var answer;

	if (bitten == "yes" || bitten == "Yes")
	{
		window.alert("Immmediately do the following steps:");
		answer == true;
		return answer;
	} 
	else if (bitten === "no" || bitten == "No")
	{
		answer == false;
		return answer;
	}
}

function bittenEmergency()
{
	severity += 9000;
	window.alert("Inspect the wound.");
	var bleeding = window.prompt("Are you bleeding?");
	if (bleeding == "yes" || bleeding == "Yes")
	{
		window.alert("Stop the blood flow by applying pressure with a clean cloth or bandage. If possible, elevate the limb above the heart.");
		window.alert("Do not try and suck the poison out - it is deadly. Wrap a cloth or bandage tightly around the bitten limb, then plate a stick or baton inside the cloth to make a tourniquet, between the bite and the heart. Then twist the cloth until the blood constricts. This is a LAST RESORT and should ONLY be done in the most dire of circumstances, when you do not have access to a surgeon.");
		window.alert("Clean the wound thoroughly by washing it and disinfect it with an antibiotic cream, rubbing alcohol, or a mixture of vinegar, salt, and water if no antibiotics are available. This small step can potentially SAVE YOUR LIFE.");
	}
	else if (bleeding == "no" || bleeding == "No")
	{
	window.alert("Do not try and suck the poison out - it is deadly. Wrap a cloth or bandage tightly around the bitten limb, then plate a stick or baton inside the cloth to make a tourniquet, between the bite and the heart. Then twist the cloth until the blood constricts. This is a LAST RESORT and should ONLY be done in the most dire of circumstances, when you do not have access to a surgeon.");
	window.alert("Clean the wound thoroughly by washing it and disinfect it with an antibiotic cream, rubbing alcohol, or a mixture of vinegar, salt, and water if no antibiotics are available. This small step can potentially SAVE YOUR LIFE.");
	}
}

function bodyPart()
{
	while (exitLoop) 
	{
		var choice = window.prompt("Where does it hurt? \n1. Head \n2. Chest \n3. Abdomen \n4. Arms or Hands \n5. Legs or Feet");

		switch (choice) 
		{
			case 1:
				head();
				exitLoop = false;
			case 2:
				chest();
				exitLoop = false; 
			case 3:
				abdomen();
				exitLoop = false;
			case 4:
				armsOrHands();
				exitLoop = false;
			case 5:
				legsOrFeet();
				exitLoop = false;
			default:
				getError();
				exitLoop = true; 
		}
	}

}

function head()
{
	while (exitLoop)
	{
		var headPain = window.prompt("How badly does it hurt? \n1. Not too much \n2. Kind of \n3. Badly \n4. Really badly \n5. Really, REALLY badly")
		switch (headPain)
		{
			case 1:
				severity += 10;
				window.alert("Sit down or lie down and rest for a bit. Nothing to be too worried about.");
				exitLoop = false;
			case 2:
				severity += 20;
				window.alert("Get at least 8 hours of sleep before doing anything else.");
				exitLoop = false;
			case 3: 
				severity += 30;
				window.alert("Okay, this is when you have to start being careful, because headache symptoms often warn of impending zombification. DO NOT PANIC. If you have not been bitten, YOU SHOULD BE FINE. The nurse's office should stock some acetaminophen, take about 500 milligrams of that.");
				exitLoop = false;
			case 4: 
				severity += 40;
				window.alert("Get a full day's rest and quarantine yourself just to be safe. DO NOT GET ANGRY IF POSSIBLE.");
				exitLoop = false;
			case 5:
				severity += 50;
				window.alert("You have been bitten. Drop everything and do the following steps IMMEDIATELY.")
				bittenEmergency();
				exitLoop = false;
			default:
				getError();
				exitLoop = true;
		}
	}
}

function chest()
{
	while (exitLoop)
	{
		var chestPain = window.prompt("How badly does it hurt? \n1. Not too much \n2. Kind of \n3. Badly \n4. Really badly \n5. Really, REALLY badly")
		switch (headPain)
		{
			case 1:
				severity += 10;
				window.alert("Are you holding your breath without realizing it? That uses up your energy. Breathe. SLOWLY. Again. And Again. And Again. Do this ten more times.");
				exitLoop = false;
			case 2:
				severity += 20;
				window.alert("You're expending too much energy. Stop running around too much.");
				exitLoop = false;
			case 3: 
				severity += 30;
				window.alert("Be careful!");
				exitLoop = false;
			case 4: 
				severity += 40;
				window.alert("Get a full day's rest and quarantine yourself just to be safe. DO NOT GET ANGRY IF POSSIBLE.");
				exitLoop = false;
			case 5:
				severity += 50;
				window.alert("You have been bitten. Drop everything and do the following steps IMMEDIATELY.")
				bittenEmergency();
				exitLoop = false;
			default:
				getError();
				exitLoop = true;
		}
	}

}

function abdomen()
{

}

function armsOrHands()
{

}

function legsOrFeet()
{

}

function getDiag(deathVal)
{
	if (deathVal > 9000) 
	{
		window.alert("We hope you took the necessary steps for treatment, because your severity is off the charts! Don't blame us if you end up six feet under.");
		window.alert("We have evaluated your severity level to be " + deathVal + ", which is clearly over 9000. Unfortunately, this doesn't correspond to power - this corresponds to how likely you are to die.");
		window.alert("We advise you to prepare for certain death or zombification, because it sure looks like that is what's going to happen.");
	}

	else if (deathVal < 50)
	{
		window.alert("Seems like your injuries, if you really are injured, aren't that serious. Now how about that?");
		window.alert("Get back to base, rest up, and prepare for the next day. It's a scary world out there, and we're glad you're okay. Live to fight another day, survivor.")
	}
}

