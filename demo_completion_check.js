function demo_completion_check()
{
	if(localStorage.getItem(tag_demo_completed) != null)
	{
		demo_completed = 0;//JSON.parse(localStorage.getItem(tag_demo_completed));
	}
	else{demo_completed = 1;}

	//console.log("demo_completion: "+demo_completed);
}