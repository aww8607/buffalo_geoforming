function bright_map(box_no)
{

    for(var r=0; r<map_boxes.length; r++)
	{
		if(box_no == -1 || box_no == r)
		{
				//unit_back_box[r].alpha = 1.0;
				left_box[r][agent_char_1[r]].alpha = 1.0;
				right_box[r][agent_char_2[r]].alpha = 1.0;
				//info_number_box[r].alpha = 1.0;
				//stealth_level_text[r].alpha = 1.0;
				red_map_border_array[r].alpha = 1.0;
				black_border_array[r].alpha = 1.0;
				//stealth_back_box[r].alpha = 1.0;
				
				map_big_police_array[r].alpha  = 1.0;
				map_small_police_array[r].alpha  = 1.0;
				map_small_yellow_police[r].alpha  = 1.0;

				
				map_boxes[r].alpha = 1.0;
				
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
		
		if(red_police_array[r] > 0 || yellow_police_array[r] > 0)
		{
				unit_back_box[r].alpha = 0.3;
				left_box[r][agent_char_1[r]].alpha = 0.3;
				right_box[r][agent_char_2[r]].alpha = 0.3;
				info_number_box[r].alpha = 0.3;
				stealth_level_text[r].alpha = 0.3;
				red_map_border_array[r].alpha = 0.3;
				black_border_array[r].alpha = 0.3;
				stealth_back_box[r].alpha = 0.3;
			
		}
	}




}