function new_deck()
{
	var card_count = 0;
	new_deck_card_count = 0;
	var interation = 0;
	var max_iterations = 50000;
	var found_card = 0;
	var random_choice = 0;
	var agent_holder_deck = [];
	var agent_count = 0;
	var found_location = 0;
	
	pick_new_agents();	
	
	//for(var y=0; y<5000; y++)
	//{
	//	in_deck[y] = -1;
	//}

	for(var p=0; p<120; p++)
	{
		played[p]=0;	
		
	}
	
	for(var w=0; w<56; w++)
	{
		agent_present[w]=0;
		info_value[w] = 0;
		info_stealth[w] = 0;
		red_police_array[w] = 0
		yellow_police_array[w] = 0;

		code_1[w] = -1;
		code_2[w] = -1;
		
		if(w%7 != 0)
		{
			agent_present[w]=1;
		}
		
	}		
	

	//red_police_array[16] = 1;

	agent_update();	
	
		//played[random_choice]
	/*
	card_count = 0;
	agent_count = 0;
	
	//Add add agent cards
	for(var g=0; g<120; g++)
	{
		if(used[g]==1 && card_count < 10 && card_type[g]==0)
		{
			agent_holder_deck[agent_count]=g;
			agent_count=agent_count+1;	
		}
	}
	
	//lay agents
	for(var u=0; u<6; u++)
	{
		found_location = -1;
		interation = 0;
		
	
		
		while(interation<max_iterations && found_location == -1)
		{
			
			
			random_location_choice = Math.floor(Math.random()*56);
			
			if(agent_present[random_location_choice] != 1 && red_police_array[random_location_choice] == 0 && yellow_police_array[random_location_choice] == 0 && map_colors_array[random_location_choice] == u)
			{
				
				
				
				agent_present[random_location_choice] = 1;	
				
				info_value[random_location_choice] = Math.floor(Math.random()*starting_stealth_level);//info_level[game_agent_array[action_var_1[action_card_choice]]];
				info_stealth[random_location_choice] = starting_stealth_level;//stealth_level[game_agent_array[action_var_1[action_card_choice]]];
				agent_char_1[random_location_choice] = char_1[game_agent_array[u]];
				agent_char_2[random_location_choice] = char_2[game_agent_array[u]];

				//console.log("char_1: "+char_1[u]+" agent no "+game_agent_array[u]);

				found_location=1;	
			}
			
			interation=interation+1;	
		}
		
		
	}
	
	
	//lay 2 extra green/espianage agents
	for(var u=6; u<8; u++)
	{
		found_location = -1;
		interation = 0;
		
	
		
		while(interation<max_iterations && found_location == -1)
		{
			
			
			random_location_choice = Math.floor(Math.random()*56);
			
			if(agent_present[random_location_choice] != 1 && red_police_array[random_location_choice] == 0 && yellow_police_array[random_location_choice] == 0 && map_colors_array[random_location_choice] == 4)
			{
				
				
				
				agent_present[random_location_choice] = 1;	
				
				info_value[random_location_choice] = Math.floor(Math.random()*starting_stealth_level);//info_level[game_agent_array[action_var_1[action_card_choice]]];
				info_stealth[random_location_choice] = starting_stealth_level;//stealth_level[game_agent_array[action_var_1[action_card_choice]]];
				agent_char_1[random_location_choice] = char_1[game_agent_array[u]];
				agent_char_2[random_location_choice] = char_2[game_agent_array[u]];
				
				//console.log("game_agent_array: "+game_agent_array[u]+" char_1: "+char_1[game_agent_array[u]]);

				//agent_update();

				found_location=1;	
			}
			
			interation=interation+1;	
		}
		
		
	}
	
	if(demo_completed == 0)
	{
		for(var h = 0; h<56; h++)
		{
			agent_present[h] = demo_agent_present[h];	
				
			info_value[h] = demo_info_value[h];
			info_stealth[h] = demo_info_stealth[h];
			agent_char_1[h] = demo_agent_char_1[h];
			agent_char_2[h] = demo_agent_char_2[h];
			
		}
	}
	
	*/
	
	//Lay VP boxes
	
	
	for(var q = 0; q<56; q++)
	{
		
		vp_map_boxes[q] = 0;	
		vp_map_box_score_array[q] = 0;
	}
	
	
	
	if(demo_completed == 0)
	{
		for(var q = 0; q<56; q++)
		{	
			vp_map_boxes[q] = demo_vp_map_boxes[q];	
			vp_map_box_score_array[q] = demo_vp_map_boxes[q] * vp_map_box_score;
		}		
	}
	else
	{
		for(var w = 0; w<8; w++)
		{
			interation = 0;
			found_card = 0;
			random_choice = 0;
			
			/*	
			while(interation < max_iterations && found_card < 1)
			{
				random_choice = Math.floor(Math.random() * 56);
				
				if(agent_present[random_choice] == 0 && vp_map_boxes[random_choice]==0)
				{
					vp_map_boxes[random_choice]=1;
					vp_map_box_score_array[random_choice] = vp_map_box_score;
					found_card = 1;
					
				}
				
				interation=interation+1;
			}
			*/
		}
	}

	for(var b = 0; b < carbon_start_level.length; b++)
	{
		carbon_level[b] = carbon_start_level[b];	
	}

	agent_update();	
	
	//Add mission cards
	interation = 0;
	found_card = 0;
	random_choice = 0;
	
	
	/*
	while(interation < max_iterations && card_count < 1)
	{
		random_choice = Math.floor(Math.random() * 120);
		
		if(used[random_choice] == 1 && card_type[random_choice] == 1 && in_deck.includes(random_choice) == false)
		{
			
			in_deck[card_count]=random_choice;
			
			card_count=card_count+1;	
			mission_choice = random_choice;
		}
		
		interation=interation+1;
	}
	*/

	in_deck.splice(0);

	in_deck[card_count] = 18; //0
	card_count=card_count+1;	
	
	in_deck[card_count] = 2; //1
	card_count=card_count+1;	
	
	in_deck[card_count] = 12; //2
	card_count=card_count+1;

	in_deck[card_count] = 13; //3
	card_count=card_count+1;
	
	in_deck[card_count] = 14; //4
	card_count=card_count+1;
	
	in_deck[card_count] = 15; //5
	card_count=card_count+1;
	
	in_deck[card_count] = 17; //6
	card_count=card_count+1;
	
	in_deck[card_count] = 7; //7
	card_count=card_count+1;

	in_deck[card_count] = 11; //8
	card_count=card_count+1;

	in_deck[card_count] = 11; //9
	card_count=card_count+1;

	in_deck[card_count] = 8; //10
	card_count=card_count+1;




    add_deck[0] = 19;
    add_deck[1] = 3;
    add_deck[2] = 20;
	
	
	
	
	
	
	
	
	

}