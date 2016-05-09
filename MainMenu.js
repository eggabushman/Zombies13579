/**
 * 
 */
function MainMenu()
{
	var choice = window.prompt("Choose an option: 1. Sanity Test  2. Personalized Guide  3. First Aid")

	switch (choice) {
		case 1:
			sanityTest();
			break;
		/*case 2:
			personalGuide();
			break; */
		case 3:
			firstAid();
			break;
	}
	
	/* if(choice == "1" || "sanity test" || "Sanity Test")
		{
			sanityTest();
		}
	*/

}

function getGreeting()
{
	window.alert("Hello! I'm your friendly neighborhood chatbot, here to help you with your zombie troubles.")
}
