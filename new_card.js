function new_card(card_pick,scene)
{
	
	var current_choice = action_card_choice;
	var interation = 0;
	var max_iterations = 50000;
	var found_card = 0;
	var random_choice = 0;
	var played_agent_card_count = 0;
	var deck_position = -1;
	
	
	current_deck_position=-1;	
	
	for(var g=0; g<played.length; g++)
	{
		if(card_type[g]==0 && played[g]==1)
		{
			played_agent_card_count=played_agent_card_count+1;
		}
	}
	
	//spy_catcher();
	
	if(current_choice>-1){action_card_array[current_choice].visible = false;}
	
	menu_buttons[2].visible = false;
	menu_buttons[3].visible = false;
	menu_buttons[4].visible = false;
	
	
	perm_action_playability_check();
	
	if(step> 0)
	{
		
		if(step == 1){action_card_choice = 2;} 
		else if(step == 5){action_card_choice = 11;} 
		else if(step == 12){action_card_choice = 8;} 
		else if(step == 13){action_card_choice = 38;}
	}
	else if(turn == 0)
	{
		action_card_choice = mission_choice;
	}
	else if(card_pick>-1)
	{
		action_card_choice = in_deck[card_pick];
		current_deck_position = card_pick;
	}
	else
	{
		while(interation < max_iterations && found_card == 0)
		{
			deck_position = Math.floor(Math.random() * in_deck.length);	
			
			random_choice = in_deck[deck_position];
			
			//if(random_choice != current_choice && used[random_choice] == 1 && played[random_choice] == 0 && random_choice != -1)
			if(used[random_choice] == 1 && played[random_choice] == 0 && random_choice != -1)
			{
				if(turn < selection_threshold && played_agent_card_count < played_agent_card_count_threshold)
				{
					if(card_type[random_choice]==0)
					{
						action_card_choice = random_choice;
						current_deck_position = deck_position;
						found_card = 1;	
												
					}
				}
				else if(turn <= surviellence_start_threshold && card_type[random_choice] != 3)
				{
					action_card_choice = random_choice;
					current_deck_position = deck_position;
					found_card = 1;	
					
				}
				else if(turn > surviellence_start_threshold)
				{
					
					
					if(card_type[random_choice] == 3)
					{
						if(action_var_4[random_choice] == 0 && temp_change_value  > 1.0)
						{
							action_card_choice = random_choice;
							current_deck_position = deck_position;
							found_card = 1;									
						}	
						else if(action_var_4[random_choice] == 1 && temp_change_value  > 2.0)
						{
							action_card_choice = random_choice;
							current_deck_position = deck_position;
							found_card = 1;																
						}
						else if(action_var_4[random_choice] == 2 && temp_change_value  > 3.0)
						{
							action_card_choice = random_choice;
							current_deck_position = deck_position;
							found_card = 1;																
						}
						else if(action_var_4[random_choice] == 3 && temp_change_value  > 3.0)
						{
							action_card_choice = random_choice;
							current_deck_position = deck_position;
							found_card = 1;																
						}
						
					}
					else
					{
						//Code around warming level comes here
						//check the card's action var number
						
						//console.log("found one");
						action_card_choice = random_choice;
						current_deck_position = deck_position;
						found_card = 1;	
					}
				}
			}
			
			interation=interation+1;
		}
	}

	turn=turn+1;

	check_playability(action_card_choice);


	action_card_array[action_card_choice].visible = true;
	menu_buttons[3].visible = true; //Pass button
	
	if(card_type[action_card_choice]== 2 && playable == 1)
	{
		if(auto_card[action_card_choice]==0){menu_buttons[4].visible = true;}
		else if(auto_card[action_card_choice]==1){menu_buttons[4].visible = false;}	//Block Button
		
		instruction_box.text = "Turn "+turn+"/"+max_turn+" - Press the PASS or a PLAY button in the lower left-hand corner of the card.";
		
	}
	else if(card_type[action_card_choice]== 3 && playable == 1)
	{
		if(auto_card[action_card_choice]==0){menu_buttons[4].visible = true;}
		else if(auto_card[action_card_choice]==1){menu_buttons[4].visible = false;}	//Block Button
		
		
		instruction_box.text = "Turn "+turn+"/"+max_turn+" - Press the PASS or a PLAY button in the lower left-hand corner of the card.";
		
	}	
	else if((card_type[action_card_choice] < 2 || card_type[action_card_choice]> 3) && playable == 1)
	{
		if(auto_card[action_card_choice]==0){menu_buttons[2].visible = true;} //Play button
		else if(auto_card[action_card_choice]==1){menu_buttons[2].visible = false;}
		instruction_box.text = "Turn "+turn+"/"+max_turn+" - Press the PASS or a PLAY button in the lower left-hand corner of the card.";
	}
	else 
	{
		instruction_box.text = "Turn "+turn+"/"+max_turn+" - Press the PASS or a PLAY button in the lower left-hand corner of the card.";	
	}
	
	temp_change_calc(scene);
	
	
	setup_card(action_card_choice);

	game_saved = 1;
	save_game();

	
	if(turn >= max_turn)
	{
		menu_back_box_holder = new menu_back_box(scene, 3);
	}

	
	
}