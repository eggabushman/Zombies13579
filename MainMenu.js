
/**
 * 
 */
function MainMenu()
{
	var exitLoop = true;

	while (exitLoop) 
	{
		var choice = window.prompt("Choose an option: \n1. Sanity Test   First Aid   Quit");
		window.resizeTo(100);
		switch (choice) 
		{

			case "Sanity Test":
				
				sanityTest();

				exitLoop = false;
				break;
			/*case 2:
				personalGuide();
				exitLoop = false; */
			case "First Aid":
				firstAid();
				exitLoop = false;
			case  "Quit": 
				window.close();
				exitLoop = false;
				break;
			default:
				window.alert("That's not an option!");
				exitLoop = false; 
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
