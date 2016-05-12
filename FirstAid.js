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
	var bitten = window.prompt("Have you been bitten? Most zombie infections are transmissible diseases.")
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
	window.alert("Inspect the wound.")
	var bleeding = window.prompt("Are you bleeding?")
	if (bleeding == "yes" || bleeding == "Yes")
	{
		window.alert("Stop the blood flow by applying pressure with a clean cloth or bandage. If possible, elevate the limb above the heart.)
		window.alert("Do not try and suck the poison out - it is deadly. Wrap a cloth or bandage tightly around the bitten limb, then plate a stick or baton inside the cloth to make a tourniquet, between the bite and the heart. Then twist the cloth until the blood constricts. This is a LAST RESORT and should ONLY be done in the most dire of circumstances, when you do not have access to a surgeon.")
		window.alert("Clean the wound thoroughly by washing it and disinfect it with an antibiotic cream, rubbing alcohol, or a mixture of vinegar, salt, and water if no antibiotics are available. This small step can potentially SAVE YOUR LIFE.")
	}
	else if (bleeding == "no" || bleeding == "No")
	{
	window.alert("Do not try and suck the poison out - it is deadly. Wrap a cloth or bandage tightly around the bitten limb, then plate a stick or baton inside the cloth to make a tourniquet, between the bite and the heart. Then twist the cloth until the blood constricts. This is a LAST RESORT and should ONLY be done in the most dire of circumstances, when you do not have access to a surgeon.")
	window.alert("Clean the wound thoroughly by washing it and disinfect it with an antibiotic cream, rubbing alcohol, or a mixture of vinegar, salt, and water if no antibiotics are available. This small step can potentially SAVE YOUR LIFE.")
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

}

function chest()
{

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
		window.alert("We hope you took the necessary steps for treatment, because your severity is off the charts! Don't blame us if you end up six feet under.")
	}
}

