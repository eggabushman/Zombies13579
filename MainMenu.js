/**
 * 
 */
function MainMenu()
{
	var exitLoop = true;

	while (exitLoop) 
	{
		var choice = window.prompt("Choose an option: \n1. Sanity Test  \n2. Personalized Guide  \n3. First Aid \n4. Quit");

		switch (choice) 
		{
			case 1:
				sanityTest();
				exitLoop = false;
			/*case 2:
				personalGuide();
				exitLoop = false; */
			case 3:
				firstAid();
				exitLoop = false;
			case 4:
				break;
			default:
				window.alert("That's not an option!");
				exitLoop = true; 
		}
	}

	
	/* if(choice == "1" || "sanity test" || "Sanity Test")
		{
			sanityTest();
		}
	*/

}

function getGreeting() 
{
	window.alert("Hello! I'm your friendly neighborhood chatbot, here to help you with your zombie troubles.");
}