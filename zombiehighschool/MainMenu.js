/**
 * 
 */
function MainMenu()
{
	var exitLoop = true;

	while (exitLoop) 
	{
		var choice = window.prompt("Type an option number: \n1. Sanity Test \n2. First Aid \n3. Quit");
		//window.resizeTo(100);
		switch (choice) 
		{
			case "1":
				sanityTest();
				exitLoop = false;
			case "2":
				firstAid();
				exitLoop = false;
			case "3": 
				window.close();
				exitLoop = false;
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
