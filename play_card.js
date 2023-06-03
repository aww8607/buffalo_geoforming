function play_card(card_no, scene)
{
	var vp_objective_count
	var rand_selection = -1;
	var found_country = 0;
	var max_tries = 10000;
	var try_count = 0;
	
	agent_placement_holder = -1;
	
	if(card_type[card_no]==0)
	{
		if(action_type[card_no]==1)
		{
			
			//dim_map(-1);
			
			/*		
			if(random_location_choice>-1)
			{
				//console.log(info_level[action_var_1[action_card_choice]]);
				
				agent_present[random_location_choice] = 1;
				info_value[random_location_choice] = Math.floor(Math.random()*starting_stealth_level);//info_level[game_agent_array[action_var_1[action_card_choice]]];
				info_stealth[random_location_choice] = starting_stealth_level;//stealth_level[game_agent_array[action_var_1[action_card_choice]]];
				agent_char_1[random_location_choice] = char_1[game_agent_array[action_var_1[action_card_choice]]];
				agent_char_2[random_location_choice] = char_2[game_agent_array[action_var_1[action_card_choice]]];
			
				//bright_map(random_location_choice);
			}
			*/
			

			played[card_no]=1;
				
			agent_placement_holder=card_no;	
			//console.log('card_no '+card_no+' agent_placement_holder '+agent_placement_holder); 	
			
			card_cost_effect(card_no);
			if(auto_card[card_no]==0){new_card(-1,scene);}
			
			
			
			for(var p=0; p<56; p++)
			{
				if(agent_present[p] == 0 && p%7 != 0)
				{
					red_map_border_array[p].visible = true;
					bright_map(p);						
				}
			}
			
			instruction_box.text = "Turn "+turn+"/"+max_turn+" - Pick an agent with a red border to remove from the board.";

			phase = 8;
			dim_map(-1);

			
		}
		
	}
	else if(card_type[card_no]==1)
	{
		vp_objective_count=0;
		
		
		for(var d=0; d<56; d++)
		{
			
			if(agent_present[d] == 1 && red_police_array[d] == 0 && yellow_police_array[d] == 0)
			{
				if(action_var_2[card_no]==0)
				{
					
					if(map_colors_array[d] == action_var_3[card_no] && action_var_4[card_no] <= info_value[d])
					{
						vp_objective_count=vp_objective_count+1;			
					}
				}
				else if(action_var_2[card_no]==1)
				{
					if((agent_char_1[d] == action_var_2[card_no] || agent_char_2[d] == action_var_2[card_no]) && action_var_4[card_no] <= info_value[d])
					{
						vp_objective_count=vp_objective_count+1;			
					}					
				}
				
			}
		}
		
		if(action_type[card_no]==1)
		{
			military_points=military_points+vp_objective_count*action_var_1[card_no];	
			military_point_text.text = military_points+carbon_text;	
		
		}
		else if(action_type[card_no]==2)
		{
			diplomacy_points=diplomacy_points+vp_objective_count*action_var_1[card_no];
			diplomacy_point_text.text = diplomacy_points+agent_name_text;	
		}
		
		//played[action_card_choice]=1;
		
		card_cost_effect(card_no);	
		agent_update();
		if(auto_card[card_no]==0){new_card(-1,scene);}

	}
	else if(card_type[card_no]==2)
	{
		for(var d=0; d<56; d++)
		{
			
			
			//if(agent_present[d] == 1 && red_police_array[d] == 0 && yellow_police_array[d] == 0)
			//if(red_police_array[d] == 0 && yellow_police_array[d] == 0)
			//{
				
				
				if(action_var_1[card_no] == 0) // target charactaristic
				{
					if(code_1[d] == action_var_2[card_no])
					{
						
						if(action_type[card_no]==0)
						{
							info_value[d]=info_value[d]-action_var_3[card_no];	
							if(info_value[d]<0){info_value[d]=0;}
							
						}
						else if(action_type[card_no]==1)
						{
							info_stealth[d]=info_stealth[d]-action_var_3[card_no];	
							if(info_stealth[d]<0){info_stealth[d]=0;}
						}
						else if(action_type[card_no]==2)
						{
							carbon_level[Math.floor(d/7,0)]=carbon_level[Math.floor(d/7,0)]+action_var_3[card_no];	
							if(carbon_level[Math.floor(d/7,0)]>9){carbon_level[Math.floor(d/7,0)]=9;}
						}
						else if(action_type[card_no]==3)
						{
							military_points=military_points+action_var_4[card_no];	
							military_point_text.text = military_points+carbon_text;								
						}
						
					}
					if(code_2[d] == action_var_2[card_no])
					{
						if(action_type[card_no]==0)
						{
							info_value[d]=info_value[d]-action_var_3[card_no];	
							if(info_value[d]<0){info_value[d]=0;}
							
						}
						else if(action_type[card_no]==1)
						{
							info_stealth[d]=info_stealth[d]-action_var_3[card_no];	
							if(info_stealth[d]<0){info_stealth[d]=0;}
						}
						else if(action_type[card_no]==2)
						{
							carbon_level[Math.floor(d/7,0)]=carbon_level[Math.floor(d/7,0)]+action_var_3[card_no];
							if(carbon_level[Math.floor(d/7,0)]>9){carbon_level[Math.floor(d/7,0)]=9;}							
						}
						else if(action_type[card_no]==3)
						{
							military_points=military_points+action_var_4[card_no];	
							military_point_text.text = military_points+carbon_text;								
						}
					
					}
					

					
				}
				else if(action_var_1[card_no] == 1) // target box type
				{
					
					
					if(map_colors_array[d] == action_var_2[card_no])
					{
						if(action_type[card_no]==0)
						{
							info_value[d]=info_value[d]-action_var_3[card_no];	
							if(info_value[d]<0){info_value[d]=0;}
						}
						else if(action_type[card_no]==1)
						{
							info_stealth[d]=info_stealth[d]-action_var_3[card_no];	
							if(info_stealth[d]<0){info_stealth[d]=0;}
						}
						
					}
				}
			//}		
		}
		
		//card_cost_effect(card_no);

			
		agent_update();
		//new_card();
		//spy_catcher(scene);
	}
	else if(card_type[card_no]==3)
	{
		if(action_type[card_no]==0) //Map Color Shuffle - yellow
		{
			new_yellow_block_category_number(yellow_police_choice);

		}
		else if(action_type[card_no]==1) //Red police
		{
			new_red_police_map_number(red_police_choice);
		}

		//police_graphic_update(1);
		agent_update();
		if(auto_card[card_no]==0){new_card(-1,scene);}
		
	}
	else if(card_type[card_no]==4)
	{
		for(var d=0; d<56; d++)
		{
			if(agent_present[d] == 1 && red_police_array[d] == 0 && yellow_police_array[d] == 0)
			{
				if(action_var_1[card_no] == 0) // target charactaristic
				{
					if(agent_char_1[d] == action_var_2[card_no] || agent_char_2[d] == action_var_2[card_no])
					{
						if(action_type[card_no]==0)
						{
							info_value[d]=info_value[d]+action_var_3[card_no];	
							if(info_value[d]>9){info_value[d]=9;}	
						}
						else if(action_type[card_no]==1)
						{
							info_stealth[d]=info_stealth[d]+action_var_3[card_no];	
							if(info_stealth[d]>9){info_stealth[d]=9;}
						}
						else if(action_type[card_no]==2)
						{
							if(vp_map_boxes[d]==1)
							{
								vp_map_box_score_array[d] = vp_map_box_score_array[d] + action_var_3[card_no];
								if(vp_map_box_score_array[d]>9){vp_map_box_score_array[d]=9;}
							}
						}
						
							
							
					}
				}
				else if(action_var_1[card_no] == 1) // target box type
				{
					
					
					if(map_colors_array[d] == action_var_2[card_no])
					{
						if(action_type[card_no]==0)
						{
							info_value[d]=info_value[d]+action_var_3[card_no];	
							if(info_value[d]>9){info_value[d]=9;}
						}
						else if(action_type[card_no]==1)
						{
							info_stealth[d]=info_stealth[d]+action_var_3[card_no];	
							if(info_stealth[d]>9){info_stealth[d]=9;}
						}
						else if(action_type[card_no]==2)
						{
							if(vp_map_boxes[d]==1)
							{
								vp_map_box_score_array[d] = vp_map_box_score_array[d] + action_var_3[card_no];
								if(vp_map_box_score_array[d]>9){vp_map_box_score_array[d]=9;}
							}
						}
						
					}
				}
			}		
		}
		
		card_cost_effect(card_no);
		agent_update();
		if(auto_card[card_no]==0){new_card(-1,scene);}
		
	}
	else if(card_type[card_no]==5)
	{
		
		phase = 1;
		dim_map(-1);
		
		
		
		for(var p=0; p<56; p++)
		{
			if(agent_present[p] == 1)
			{
				red_map_border_array[p].visible = true;
				bright_map(p);						
			}
		}
		
		instruction_box.text = "Turn "+turn+"/"+max_turn+" - Pick an agent with a red border to remove from the board.";
		
	}
	else if(card_type[card_no]==6)
	{
		
		
		if(action_type[card_no]==1)
		{
			military_points=military_points+action_var_1[card_no];	
			military_point_text.text = military_points+carbon_text;	
		}
		else if(action_type[card_no]==2)
		{
			diplomacy_points=diplomacy_points+action_var_1[card_no];
			diplomacy_point_text.text = diplomacy_points+agent_name_text;	
		}
		
		//played[action_card_choice]=1;
				
		card_cost_effect(card_no);		
		agent_update();
		if(auto_card[card_no]==0){new_card(-1,scene);}

	}
	else if(card_type[card_no]==8)
	{
		
		if(card_resource_check(card_no) == 1)
		{
			if(action_type[card_no] == 0)
			{
				geoforming_points=geoforming_points+action_var_1[card_no];
				geoforming_point_text.text = geoforming_points+geoforming_text;
 
				
				if(play_once[card_no]==1){played[card_no] = 1;}
			}
		
		}
			
		card_cost_effect(card_no);
		agent_update();
		if(auto_card[card_no]==0){new_card(-1,scene);}
		
	}
	else if(card_type[card_no]==9)
	{
		if(action_type[card_no]==0)
		{
			for(var d=0; d<56; d++)
			{	
				if(map_colors_array[d] == action_var_2[card_no] && info_value[d] >= action_var_3[card_no])
				{
					carbon_level[Math.floor(d/7,0)] = carbon_level[Math.floor(d/7,0)] - action_var_1[card_no]; 	
					if(carbon_level[Math.floor(d/7,0)] < 0){carbon_level[Math.floor(d/7,0)]=0;}
					agent_update();
				}
			}	
		}
		else if(action_type[card_no]==1)
		{
			for(var d=0; d<56; d++)
			{	
				if(map_colors_array[d] == action_var_2[d] && stealth_level[d] >= action_var_3[d])
				{
					carbon_level[Math.floor(d/7,0)] = carbon_level[Math.floor(d/7,0)] - action_var_1[card_no];
					if(carbon_level[Math.floor(d/7,0)] < 0){carbon_level[Math.floor(d/7,0)]=0;}
					agent_update();
				}
			}				
		}
		else if(action_type[card_no]==2)
		{
			for(var d=0; d<56; d++)
			{	
				if(code_1[d] == action_var_2[card_no] || code_2[d] == action_var_2[card_no])
				{
					carbon_level[Math.floor(d/7,0)] = carbon_level[Math.floor(d/7,0)] + action_var_1[card_no]; 	
					if(carbon_level[Math.floor(d/7,0)] > 9){carbon_level[Math.floor(d/7,0)]=9;}
					agent_update();
				}
			}	
		}


	}
	else if(card_type[card_no]==10)
	{
		if(action_type[card_no]==0)
		{
			for(var d=0; d<56; d++)
			{			
				//console.log("action_var_2: "+action_var_2[card_no]+" map_colors_array: "+map_colors_array[d]+" info_value: "+info_value[d]+" action_var_3: "+action_var_3[card_no]);
				if(map_colors_array[d] == action_var_2[card_no] && info_value[d] >= action_var_3[card_no])
				{
					military_points = military_points - action_var_1[card_no]; 	
					//if(military_points < 0){military_points=0;}
					military_point_text.text = military_points+carbon_text;
					//if(military_points >= 0){military_point_text.text = military_points+carbon_text;}
					//else if(military_points < 0){military_point_text.text = '-'+military_points+carbon_text;}
				}
			}	

			card_cost_effect(card_no);		
			agent_update();
			if(auto_card[card_no]==0){new_card(-1,scene);}
	
		}	
		else if(action_type[card_no]==1)
		{
			for(var d=0; d<56; d++)
			{			
				//console.log("action_var_2: "+action_var_2[card_no]+" map_colors_array: "+map_colors_array[d]+" info_value: "+info_value[d]+" action_var_3: "+action_var_3[card_no]);
				if(map_colors_array[d] == action_var_2[card_no] && info_value[d] >= action_var_3[card_no])
				{
					
					diplomacy_points = diplomacy_points + action_var_1[card_no]; 	
					//if(diplomacy_points < 0){diplomacy_points=0;}
					diplomacy_point_text.text = diplomacy_points+agent_name_text;	
					
				}
			}

			card_cost_effect(card_no);		
			agent_update();
			if(auto_card[card_no]==0){new_card(-1,scene);}

			
		}
	}	
	else if(card_type[card_no]==11)
	{
		
		phase = 11;
		dim_map(-1);
		
		
		
		for(var p=0; p<56; p++)
		{
			if(code_1[p] == action_var_1[card_no] || code_2[p] == action_var_1[card_no])
			{
				red_map_border_array[p].visible = true;
				bright_map(p);		
			}
		}
		
		card_in_play = card_no;
		
		if(play_once[card_no]==1){played[card_no] = 1;}
		
		instruction_box.text = "Turn "+turn+"/"+max_turn+" - Pick a box with a red border to change its region code.";
		
	}
	else if(card_type[card_no]==12)
	{
		if(action_type[card_no]==0)
		{
			
			rand_selection = -1;
			found_country = 0;
			try_count = 0;
				
			while(try_count < max_tries && found_country == 0)	
			{	
				rand_selection = Math.floor(Math.random()*56);
				
				if(map_colors_array[rand_selection] == action_var_2[card_no] && info_value[rand_selection] <= action_var_3[card_no] && red_police_array[rand_selection] < 1)
				{
					
					if(code_1[rand_selection]==-1){code_1[rand_selection] = action_var_1[card_no];}
					else if(code_2[rand_selection]==-1){code_2[rand_selection] = action_var_1[card_no];}
					try_count=try_count+1;				
					found_country = 1;
				}
			}

			card_cost_effect(card_no);		
			agent_update();
			if(auto_card[card_no]==0){new_card(-1,scene);}

			
		}
		
	}


}