function check_playability(card_no)
{
	var max_iterations = 5000;
	var iteration_choice = 0;
	var location_found = -1;
	var cost_factor = 0;
	var agent_found = 0;
	var cost_mult = 0;

	playable = -1;
	cost_1_met = 0;
	cost_2_met = 0;
	cost_3_met = 0;

	agent_found = 0;
	
	
	cost_factor = 1;
	
	if(cost_type_a[card_no] == 0) // No cost
	{
		cost_mult = 1;
		cost_factor = cost_factor * cost_mult;
	}
	else if(cost_type_a[card_no] == 1) // Agent in proper box with right info level
	{
		cost_mult = 0;
		for(var b=0; b<56; b++)
		{
			if(info_value[b] >= cost_var_a_1[card_no] && map_colors_array[b] == cost_var_a_2[card_no] && agent_present[b]==1)
			{
				cost_mult = 1;
			}
			
		}
		
		cost_factor = cost_factor * cost_mult;
	}
	else if(cost_type_a[card_no] == 2) // Reduction in stealth level 
	{
		cost_mult = 1;
		cost_factor = cost_factor * cost_mult;
	}
	else if(cost_type_a[card_no] == 3) // Reduction in info level 
	{
		cost_mult = 1;
		cost_factor = cost_factor * cost_mult;
	}
	else if(cost_type_a[card_no] == 4) // Spend point 
	{
		cost_mult = 0;

		if(cost_var_a_1[card_no] == 0 && cost_var_a_2[card_no] <= diplomacy_points)
		{
			cost_mult = 1;
		}
		else if(cost_var_a_1[card_no] == 1 && cost_var_a_2[card_no] <= military_points)
		{
			cost_mult = 1;
		}
		
		//cost_mult = 1;
		cost_factor = cost_factor * cost_mult;

		
	}
	
	if(cost_type_b[card_no] == 0) // No cost
	{
		cost_mult = 1;
		cost_factor = cost_factor * cost_mult;
	}
	else if(cost_type_b[card_no] == 1) // Agent in proper box with right info level
	{
		cost_mult = 0;

		for(var b=0; b<56; b++)
		{
			if(info_value[b] >= cost_var_b_1[card_no] && map_colors_array[b] == cost_var_b_2[card_no] && agent_present[b]==1)
			{
				cost_mult = 1;
			}
			
		}
		cost_factor = cost_factor * cost_mult;
				
	}
	else if(cost_type_b[card_no] == 2) // Reduction in stealth level 
	{
		cost_mult = 1;
		cost_factor = cost_factor * cost_mult;
	}
	else if(cost_type_b[card_no] == 3) // Reduction in info level 
	{
		cost_mult = 1;
		cost_factor = cost_factor * cost_mult;
	}
	else if(cost_type_b[card_no] == 4) // Spend point 
	{
		cost_mult = 0;

		if(cost_var_b_1[card_no] == 0 && cost_var_b_2[card_no] <= diplomacy_points)
		{
			cost_mult = 1;
		}
		else if(cost_var_b_1[card_no] == 1 && cost_var_b_2[card_no] <= military_points)
		{
			cost_mult = 1;
		}

		//cost_mult = 1;
		cost_factor = cost_factor * cost_mult;	
	}
	
	if(cost_type_c[card_no] == 0) // No cost
	{
		cost_mult = 1;
		cost_factor = cost_factor * cost_mult;
	}
	else if(cost_type_c[card_no] == 1) // Agent in proper box with right info level
	{
		cost_mult = 0;

		for(var b=0; b<56; b++)
		{
			if(info_value[b] >= cost_var_c_1[card_no] && map_colors_array[b] == cost_var_c_2[card_no] && agent_present[b]==1)
			{
				cost_mult = 1;
			}
			
		}
		cost_factor = cost_factor * cost_mult;
				
	}
	else if(cost_type_c[card_no] == 2) // Reduction in stealth level 
	{
		cost_mult = 1;
		cost_factor = cost_factor * cost_mult;
	}
	else if(cost_type_c[card_no] == 3) // Reduction in info level 
	{
		cost_mult = 1;
		cost_factor = cost_factor * cost_mult;
	}
	else if(cost_type_c[card_no] == 4) // Spend point 
	{
		cost_mult = 0;

		
		if(cost_var_c_1[card_no] == 0 && cost_var_c_2[card_no] <= diplomacy_points)
		{
			cost_mult = 1;
		}
		else if(cost_var_c_1[card_no] == 1 && cost_var_c_2[card_no] <= military_points)
		{
			cost_mult = 1;
		}

		//cost_mult = 1;
		cost_factor = cost_factor * cost_mult;		
	}
	

	//console.log("cost_factor: "+cost_factor);
	
	if(card_type[card_no]==0) // Place new agent
	{	
		if(action_type[card_no]==1)
		{
			
			for(var d=0; d<56; d++)
			{
				if(d%7 != 0)
				{
					if(agent_present[d] != 1 && red_police_array[d] == 0 && yellow_police_array[d] == 0)
					{
						playable = 1 * cost_factor;	
					}
				}	
			}


		}
		
	}
	else if(card_type[card_no]==1) //Mission
	{
		playable = 1 * cost_factor;
	}
	else if(card_type[card_no]==2) //Counter Intel - see if you can block
	{
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
							playable = 1 * cost_factor;	
						}
						else if(action_type[card_no] == 1 && info_stealth[d]>0)
						{
							playable = 1 * cost_factor;	
						}
					}
				}
				else if(action_var_1[card_no] == 1) // target box type
				{					
					if(map_colors_array[d] == action_var_2[card_no])
					{
						if(action_type[card_no] == 0 && info_value[d]>0)
						{
							playable = 1 * cost_factor;	
						}
						else if(action_type[card_no] == 1 && info_stealth[d]>0)
						{
							playable = 1 * cost_factor;	
						}
					}
				}
			}		
		}		
		
	}
	else if(card_type[card_no]==3) //Move counter intel marker
	{
		playable = 1 * cost_factor;
	}
	else if(card_type[card_no]==4) // Espianage - add points to agent
	{
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
							playable = 1 * cost_factor;	
						}
						else if(action_type[card_no] == 1 && info_stealth[d]<9)
						{
							playable = 1 * cost_factor;	
						}
					}
				}
				else if(action_var_1[card_no] == 1) // target box type
				{					
					if(map_colors_array[d] == action_var_2[card_no])
					{
						if(action_type[card_no] == 0 && info_value[d]<9)
						{
							playable = 1 * cost_factor;	
						}
						else if(action_type[card_no] == 1 && info_stealth[d]<9)
						{
							playable = 1 * cost_factor;	
						}
					}
				}
			}		
		}		
	}
	else if(card_type[card_no]==5) // Exfiltrate
	{
		for(var d=0; d<56; d++)
		{
			if(agent_present[d] == 1)
			{
				playable = 1 * cost_factor;	
			}		
		}


	}
	else if(card_type[card_no]==6) // Gain points
	{
		playable = 1 * cost_factor;
	}
	else if(card_type[card_no]==8)
	{
		playable = card_resource_check(card_no);
	}
	else if(card_type[card_no]==11)
	{
		for(var d=0; d<56; d++)
		{
			if(code_1[d] == action_var_1[card_no] || code_2[d] == action_var_1[card_no])
			{
				playable = card_resource_check(card_no);	
			}		
		}
	}
		
	
	
	//console.log("playable: "+playable);
	
	
	
	


}