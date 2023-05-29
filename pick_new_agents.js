function pick_new_agents()
{
	var iterations = 0;
	var agent_choice = 0;
	var max_iterations = 5000;
	var agent_selection_count = 0;
	
	for(g=0; g<14; g++)
	{
		game_agent_array[g] = g;	
	}
	
	/*
	game_agent_array.splice(0);
	
	while(iterations < max_iterations && agent_selection_count < 14)
	{
		agent_choice = Math.floor(Math.random()*30);

		if(game_agent_array.includes(agent_choice) == false)
		{
			game_agent_array[agent_selection_count] = agent_choice;
			agent_selection_count=agent_selection_count+1;
		}
		
		iterations=iterations+1;
	}
	*/
}