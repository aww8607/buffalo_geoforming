function card_cost_effect(card_no)
{
	if(cost_type_a[card_no] == 2) // Reduction in stealth level 
	{
		for(var d=0; d<56; d++)
		{
			if(agent_present[d] == 1)
			{
				if(cost_var_a_1[card_no] == 0) // target charactaristic
				{
					if(agent_char_1[d] == cost_var_a_2[card_no] || agent_char_2[d] == cost_var_a_2[card_no])
					{
						info_stealth[d]=info_stealth[d]-cost_var_a_3[card_no];	
						if(info_stealth[d]<0){info_stealth[d]=0;}
					}
				}
				else if(cost_var_a_1[card_no] == 1) // target box type
				{
					if(map_colors_array[d] == cost_var_a_2[card_no])
					{
						info_stealth[d]=info_stealth[d]-cost_var_a_3[card_no];	
						if(info_stealth[d]<0){info_stealth[d]=0;}
						
					}
				}
			}		
		}

	}
	else if(cost_type_a[card_no] == 3) // Reduction in info level 
	{
		for(var d=0; d<56; d++)
		{
			if(agent_present[d] == 1)
			{
				if(cost_var_a_1[card_no] == 0) // target charactaristic
				{
					if(agent_char_1[d] == cost_var_a_2[card_no] || agent_char_2[d] == cost_var_a_2[card_no])
					{
						info_value[d]=info_value[d]-cost_var_a_3[card_no];	
						if(info_value[d]<0){info_value[d]=0;}
					}
				}
				else if(cost_var_a_1[card_no] == 1) // target box type
				{
					if(map_colors_array[d] == cost_var_a_2[card_no])
					{
						info_value[d]=info_value[d]-cost_var_a_3[card_no];	
						if(info_value[d]<0){info_value[d]=0;}
						
					}
				}
			}		
		}

	}
	else if(cost_type_a[card_no] == 4) // Spend point 
	{
		if(cost_var_a_1[card_no] == 0)
		{
			diplomacy_points=diplomacy_points-cost_var_a_2[card_no];
			if(diplomacy_points<0){diplomacy_points=0;}
			diplomacy_point_text.text = diplomacy_points+agent_name_text;
		}
		else if(cost_var_a_1[card_no] == 1)
		{
			military_points=military_points-cost_var_a_2[card_no];
			if(military_points<0){military_points=0;}
			military_point_text.text = military_points;
		}
		
	}


	if(cost_type_b[card_no] == 2) // Reduction in stealth level 
	{
		for(var d=0; d<56; d++)
		{
			if(agent_present[d] == 1)
			{
				if(cost_var_b_1[card_no] == 0) // target charactaristic
				{
					if(agent_char_1[d] == cost_var_b_2[card_no] || agent_char_2[d] == cost_var_b_2[card_no])
					{
						info_stealth[d]=info_stealth[d]-cost_var_b_3[card_no];	
						if(info_stealth[d]<0){info_stealth[d]=0;}
					}
				}
				else if(cost_var_b_1[card_no] == 1) // target box type
				{
					if(map_colors_array[d] == cost_var_b_2[card_no])
					{
						info_stealth[d]=info_stealth[d]-cost_var_b_3[card_no];	
						if(info_stealth[d]<0){info_stealth[d]=0;}
						
					}
				}
			}		
		}

	}
	else if(cost_type_b[card_no] == 3) // Reduction in info level 
	{
		for(var d=0; d<56; d++)
		{
			if(agent_present[d] == 1)
			{
				if(cost_var_b_1[card_no] == 0) // target charactaristic
				{
					if(agent_char_1[d] == cost_var_b_2[card_no] || agent_char_2[d] == cost_var_b_2[card_no])
					{
						info_value[d]=info_value[d]-cost_var_b_3[card_no];	
						if(info_value[d]<0){info_value[d]=0;}
					}
				}
				else if(cost_var_b_1[card_no] == 1) // target box type
				{
					if(map_colors_array[d] == cost_var_b_2[card_no])
					{
						info_value[d]=info_value[d]-cost_var_b_3[card_no];	
						if(info_value[d]<0){info_value[d]=0;}
						
					}
				}
			}		
		}

	}
	else if(cost_type_b[card_no] == 4) // Spend point 
	{
		if(cost_var_b_1[card_no] == 0)
		{
			diplomacy_points=diplomacy_points-cost_var_b_2[card_no];
			if(diplomacy_points<0){diplomacy_points=0;}
			diplomacy_point_text.text = diplomacy_points+agent_name_text;
		}
		else if(cost_var_b_1[card_no] == 1)
		{
			military_points=military_points-cost_var_b_2[card_no];
			if(military_points<0){military_points=0;}
			military_point_text.text = military_points;
		
		}
		
	}

	if(cost_type_c[card_no] == 2) // Reduction in stealth level 
	{
		for(var d=0; d<56; d++)
		{
			if(agent_present[d] == 1)
			{
				if(cost_var_c_1[card_no] == 0) // target charactaristic
				{
					if(agent_char_1[d] == cost_var_c_2[card_no] || agent_char_2[d] == cost_var_c_2[card_no])
					{
						info_stealth[d]=info_stealth[d]-cost_var_c_3[card_no];	
						if(info_stealth[d]<0){info_stealth[d]=0;}
					}
				}
				else if(cost_var_c_1[card_no] == 1) // target box type
				{
					if(map_colors_array[d] == cost_var_c_2[card_no])
					{
						info_stealth[d]=info_stealth[d]-cost_var_c_3[card_no];	
						if(info_stealth[d]<0){info_stealth[d]=0;}
						
					}
				}
			}		
		}

	}
	else if(cost_type_c[card_no] == 3) // Reduction in info level 
	{
		for(var d=0; d<56; d++)
		{
			if(agent_present[d] == 1)
			{
				if(cost_var_c_1[card_no] == 0) // target charactaristic
				{
					if(agent_char_1[d] == cost_var_c_2[card_no] || agent_char_2[d] == cost_var_c_2[card_no])
					{
						info_value[d]=info_value[d]-cost_var_c_3[card_no];	
						if(info_value[d]<0){info_value[d]=0;}
					}
				}
				else if(cost_var_c_1[card_no] == 1) // target box type
				{
					if(map_colors_array[d] == cost_var_c_2[card_no])
					{
						info_value[d]=info_value[d]-cost_var_c_3[card_no];	
						if(info_value[d]<0){info_value[d]=0;}
						
					}
				}
			}		
		}

	}
	else if(cost_type_c[card_no] == 4) // Spend point 
	{
		if(cost_var_c_1[card_no] == 0)
		{
			diplomacy_points=diplomacy_points-cost_var_c_2[card_no];
			if(diplomacy_points<0){diplomacy_points=0;}
			diplomacy_point_text.text = diplomacy_points+agent_name_text;
		}
		else if(cost_var_c_1[card_no] == 1)
		{
			military_points=military_points-cost_var_c_2[card_no];
			if(military_points<0){military_points=0;}
			military_point_text.text = military_points+carbon_text;
		}
		
	}


}