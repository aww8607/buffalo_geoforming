function agent_update()
{
	for(var g=0; g<56; g++)
	{
		unit_back_box[g].visible = false;
		info_number_box[g].visible = false;
		stealth_level_text[g].visible = false;
		stealth_back_box[g].visible = false;
		vp_box_number[g].visible = false;
		map_big_police_array[g].visible = false;
		mitigation_marker[g].visible = false;

		info_value[g].alpha = 0.2;
		info_number_box[g].alpha = 0.2;
		stealth_level_text[g].alpha = 0.2;
		stealth_back_box[g].alpha = 0.2;
		vp_box_number[g].alpha = 1.0;
		
		for(var f=0; f<no_box_codes; f++)
		{
			left_box[g][f].visible = false;
			right_box[g][f].visible = false;
		}
	
	}
	
	for(var w=0; w<56; w++)
	{
		if(agent_present[w]==1)
		{
			
			
			
			if(info_value[w]>0)
			{	
				
				
				unit_back_box[w].visible = true;
				unit_back_box[w].alpha = 1.0;


				info_value[w].alpha = 1.0;
				//left_box[w][agent_char_1[w]].visible = true;
				//right_box[w][agent_char_2[w]].visible = true;
			
				info_number_box[w].text = info_value[w];
				info_number_box[w].visible = true;
				info_number_box[w].alpha = 1.0;
				//info_number_box[w].depth = 91;	
			}
			
			if(info_stealth[w]>0)
			{
				stealth_level_text[w].text = info_stealth[w];
				stealth_level_text[w].visible = true;
				stealth_level_text[w].alpha = 0.5;
				
				stealth_back_box[w].visible = true;
				stealth_back_box[w].alpha = 0.2;
			}
			
			if(info_value[w] >= 1 || info_stealth[w] >= 1)
			{
				unit_back_box[w].alpha = 1.0;
				info_value[w].alpha = 1.0;
				stealth_level_text[w].alpha = 1.0;
				stealth_back_box[w].alpha = 1.0;
			}
			
		}
		//console.log("code_1: "+code_1[w]);
		
		if(code_1[w]>-1)
		{
			left_box[w][code_1[w]].visible = true;
			
		}
		
		if(code_2[w]>-1)
		{
			right_box[w][code_2[w]].visible = true;
		}
		
		
		if(vp_map_boxes[w]==1)
		{
			//vp_box_number[w].text = vp_map_box_score_array[w]+"VVVV";
			//vp_box_number[w].text = "VVVV";
			//vp_box_number[w].visible = true;
			mitigation_marker[w].visible = true;
		}
		else if(red_police_array[w] == 1)
		{
			map_big_police_array[w].visible = true;	
			//console.log("storm");
		}
			
	}
	
	political_control_check();

	for(var r=0; r<8; r++)
	{
		//left_resource_array[r][e].alpha = 0.3;
		//right_resource_array[r][e].alpha = 0.3;
		
		left_resource_array[r][resource_1[r]].visible = true;
		right_resource_array[r][resource_2[r]].visible = true;

		left_resource_array[r][resource_1[r]].alpha = 0.3;
		right_resource_array[r][resource_2[r]].alpha = 0.3;			

		
		if(political_control_check[r]>0)
		{
			left_resource_array[r][resource_1[r]].alpha = 1.0;
			right_resource_array[r][resource_2[r]].alpha = 1.0;			
		}
	
		control_text_array[r].text = control_level[r]+"/"+control_threshold[r];
		
		if(carbon_level[r]>0)
		{
			carbon_output_text[r].text = "+"+carbon_level[r];
			carbon_output_text[r].x = 325+2+(64-carbon_output_text[r].width)/2;
		}
		else
		{
			carbon_output_text[r].text = "0"//carbon_level[r];
			carbon_output_text[r].x = 325+2+(64-carbon_output_text[r].width)/2;
		}
	}	

}