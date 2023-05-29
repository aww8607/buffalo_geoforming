function dim_map(box_no)
{
	var alpha_holder = 1.0;//0.5;

    for(var r=0; r<map_boxes.length; r++)
	{
		if(box_no == -1 || box_no == r)
		{

		
			unit_back_box[r].alpha = alpha_holder;
			left_box[r][agent_char_1[r]].alpha = alpha_holder;
			right_box[r][agent_char_2[r]].alpha = alpha_holder;
			info_number_box[r].alpha = alpha_holder;
			stealth_level_text[r].alpha = alpha_holder;
			red_map_border_array[r].alpha = alpha_holder;
			black_border_array[r].alpha = alpha_holder;
			stealth_back_box[r].alpha = alpha_holder;
			
			map_big_police_array[r].alpha  = alpha_holder;
			map_small_police_array[r].alpha  = alpha_holder;
			map_small_yellow_police[r].alpha  = alpha_holder;

			
			map_boxes[r].alpha = alpha_holder;
			
			
			unit_back_box[r].alpha = 0.2;
			info_value[r].alpha = 0.2;
			info_number_box[r].alpha = 0.2;
			stealth_level_text[r].alpha = 0.2;
			stealth_back_box[r].alpha = 0.2;
				//vp_box_number[r].alpha = 0.2;


			if(info_value[r] >= 1 || info_stealth[r] >= 1)
			{
				unit_back_box[r].alpha = 1.0;
				info_value[r].alpha = 1.0;
				info_number_box[r].alpha = 1.0;
				stealth_level_text[r].alpha = 1.0;
				stealth_back_box[r].alpha = 1.0;
			}

		
		}
	
	}




}