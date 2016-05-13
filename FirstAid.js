//Hurt me plenty! Rip and tear! Let's get ready for some zombie-killing action!

var severity = 0;

function firstAid() // driver function
{
	if (bittenQuestion() === true) 
		bittenEmergency();

	getBodyPart();
	getDiag(severity);
}

function getError()  // throws a JS alert if input is invalid
{
	window.alert("That's an invalid input.");
}

/* Question methods below */

function bittenQuestion() // checks if bitten, which can greatly change severity
{
	var bitten = window.prompt("Have you been bitten? Most zombie infections are transmissible diseases.");
	var answer;

	if (bitten === "yes" || bitten === "Yes")
	{
		window.alert("Immmediately do the following steps:");
		answer = true;
		return answer;
	} 
	else if (bitten === "no" || bitten === "No")
	{
		answer = false;
		return answer;
	}
}

function bittenEmergency()
{
	severity += 9000;
	window.alert("Inspect the wound.");
	var bleeding = window.prompt("Are you bleeding?");
	if (bleeding === "yes" || bleeding === "Yes")
	{
		window.alert("Stop the blood flow by applying pressure with a clean cloth or bandage. If possible, elevate the limb above the heart.");
		window.alert("Do not try and suck the poison out - it is deadly. Wrap a cloth or bandage tightly around the bitten limb, then plate a stick or baton inside the cloth to make a tourniquet, between the bite and the heart. Then twist the cloth until the blood constricts. This is a LAST RESORT and should ONLY be done in the most dire of circumstances, when you do not have access to a surgeon.");
		window.alert("Clean the wound thoroughly by washing it and disinfect it with an antibiotic cream, rubbing alcohol, or a mixture of vinegar, salt, and water if no antibiotics are available. This small step can potentially SAVE YOUR LIFE.");
	}
	else if (bleeding === "no" || bleeding === "No")
	{
	window.alert("Do not try and suck the poison out - it is deadly. Wrap a cloth or bandage tightly around the bitten limb, then plate a stick or baton inside the cloth to make a tourniquet, between the bite and the heart. Then twist the cloth until the blood constricts. This is a LAST RESORT and should ONLY be done in the most dire of circumstances, when you do not have access to a surgeon.");
	window.alert("Clean the wound thoroughly by washing it and disinfect it with an antibiotic cream, rubbing alcohol, or a mixture of vinegar, salt, and water if no antibiotics are available. This small step can potentially SAVE YOUR LIFE.");
	}
}

function getBodyPart()
{
	var exitLoop = true;
	while (exitLoop) 
	{
		var choice = window.prompt("Where does it hurt? Choose a number. \n1. Head \n2. Chest \n3. Abdomen \n4. Arms or Hands \n5. Legs or Feet");

		switch (choice) 
		{
			case "1":
				head();
				exitLoop = false;
				break;
			case "2":
				chest();
				exitLoop = false; 
				break;
			case "3":
				abdomen();
				exitLoop = false;
				break;
			case "4":
				armsOrHands();
				exitLoop = false;
				break;
			case "5":
				legsOrFeet();
				exitLoop = false;
				break;
			default:
				getError();
				exitLoop = true; 
		}
	}
}

/*    begin getBodyPart functions    */

function head()
{
	var exitLoop = true;
	while (exitLoop)
	{
		var headPain = window.prompt("How badly does it hurt? Choose a number. \n1. Not too much \n2. Kind of \n3. Badly \n4. Really badly \n5. Really, REALLY badly");
		switch (headPain)
		{
			case "1":
				severity += 10;
				window.alert("Sit down or lie down and rest for a bit. Nothing to be too worried about.");
				exitLoop = false;
				break;
			case "2":
				severity += 20;
				window.alert("Get at least 8 hours of sleep before doing anything else.");
				exitLoop = false;
				break;
			case "3": 
				severity += 30;
				window.alert("Okay, this is when you have to start being careful, because headache symptoms often warn of impending zombification. DO NOT PANIC. If you have not been bitten, YOU SHOULD BE FINE. The nurse's office should stock some acetaminophen, take about 500 milligrams of that.");
				exitLoop = false;
				break;
			case "4": 
				severity += 40;
				window.alert("Get a full day's rest and quarantine yourself just to be safe. DO NOT GET ANGRY IF POSSIBLE.");
				exitLoop = false;
				break;
			case "5":
				severity += 50;
				window.alert("You have been bitten. Drop everything and do the following steps IMMEDIATELY.")
				bittenEmergency();
				exitLoop = false;
				break;
			default:
				getError();
				exitLoop = true;
		}
	}
}

function chest()
{
	var exitLoop = true;
	while (exitLoop)
	{
		var chestPain = window.prompt("How badly does it hurt? Choose a number. \n1. Not too much \n2. Kind of \n3. Badly \n4. Really badly \n5. Really, REALLY badly");
		switch (chestPain)
		{
			case "1":
				severity += 10;
				window.alert("Are you holding your breath without realizing it? That uses up your energy. Breathe. SLOWLY. Again. And Again. And Again. Do this ten more times.");
				exitLoop = false;
				break;
			case "2":
				severity += 20;
				window.alert("You're expending too much energy. Stop running around too much.");
				exitLoop = false;
				break;
			case "3": 
				severity += 30;
				window.alert("Be careful! This is where you start taking that pain in your chest seriously. Do not perform any strenuous activity. In fact, just lie down and rest for a while before you do anything else at all.");
				exitLoop = false;
				break;
			case "4": 
				severity += 40;
				window.alert("Take off any clothing you may be wearing on the top half of your body and inspect your chest closely. Do you see any wound marks? Bad pain in your chest means that your heart is struggling to keep up with something.");
				exitLoop = false;
				break;
			case "5":
				severity += 50;
				window.alert("You have been bitten. Drop everything and do the following steps IMMEDIATELY.")
				bittenEmergency();
				exitLoop = false;
				break;
			default:
				getError();
				exitLoop = true;
		}
	}
}

function abdomen()
{
	var exitLoop = true;
	while (exitLoop)
	{
		var abPain = window.prompt("How badly does it hurt? Choose a number. \n1. Not too much \n2. Kind of \n3. Badly \n4. Really badly \n5. Really, REALLY badly")
		switch (abPain)
		{
			case "1":
				severity += 10;
				window.alert("Consider taking a trip to the restroom. Slight pain in your abdomen usually isn't more serious than just a routine stomachache.");
				exitLoop = false;
				break;
			case "2":
				severity += 20;
				window.alert("You're expending too much energy. Stop running around too much.");
				exitLoop = false;
				break;
			case "3": 
				severity += 30;
				window.alert("Definitely take that trip to the restroom. I'll say no more, you just try your best.");
				exitLoop = false;
				break;
			case "4": 
				severity += 40;
				window.alert("At this point, it may not be something you ate that's bothering you. Inspect your abdomen for any kind of small wound. The human digestion system is greatly aggravated by zombification.");
				exitLoop = false;
				break;
			case "5":
				severity += 50;
				window.alert("You have been bitten. Drop everything and do the following steps IMMEDIATELY.")
				bittenEmergency();
				exitLoop = false;
				break;
			default:
				getError();
				exitLoop = true;
		}
	}
}

function armsOrHands()
{
	var exitLoop = true;
	while (exitLoop)
	{
		var armsPain = window.prompt("How badly does it hurt? Choose a number. \n1. Not too much \n2. Kind of \n3. Badly \n4. Really badly \n5. Really, REALLY badly")
		switch (armsPain)
		{
			case "1":
				severity += 10;
				window.alert("Take a rest from working so hard. Slight pain in your arms or hands is most likely a sign of fatigue.");
				exitLoop = false;
				break;
			case "2":
				severity += 20;
				window.alert("Definitely get some rest. Don't use your arms and hands if possible during that rest.");
				exitLoop = false;
				break;
			case "3": 
				severity += 30;
				window.alert("Use your arms and hands as little as humanly possible for the next 12 hours.");
				exitLoop = false;
				break;
			case "4": 
				severity += 40;
				window.alert("Your arms and hands are two of the most common locations for zombie bites. Inspect your arms and hands for any kind of small wound.");
				exitLoop = false;
				break;
			case "5":
				severity += 50;
				window.alert("You have been bitten. Drop everything and do the following steps IMMEDIATELY.")
				bittenEmergency();
				exitLoop = false;
				break;
			default:
				getError();
				exitLoop = true;
		}
	}
}

function legsOrFeet()
{
	var exitLoop = true;
	while (exitLoop)
	{
		var legsPain = window.prompt("How badly does it hurt? Choose a number. \n1. Not too much \n2. Kind of \n3. Badly \n4. Really badly \n5. Really, REALLY badly")
		switch (legsPain)
		{
			case "1":
				severity += 10;
				window.alert("Take a rest from walking or running so hard. Slight pain in your arms or hands is most likely a sign of fatigue.");
				exitLoop = false;
				break;
			case "2":
				severity += 20;
				window.alert("You're expending too much energy. Stop running around too much.");
				exitLoop = false;
				break;
			case "3": 
				severity += 30;
				window.alert("Stay there like a good person and don't move around too much for the next 12 hours.");
				exitLoop = false;
				break;
			case "4": 
				severity += 40;
				window.alert("Your legs and feet are two of the most common locations for zombie bites. Inspect your legs and feet for any kind of small wound.");
				exitLoop = false;
				break;
			case "5":
				severity += 50;
				window.alert("You have been bitten. Drop everything and do the following steps IMMEDIATELY.")
				bittenEmergency();
				exitLoop = false;
				break;
			default:
				getError();
				exitLoop = true;
		}
	}
}

/*    end getBodyPart functions    */

function getDiag(deathVal)
{
	if (deathVal > 9000) 
	{
		window.alert("We hope you took the necessary steps for treatment, because your severity is off the charts! Don't blame us if you end up six feet under.");
		window.alert("We have evaluated your severity level to be " + deathVal + ", which is clearly over 9000. Unfortunately, this doesn't correspond to power - this corresponds to how likely you are to die.");
		window.alert("We advise you to prepare for certain death or zombification, because it sure looks like that is what's going to happen.");
	}

	else if (deathVal > 50 && deathVal < 9000)
	{
		window.alert("Okay, don't panic. Yet. We think you are still fine, but you could be anywhere from peachy to near-collapse. But hey, at least we're telling you something! The moral of the story is to get some rest!")
		window.alert("Again, stay calm. Depending on how much it hurts, inform your local friendly surgeon of your ailments, and have him or her do the best he or she can! However, if you happen to be lacking of a local friendly surgeon, anyone who knows how to properly use duct tape, a pair of scissors, antibiotic cream, and a blindfold should do just as well. Good luck!")
	}	 

	else if (deathVal < 50)
	{
		window.alert("Seems like your injuries, if you really are injured, aren't that serious. Now how about that?");
		window.alert("Get back to base, rest up, and prepare for the next day. It's a scary world out there, and we're glad you're okay. Live to fight another day, survivor.")
	}
}

