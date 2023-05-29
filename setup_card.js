function setup_card(card_no)
{
	var max_iterations = 5000;
	var iteration_choice = 0;
	var location_found = -1;
	
	for(var d=0; d<56; d++)
	{
		
		red_map_border_array[d].visible = false;
	}
	
	
	bright_map(-1);
	
	if(card_type[card_no]==0)
	{	
		if(action_type[card_no]==1)
		{
			/*
			dim_map(-1);
			random_location_choice = -1;
			
			iteration_choice = 0;
			location_found = -1;
			
			while(iteration_choice<max_iterations && location_found == -1)
			{
				random_location_choice = Math.floor(Math.random()*56);
				if(agent_present[random_location_choice] != 1 && red_police_array[random_location_choice] == 0 && yellow_police_array[random_location_choice] == 0)
				{
					location_found = 1;
				}
				iteration_choice=iteration_choice+1;
				
			}
			
			if(random_location_choice>-1)
			{
				red_map_border_array[random_location_choice].visible = true;
				bright_map(random_location_choice);		
			}
			*/
		}
		
	}
	else if(card_type[card_no]==2)
	{
	dim_map(-1);
	
		for(var d=0; d<56; d++)
		{
			if(agent_present[d] == 1 && red_police_array[d] == 0 && yellow_police_array[d] == 0)
			{
				if(action_var_1[card_no] == 0) // target charactaristic
				{
					if(agent_char_1[d] == action_var_2[card_no] || agent_char_2[d] == action_var_2[card_no])
					{
						if(action_type[card_no] == 0 && info_value[d]>0)
						{
							red_map_border_array[d].visible = true;
							bright_map(d);		
						}
						else if(action_type[card_no] == 1 && info_stealth[d]>0)
						{
							red_map_border_array[d].visible = true;
							bright_map(d);		
						}
					}
				}
				else if(action_var_1[card_no] == 1) // target box type
				{
					
					
					if(map_colors_array[d] == action_var_2[card_no])
					{
						if(action_type[card_no] == 0 && info_value[d]>0)
						{
							red_map_border_array[d].visible = true;
							bright_map(d);		
						}
						else if(action_type[card_no] == 1 && info_stealth[d]>0)
						{
							red_map_border_array[d].visible = true;
							bright_map(d);		
						}
					}
				}
			}		
		}		
		
	}
	else if(card_type[card_no]==4)
	{
	
		dim_map(-1);
	
		for(var d=0; d<56; d++)
		{
			if(agent_present[d] == 1 && red_police_array[d] == 0 && yellow_police_array[d] == 0)
			{
				if(action_var_1[card_no] == 0) // target charactaristic
				{
					if(agent_char_1[d] == action_var_2[card_no] || agent_char_2[d] == action_var_2[card_no])
					{
						if(action_type[card_no] == 0 && info_value[d]<9)
						{
							red_map_border_array[d].visible = true;
							bright_map(d);		
						}
						else if(action_type[card_no] == 1 && info_stealth[d]<9)
						{
							red_map_border_array[d].visible = true;
							bright_map(d);		
						}
					}
				}
				else if(action_var_1[card_no] == 1) // target box type
				{
					
					
					if(map_colors_array[d] == action_var_2[card_no])
					{
						if(action_type[card_no] == 0 && info_value[d]<9)
						{
							red_map_border_array[d].visible = true;
							bright_map(d);		
						}
						else if(action_type[card_no] == 1 && info_stealth[d]<9)
						{
							red_map_border_array[d].visible = true;
							bright_map(d);		
						}
					}
				}
			}		
		}		
	
		
		
	}
	else if(card_type[card_no]==5)
	{	
	
	}


}