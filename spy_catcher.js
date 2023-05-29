function spy_catcher(scene)
{
	var agent_found = 0;
	
	for(var r=0; r<map_boxes.length; r++)
	{
		if(info_stealth[r] == 0 && agent_present[r]==1)
		{
				
			military_points=military_points-info_value[r];
			
			military_point_text.text = military_points+carbon_text;
			
			agent_present[r] = 0;
			info_value[r] = 0;
			info_stealth[r] = 0;
			agent_char_1[r] = 0;
			agent_char_2[r] = 0;
			
			agent_update();
			
			agent_found = 1;
			
		}
		
		
	}
	
	if(agent_found == 1)
	{
		phase = 2;
		message_back_box_holder = new message_back_box(scene, 0);
	}
	else 
	{
		//new_card(-1);	
	
	}


}