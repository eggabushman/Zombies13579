function firstAid() // driver function
{
	bittenQ();
}

function getError()  // throws a JS alert if input is invalid
{
	window.alert("That's an invalid input.");
}

/* Question methods below */

function bittenQ()
{
	var bitten;
	bitten = window.prompt("Were you bitten by a zombie?")

	if (bitten === "yes" || bitten === "Yes")
	{
		window.alert("Unfortunately, there is no cure for zombie bites right now. You regrettably have no choice but to assume the worst.");
	} 
	else 
	{
		
	}
}