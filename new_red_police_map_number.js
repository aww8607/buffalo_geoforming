function new_red_police_map_number(current_number)
{
	var random_choice = -1;
	var iteration = 0;
	var found_choice = 0;
	
	while(found_choice == 0 && iteration < 5000)
	{
		random_choice = Math.floor(Math.random()*56);
		//if(random_choice != current_number && agent_present[random_choice] == 0 && random_choice >6 && random_choice <49 && random_choice % 7 != 0 &&  random_choice % 7 != 6)
		//{
		//	red_police_choice = random_choice;
		//	found_choice = 1;
		//}
		
		if(vp_map_boxes[random_choice] == 0 && random_choice%7 != 0 && red_police_array[random_choice] < 1)
		{
			red_police_choice = random_choice;
			
			red_police_array[random_choice] = 1;
			
			info_value[random_choice] = 0;
			info_stealth[random_choice] = 0;
			code_1[random_choice] = -1;
			code_2[random_choice] = -1;
			
			//map_big_police_array[random_choice].visible = true;
			found_choice = 1;
		}
		
		iteration=iteration+1;
	}



}