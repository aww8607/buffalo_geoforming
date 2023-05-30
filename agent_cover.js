class agent_cover extends Phaser.GameObjects.Container 
{
    
	constructor(scene, card_no) 
	{
		
		super(scene);
		this.scene = scene;
		
		
		var backer = this.scene.add.image(0, 0, card_graphics_array[2]).setInteractive();
		backer.setOrigin(0,0);
		this.add(backer);	

		
		backer.on('pointerdown', () => {this.alpha = 0.3; this.clickMe(scene, card_no);});
		backer.on('pointerup', () => {this.alpha = 1.0; this.unclickMe(scene, card_no);});

		this.scene.add.existing(this);
		
    }

	clickMe(scene, c_no)
    {
    	
		/*
		unit_back_box[c_no].alpha = 0.3;
		left_box[c_no][agent_char_1[c_no]].alpha = 0.3;
		right_box[c_no][agent_char_2[c_no]].alpha = 0.3;
		info_number_box[c_no].alpha = 0.3;
		stealth_level_text[c_no].alpha = 0.3;
		red_map_border_array[c_no].alpha = 0.3;
		black_border_array[c_no].alpha = 0.3;
		
		map_boxes[c_no].alpha = 0.3;
		*/
		dim_map(c_no);

	}
	
	unclickMe(scene, c_no)
	{
		
		/*
		//console.log(c_no);
		unit_back_box[c_no].alpha = 1.0;
		left_box[c_no][agent_char_1[c_no]].alpha = 1.0;
		right_box[c_no][agent_char_2[c_no]].alpha = 1.0;
		info_number_box[c_no].alpha = 1.0;
		stealth_level_text[c_no].alpha = 1.0;
		red_map_border_array[c_no].alpha = 1.0;	
		black_border_array[c_no].alpha = 1.0;	
		
		map_boxes[c_no].alpha = 1.0;
		*/
		bright_map(c_no);
		
		
		if(agent_present[c_no] != 1)
		{
			/*
			agent_present[c_no] = 1;
			info_value[c_no] = Math.floor(Math.random()*10);
			info_stealth[c_no] = Math.floor(Math.random()*10);
			agent_char_1[c_no] = Math.floor(Math.random()*11);
			agent_char_2[c_no] = Math.floor(Math.random()*11);
			*/
			
			//red_map_border_array[c_no].visible = true;
			//black_border_array[c_no].visible = true;
		}
		
		if(step == 11 && c_no == 6)
		{
			phase = 4;	
		}
		
		
		if(phase == 0) //info box
		{
			if(c_no % 7 != 0)
			{
				//console.log("region");	
				info_element_box_holder = new info_element_box(scene,0,c_no);
			
			}
			else if(c_no % 7 == 0)
			{
				
				info_element_box_holder = new info_element_box(scene,1,c_no);

				//console.log("country");
			}
			
		}
		else if(phase == 1) //exfiltration
		{
			
			if(agent_present[c_no] == 1)
			{
				
				agent_present[c_no] = 0;
				info_value[c_no] = 0;
				info_stealth[c_no] = 0;
				agent_char_1[c_no] = 0;
				agent_char_2[c_no] = 0;

				bright_map(-1);
				agent_update();
				new_card(-1, scene);
				
				phase = 0;
				
			}		
		}
		else if(phase == 3) //increase stealth_level_text
		{
			if(info_value[c_no]<9 && agent_present[c_no] == 1)	
			{	
				info_value[c_no] = info_value[c_no] + 1;
				bright_map(-1);
				agent_update();
				new_card(-1, scene);
				
				if(permanent_cost_meta_type_1[0] == 1)
				{
					if(permanent_cost_type_1[0]==0) //victory points
					{
						military_points=military_points-1;
					}
					else if(permanent_cost_type_1[0]==1)
					{
						diplomacy_points=diplomacy_points-1;
					}
				}

				diplomacy_point_text.text = diplomacy_points+agent_name_text;
				military_point_text.text = military_points+carbon_text;
				
				perm_action_playability_check();
				
				phase = 0;
			}
		}
		else if(phase == 4) //increase info level
		{
			if(info_value[c_no]>0 && agent_present[c_no] == 1)
			{
				demo_update(scene, step, 0, c_no);				

				info_value[c_no]=info_value[c_no]-1;
				bright_map(-1);
				agent_update();
				new_card(-1, scene);
				
				if(permanent_cost_meta_type_1[1] == 1)
				{
					if(permanent_cost_type_1[1]==0) //victory points
					{
						military_points=military_points1+1;
					}
					else if(permanent_cost_type_1[1]==1)
					{
						diplomacy_points=diplomacy_points+1;
					}
				}
				
				diplomacy_point_text.text = diplomacy_points+agent_name_text;
				military_point_text.text = military_points+carbon_text;
				perm_action_playability_check();
					
				phase = 0;
				

			}
		}
		else if(phase == 8)
		{
				
				agent_present[c_no] = 1;
				info_value[c_no] = Math.floor(Math.random()*starting_stealth_level);//info_level[game_agent_array[action_var_1[action_card_choice]]];
				info_stealth[c_no] = starting_stealth_level;//stealth_level[game_agent_array[action_var_1[action_card_choice]]];
				agent_char_1[c_no] = char_1[game_agent_array[agent_placement_holder]];
				agent_char_2[c_no] = char_2[game_agent_array[agent_placement_holder]];
			
				//console.log('agent: '+game_agent_array[agent_placement_holder]+' card: '+agent_placement_holder+' agent_char_1 '+agent_char_1[c_no]+' agent_char_2 '+agent_char_2[c_no]);
			
			
				//bright_map(random_location_choice);
				agent_update();
				new_card(-1, scene);
				phase = 0;
		}
		else if(phase == 10) //increase stealth_level_text
		{
			if(vp_map_boxes[c_no] == 0 && c_no%7 != 0)	
			{	
				//info_stealth[c_no] = info_stealth[c_no] + 1;
				vp_map_boxes[c_no] = 1;
				bright_map(-1);
				agent_update();
				new_card(-1, scene);
				
				phase = 0;
			}
		}
		else if(phase == 11) //change region code
		{
			
			//console.log(card_in_play);
			
			if(code_1[c_no] == action_var_1[card_in_play])
			{
				code_1[c_no] = action_var_2[card_in_play]
				//console.log("found one");
			}
			else if (code_2[c_no] == action_var_1[card_in_play])
			{
				code_2[c_no] = action_var_2[card_in_play]
				//console.log("found one");
			
			}
			
			
			agent_update();
			new_card(-1, scene);
			phase = 0;		
			
			card_in_play = -1;
		}
		
		/*
		else if(agent_present[c_no] == 1) 
		{
			agent_present[c_no] = 0;
			info_value[c_no] = 0;
			info_stealth[c_no] = 0;
			agent_char_1[c_no] = -1;
			agent_char_2[c_no] = -1;
			
		}
		*/
		
		//agent_update();
		
	}
}	
